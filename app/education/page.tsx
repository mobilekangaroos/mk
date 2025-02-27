
import EducationPage from '@/components/EducationPage';

import { generatePageMetadata } from '@/app/utils/metadata';

export const metadata = generatePageMetadata({
  title: 'Android & iPad Tablet Repair Services for School | Seamless Solutions | Mobilekangaroo',
  description: "We help schools and colleges by providing timely and efficient device repair services. We provide expert iPad technicians for quick and affordable services.",
  keywords: 'expert iPad technicians, affordable iPad repair services for school, quick repair iPad and computers for school and colleges',
  canonicalUrl: 'https://www.mobilekangaroo.com/business',
});

export default function Page() {
  return <EducationPage />
}
