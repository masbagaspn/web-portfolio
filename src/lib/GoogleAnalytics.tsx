import { Helmet } from "react-helmet";

export const GoogleAnalytics = () => {
  return (
    <Helmet>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4ZXV91B3TF"
      ></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-4ZXV91B3TF');`}
      </script>
    </Helmet>
  );
};
