"use client";
import { MicIcon, PauseIcon, XIcon } from "@/app/_assets/icon/Icon";
import React, { useRef, useState } from "react";
import Button from "../../ui/Button";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

const Record = () => {
  const t = useTranslations();
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);

  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const silenceTimerRef = useRef(null);
  const startedAtRef = useRef(0);
  const isStoppingRef = useRef(false);

  /* ------------------ 🎤 START ------------------ */
  const handleStart = async () => {
    try {
      if (!window.MediaRecorder) {
        toast.error(t("mediaRecorder_not_support"));
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      streamRef.current = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        console.log("chunk size:", e.data.size);
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        console.log("STOP FIRED");
        console.log("chunks:", chunksRef.current.length);

        if (!chunksRef.current.length) {
          console.warn("No audio recorded!");
          return;
        }

        const blob = new Blob(chunksRef.current, {
          type: "audio/webm",
        });

        const url = URL.createObjectURL(blob);

        console.log("audio URL:", url);

        // 🔊 play recorded audio (test)
        const audio = new Audio(url);
        audio.play();
      };

      // 🔥 important fix
      mediaRecorder.start(200);

      startedAtRef.current = Date.now();

      startSilenceDetection(stream);

      setIsRecording(true);
      setIsPaused(false);
    } catch (err) {
      console.error(err);
      toast.error(t("mic_permission_denied"));
    }
  };

  /* ------------------ 🛑 STOP ------------------ */
  const handleStop = () => {
    if (isStoppingRef.current) return;
    isStoppingRef.current = true;

    mediaRecorderRef.current?.stop();
    streamRef.current?.getTracks().forEach((track) => track.stop());

    cleanupAudio();

    setIsRecording(false);
    setIsPaused(false);

    setTimeout(() => {
      isStoppingRef.current = false;
    }, 500);
  };

  /* ------------------ ⏸ PAUSE ------------------ */
  const handlePause = () => {
    if (!mediaRecorderRef.current) return;

    if (isPaused) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
    } else {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
    }
  };

  /* ------------------ 🤫 SILENCE DETECTION ------------------ */
  const startSilenceDetection = (stream) => {
    const audioContext = new AudioContext();
    const analyser = audioContext.createAnalyser();
    const mic = audioContext.createMediaStreamSource(stream);

    mic.connect(analyser);
    analyser.fftSize = 512;

    audioContextRef.current = audioContext;
    analyserRef.current = analyser;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const checkVolume = () => {
      if (!analyserRef.current) return;

      analyser.getByteFrequencyData(dataArray);

      const volume = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;

      console.log("volume:", volume);

      const now = Date.now();

      // prevent early stop
      if (volume < 2 && now - startedAtRef.current > 1000) {
        if (!silenceTimerRef.current) {
          silenceTimerRef.current = setTimeout(() => {
            console.log("AUTO STOP (silence)");

            toast.info("User stopped talking 🎤"); // ✅ TEST

            handleStop();
          }, 2000);
        }
      } else {
        clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = null;
      }

      requestAnimationFrame(checkVolume);
    };

    checkVolume();
  };

  /* ------------------ 🧹 CLEANUP ------------------ */
  const cleanupAudio = () => {
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    analyserRef.current = null;
    silenceTimerRef.current = null;
  };

  /* ------------------ UI ------------------ */
  return (
    <section className="flex_center gap-8 absolute bottom-12 left-1/2 -translate-x-1/2">
      {isRecording && (
        <Button
          onClick={handleStop}
          icon={<XIcon />}
          size="free"
          className="size-[56px]"
          variant="glass"
        />
      )}

      <button
        onClick={isRecording ? handleStop : handleStart}
        className="mic_button relative bg-primary-container transition hover:bg-primary size-20 shadow_primary rounded-full flex items-center justify-center"
      >
        <MicIcon />
      </button>

      {isRecording && (
        <Button
          onClick={handlePause}
          icon={<PauseIcon />}
          size="free"
          className="size-[56px]"
          variant="glass"
        />
      )}
    </section>
  );
};

export default Record;
