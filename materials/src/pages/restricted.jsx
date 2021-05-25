import { useLocation } from "react-router";
import { PageHeader } from "../components/page-header";

export const NotAllowedPage = () => {
  const location = useLocation();

  console.log('🚀 ~ location', location);

  return (
    <>
      <PageHeader>'Restricted!'</PageHeader>
      <p>You're not allowed to visit <strong>{location.state?.form}</strong>page. Please login first.</p>
    </>
  )
};