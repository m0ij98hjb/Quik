import PageLayout from "../../components/layout/PageLayout";
import ContactBreadcrumb from "../../components/pages/contact/ContactBreadcrumb";
import ContactFormSection from "../../components/pages/contact/ContactFormSection";

export const metadata = {
  title: "تواصل معنا - شركة كويك لمحطات الوقود",
  description: "تواصل مع شركة كويك لمحطات الوقود - أبها، طريق الملك فهد",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <ContactBreadcrumb />
      <ContactFormSection />
    </PageLayout>
  );
}
