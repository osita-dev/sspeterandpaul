import { useState } from "react";
import { Heart, Send, Check, Lock } from "lucide-react";
import { toast } from "sonner";

export function PrayerRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    isPrivate: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.message.trim()) {
      toast.error("Please enter your prayer request");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Your prayer request has been received. We will pray for you! 🙏");
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: "", message: "", isPrivate: false });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="prayer" className="py-16 bg-gradient-to-br from-rose-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 mb-4">
              <Heart className="w-8 h-8 text-rose-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
              Prayer Request
            </h2>
            <p className="text-zinc-600">
              Share your intentions and let our parish family pray with you.
              Your requests are handled with love and confidentiality.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-8 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                Prayer Received
              </h3>
              <p className="text-zinc-600">
                Thank you for sharing your intentions. Our priests and prayer groups
                will remember you in their prayers. May God bless you abundantly!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-6 md:p-8"
            >
              {/* Name Field (Optional) */}
              <div className="mb-6">
                <label
                  htmlFor="prayer-name"
                  className="block text-sm font-medium text-zinc-700 mb-2"
                >
                  Your Name{" "}
                  <span className="text-zinc-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="prayer-name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Anonymous if left blank"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition-colors outline-none"
                />
              </div>

              {/* Message Field (Required) */}
              <div className="mb-6">
                <label
                  htmlFor="prayer-message"
                  className="block text-sm font-medium text-zinc-700 mb-2"
                >
                  Your Prayer Request{" "}
                  <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="prayer-message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Share what you would like us to pray for..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition-colors outline-none resize-none"
                />
              </div>

              {/* Private Checkbox */}
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isPrivate}
                    onChange={(e) =>
                      setFormData({ ...formData, isPrivate: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 rounded border-zinc-300 text-rose-600 focus:ring-rose-500"
                  />
                  <div>
                    <span className="flex items-center gap-1 text-sm font-medium text-zinc-700">
                      <Lock className="w-3 h-3" />
                      Keep my request private
                    </span>
                    <span className="text-xs text-zinc-500">
                      Only the priests will see this request
                    </span>
                  </div>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-rose-900 hover:bg-rose-800 disabled:bg-rose-400 text-white font-semibold rounded-xl transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Prayer Request
                  </>
                )}
              </button>

              <p className="text-center text-xs text-zinc-500 mt-4">
                "Where two or three gather in my name, there am I with them." – Matthew 18:20
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
