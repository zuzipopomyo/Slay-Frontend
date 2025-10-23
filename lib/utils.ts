import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMediaSize(
  file: File,
): Promise<{ width: number; height: number; type: "image" | "video" }> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);

    if (file.type.startsWith("image/")) {
      const img = new Image();

      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight,
          type: "image",
        });
        URL.revokeObjectURL(url);
      };

      img.onerror = () => {
        reject(new Error("Couldn’t load image"));
        URL.revokeObjectURL(url);
      };

      img.src = url;
    } else if (file.type.startsWith("video/")) {
      const video = document.createElement("video");

      video.onloadedmetadata = () => {
        resolve({
          width: video.videoWidth,
          height: video.videoHeight,
          type: "video",
        });
        URL.revokeObjectURL(url);
      };

      video.onerror = () => {
        reject(new Error("Couldn’t load video"));
        URL.revokeObjectURL(url);
      };

      video.preload = "metadata";
      video.src = url;
    } else {
      reject(new Error("Unsupported file type"));
      URL.revokeObjectURL(url);
    }
  });
}

export function getThumbnail(file: File): Promise<{
  thumbnailFile?: File;
}> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);

    if (file.type.startsWith("video/")) {
      const video = document.createElement("video");

      video.preload = "metadata";
      video.src = url;
      video.muted = true;
      video.playsInline = true;

      video.onloadedmetadata = () => {
        const seekTo = Math.min(0.1, video.duration);
        video.currentTime = seekTo;
      };

      video.onseeked = () => {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Could not get canvas context"));
          URL.revokeObjectURL(url);
          return;
        }

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Could not create thumbnail blob"));
              URL.revokeObjectURL(url);
              return;
            }

            const thumbnailFile = new File([blob], "thumbnail.jpg", {
              type: "image/jpeg",
              lastModified: Date.now(),
            });

            resolve({
              thumbnailFile,
            });

            URL.revokeObjectURL(url);
          },
          "image/jpeg",
          0.9,
        );
      };

      video.onerror = () => {
        reject(new Error("Couldn’t load video"));
        URL.revokeObjectURL(url);
      };
    } else {
      reject(new Error("Unsupported file type"));
      URL.revokeObjectURL(url);
    }
  });
}

export function toClock(totalSeconds: number) {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  const two = (n: number) => String(n).padStart(2, "0");

  return hrs
    ? `${two(hrs)}:${two(mins)}:${two(secs)}`
    : `${two(mins)}:${two(secs)}`;
}

export function getCurrentLocation(): Promise<{
  latitude: number;
  longitude: number;
}> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser."));
    }

    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error: GeolocationPositionError) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
    );
  });
}

export const getActiveMention = (text: string) => {
  const words = text.trim().split(/\s+/);
  const lastWord = words[words.length - 1];

  if (
    lastWord.startsWith("@") ||
    (lastWord.startsWith("#") && lastWord.length > 1)
  ) {
    return lastWord.slice(1);
  }
  return null;
};

export const replaceLatestMention = (text: string, replacement: string) => {
  // return text.replace(/@(\w+)(?!.*@\w+)/, replacement);
  return text.replace(/(@\w+|#\w+)(?!.*(?:@\w+|#\w+))/, replacement);
};

export const avatarFallback = (firstName: string, lastName: string) => {
  return `${firstName.slice(0, 1)}${lastName.slice(0, 1)}`;
};
