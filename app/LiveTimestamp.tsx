"use client";

import React from "react";
import ReactTimeAgo from "react-timeago";

type Props = {
  time: string;
};

const LiveTimestamp = ({ time }: Props) => {
  return <ReactTimeAgo date={time} />;
};

export default LiveTimestamp;
