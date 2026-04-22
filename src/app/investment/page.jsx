import PageLayout from "../../components/layout/PageLayout";
import InvestmentBreadcrumb from "../../components/pages/investment/InvestmentBreadcrumb";
import InvestmentGrid from "../../components/pages/investment/InvestmentGrid";

export const metadata = {
  title: "مركز الاخبار - شركة كويك لمحطات الوقود",
  description: "مركز الاخبار - أحدث الأخبار والمستجدات لشركة كويك",
};

export default function InvestmentPage() {
  return (
    <PageLayout>
      <InvestmentBreadcrumb />
      <InvestmentGrid />
    </PageLayout>
  );
}
