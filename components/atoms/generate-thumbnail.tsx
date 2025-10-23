export const generateVideoThumbnail = (file: File, seekTime = 1): Promise<string> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Canvas 2D context not supported"));
        return;
      }

      video.src = URL.createObjectURL(file);
      video.preload = "metadata";
      video.muted = true;
      video.playsInline = true;
  
      video.onloadedmetadata = () => {
        if (video.duration < seekTime) seekTime = 0;
        video.currentTime = seekTime;
      };
  
      video.onseeked = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(video.src);
        const base64Data = canvas.toDataURL("image/jpeg", 0.8);
        resolve(base64Data);
      };
  
      video.onerror = (e) => {
        console.error("Error loading video file", e);
        reject(new Error("Error loading video file"));
      };
    });
  };

  export function base64ToFile(
    base64String: string,
    filename = "thumbnail.png",
  ): File {
    const arr = base64String.split(",");
    const mime = arr[0].match(/:(.*?);/)?.[1] || "image/png";
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new File([u8arr], filename, { type: mime });
  }
  