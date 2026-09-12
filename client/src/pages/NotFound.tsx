import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();
  return <div className="min-h-screen w-full flex items-center justify-center bg-[#f4f1e9] px-5"><div className="w-full max-w-lg text-center rounded-3xl border border-[#d9d4c8] bg-[#fcfbf7] p-10 shadow-sm"><div className="w-16 h-16 mx-auto rounded-full bg-[#efc400]/25 grid place-items-center mb-6"><AlertCircle className="h-8 w-8 text-[#9b7b00]" /></div><div className="font-display text-6xl font-bold text-[#27251f]">404</div><h1 className="font-display text-2xl font-bold mt-2">Puslapis nerastas</h1><p className="text-[#6d6a61] mt-3 mb-8">Šis puslapis neegzistuoja arba buvo perkeltas.</p><Button onClick={() => setLocation('/')} className="rounded-full bg-[#efc400] hover:bg-[#ffd72f] text-[#27251f] font-bold"><Home className="w-4 h-4 mr-2" />Grįžti į pradžią</Button></div></div>;
}
