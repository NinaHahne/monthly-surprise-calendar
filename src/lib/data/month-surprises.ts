export type MonthSurprise = {
  monthIndex0: number; // 0..11
  title: string;
  image?: string; // public path
  text?: string;
  link?: { href: string; label: string };
};

export function buildMonthSurprises(): MonthSurprise[] {
  return Array.from({ length: 12 }, (_, i) => ({
    monthIndex0: i,
    title: `${monthLabelDE(i)} surprise`,
    image: '/example-surprise.jpg',
  }));
}

export function monthLabelDE(monthIndex0: number): string {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return months[monthIndex0] ?? `Month ${monthIndex0 + 1}`;
}
