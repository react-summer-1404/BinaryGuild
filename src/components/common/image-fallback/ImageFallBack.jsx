import React from "react";

const ImageFallBack = ({ src, alt, fallBack , ...props}) => {
  if (src == null || src == "" || src =="http://localhost:300/files/Image-1764743775676.png" || src == "http://sepehracademy.liara.run/files/undefined" || src == "http://localhost:300/files/Image-1763620520414.woff2" ) {
    src = fallBack;
  }
  return (
    <div>
      <img
        src={src}
        alt={alt}
        onError={() => {
          return (src = fallBack);
        }}
        {...props}
      />
    </div>
  );
};

export default ImageFallBack;
