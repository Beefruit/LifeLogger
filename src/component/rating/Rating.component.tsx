"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import classNames from "classnames/bind";
import styles from "./Rating.module.css";

const cx = classNames.bind(styles);

interface RatingProps {
  defaultValue?: number;
  onChange?: (value: number) => void;
}

const RatingComponent = ({ defaultValue = 0, onChange }: RatingProps) => {
  const [rating, setRating] = useState(defaultValue);

  const handleClick = (star: number) => {
    setRating(star);
    onChange?.(star);
  };

  return (
    <div className={cx("rating-container")}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={24}
          fill={star <= rating ? "gold" : "none"}
          stroke={star <= rating ? "gold" : "black"}
          onClick={() => handleClick(star)}
          style={{ cursor: "pointer" }}
          className={cx("rating-star")}
        />
      ))}
      <p className={cx("rating-text")}>{rating}/5</p>
    </div>
  );
};

export default RatingComponent;
