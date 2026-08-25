import Script from "next/script";

type BokunExperienceWidgetProps = {
  bookingChannelUUID: string;
  experienceId: string;
  className?: string;
};

export default function BokunExperienceWidget({
  bookingChannelUUID,
  experienceId,
  className = "",
}: BokunExperienceWidgetProps) {
  const widgetUrl = `https://widgets.bokun.io/online-sales/${bookingChannelUUID}/experience/${experienceId}`;
  const loaderUrl = `https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=${bookingChannelUUID}`;

  return (
    <div className={className}>
      <div className="bokunWidget" data-src={widgetUrl} />
      <Script src={loaderUrl} strategy="afterInteractive" />
    </div>
  );
}
