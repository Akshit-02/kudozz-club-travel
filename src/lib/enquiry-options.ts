// Option lists shared by the homepage hero form and /plan-your-trip, so a
// value picked in the hero always matches an option on the full form.
import { travelStylesData } from "./travel-styles-data";

export const budgetOptions = [
  "Under ₹25,000 per person",
  "₹25,000 – ₹50,000 per person",
  "₹50,000 – ₹1,00,000 per person",
  "Above ₹1,00,000 per person",
  "Not sure yet",
];

export const tripTypeOptions = [
  ...travelStylesData.map((s) => s.name),
  "Couple Trip",
  "Solo Trip",
  "Not sure yet",
];

export const travellerOptions = ["1", "2", "3–4", "5–8", "9+"];
