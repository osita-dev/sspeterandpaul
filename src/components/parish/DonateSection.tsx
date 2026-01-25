import { useState } from "react";
import { Heart, Copy,Check, Building2} from "lucide-react";
import { toast } from "sonner";

const bankDetails = {
  bankName: "First Bank of Nigeria",
  accountName: "SS Peter & Paul Catholic Church Shomolu",
  accountNumber: "2012345678",

};

export function DonateSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    toast.success(`${label} copied to clipboard!`);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="donate" className="py-16 bg-gradient-to-br from-amber-50 via-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-4">
            <Heart className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
            Support Our Parish
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto">
            Your generous contributions help us maintain our church, support our
            ministries, and serve our community. Every gift makes a difference.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Bank Details Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
            <div className="bg-rose-900 text-white px-6 py-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <h3 className="font-semibold text-lg">Bank Transfer</h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {/* Bank Name */}
              <div className="flex items-center justify-center p-3 bg-stone-50 rounded-lg">
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Bank Name</p>
                  <p className="font-medium text-zinc-800">{bankDetails.bankName}</p>
                </div>
              </div>

              {/* Account Name */}
              <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-zinc-500 mb-1">Account Name</p>
                  <p className="font-medium text-zinc-800 truncate">{bankDetails.accountName}</p>
                </div>
              </div>

              {/* Account Number */}
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-100">
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Account Number</p>
                  <p className="font-bold text-xl text-zinc-800 tracking-wider">
                    {bankDetails.accountNumber}
                  </p>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard(bankDetails.accountNumber, "Account number")
                  }
                  className="p-2 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-700 transition-colors"
                >
                  {copied === "Account number" ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>

            </div>
          </div>

        
        </div>

        {/* Thanksgiving Intent */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-zinc-600 italic">
            "Each of you should give what you have decided in your heart to give,
            not reluctantly or under compulsion, for God loves a cheerful giver."
          </p>
          <p className="text-zinc-500 text-sm mt-2">— 2 Corinthians 9:7</p>
        </div>
      </div>
    </section>
  );
}
