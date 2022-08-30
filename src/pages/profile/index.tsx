import React from "react";
import { useParams } from "react-router-dom";
import ClientProfile from "./ClientProfile";

export default function Profile() {
  const { username } = useParams();
  return (
    <ClientProfile />
  )
}