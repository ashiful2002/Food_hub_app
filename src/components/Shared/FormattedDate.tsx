import React from "react";

interface FormattedDateProps {
  date: string | number | Date;
  showTime?: boolean;
  className?: string;
}

const FormattedDate: React.FC<FormattedDateProps> = ({
  date,
  showTime = false,
  className = "",
}) => {
  if (!date) return null;

  const options: Intl.DateTimeFormatOptions = showTime
    ? {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // 👈 forces AM/PM format
      }
    : {
        day: "2-digit",
        month: "short",
        year: "numeric",
      };

  const formatted = new Intl.DateTimeFormat("en-GB", options).format(
    new Date(date)
  );

  return <span className={className}>{formatted}</span>;
};

export default FormattedDate;
