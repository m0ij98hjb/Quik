import PageLayout from "../../components/layout/PageLayout";
import FranchiseHero from "../../components/pages/franchise/FranchiseHero";
import FranchiseServices from "../../components/pages/franchise/FranchiseServices";

export const metadata = {
  title: "الامتياز التجاري - شركة كويك لمحطات الوقود",
  description: "برنامج الامتياز التجاري - فرص استثمارية مميزة مع كويك",
};

export default function FranchisePage() {
  return (
    <PageLayout>
      <FranchiseHero />
      <FranchiseServices />
    </PageLayout>
  );
}
