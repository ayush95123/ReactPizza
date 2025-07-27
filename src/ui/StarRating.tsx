import React from "react";

type StarRatingProps = {
  rating: number;
  outOf?: number;
  fillColor?: string;
  strokeColor?: string;
  size?: number;
  gap?: string;
};

const StarRating = ({
  rating,
  outOf = 5,
  fillColor = "#facc15",    // yellow-400
  strokeColor = "#d1d5db",  // gray-300
  size = 24,
  gap = "0.25rem",          // Tailwind's gap-1
}: StarRatingProps) => {
  return (
    <div style={{ display: "flex", gap }}>
      {Array.from({ length: outOf }).map((_, i) => {
        const full = i + 1 <= rating;
        const partial = !full && i < rating;
        const fraction = rating - i;

        return (
          <div key={i} style={{ width: size, height: size, position: "relative" }}>
            {/* Star Outline */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke={strokeColor}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                width: size,
                height: size,
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.916c.969 0 1.371 1.24.588 1.81l-3.977 2.887a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.977-2.887a1 1 0 00-1.176 0l-3.977 2.887c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.097 10.1c-.783-.57-.38-1.81.588-1.81h4.916a1 1 0 00.95-.69l1.518-4.674z" />
            </svg>

            {/* Filled Portion */}
            {(full || partial) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={fillColor}
                style={{
                  width: size,
                  height: size,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  clipPath: partial
                    ? `inset(0 ${100 - fraction * 100}% 0 0)`
                    : "none",
                }}
              >
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.916c.969 0 1.371 1.24.588 1.81l-3.977 2.887a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.977-2.887a1 1 0 00-1.176 0l-3.977 2.887c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.097 10.1c-.783-.57-.38-1.81.588-1.81h4.916a1 1 0 00.95-.69l1.518-4.674z" />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
