import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyHireMe from '@/components/WhyHireMe';
import Services from '@/components/Services';
import WorkExperience from '@/components/WorkExperience';
import Portfolio from '@/components/Portfolio';
import BlogPosts from '@/components/BlogPosts';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyHireMe />
      <Services />
      <WorkExperience />
      <Portfolio />
      <BlogPosts />
      <Connect />
      <Footer />
    </main>
  );
}
