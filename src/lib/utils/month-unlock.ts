export function monthUnlockAt(year: number, monthIndex0: number): Date {
  // monthIndex0: 0=Jan..11=Dec
  return new Date(year, monthIndex0, 1, 0, 0, 0, 0);
}

export function isMonthUnlocked(now: Date, year: number, monthIndex0: number): boolean {
  return now.getTime() >= monthUnlockAt(year, monthIndex0).getTime();
}

export function clampYear(input: number): number {
  // just a small guard in case of weird props
  if (!Number.isFinite(input)) return new Date().getFullYear();
  return Math.max(1970, Math.min(3000, Math.trunc(input)));
}
