"use client";

type Props = {
  error: Error;
};

const Error = ({ error }: Props) => {
  return (
    <div>
      <p> {error.message}</p>
    </div>
  );
};

export default Error;
