'use client';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export default function Card({ title, children, className = '', gradient = 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20' }: CardProps) {
  return (
    <div className={`bg-gradient-to-br ${gradient} p-6 rounded-xl border border-gray-200 dark:border-gray-700 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}