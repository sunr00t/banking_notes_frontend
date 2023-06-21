'use client';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';

export default function DreamPage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8">
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
          Check your <span className="text-green-600">banking</span> notes:
        </h1>
        <Form />
      </main>
      <Footer />
    </div>
  );
}
