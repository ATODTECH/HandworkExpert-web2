import SEOHead from "@/src/components/SEOHead"
import { ChevronDown, ChevronRight, MapPin, PhoneCall, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import engineer from  "@/src/assets/img/professional-image.webp"


interface CatDetailsProps {
  id: string,
  details: {
    category: string,
    categoryList: {
      avatar: string,
      backdropImage: string,
      title: string,
      ratings: number,
      phoneNumber: string,
      location: string,
      amount: string,
      negotiable: boolean,
    }[],
  }
}

// Base prices are stored in NGN (the source of truth). Everything else is derived.
const CURRENCIES = [
  { code: "NGN", symbol: "₦", rate: 1 },
  { code: "USD", symbol: "$", rate: 1 / 1600 },
  { code: "GBP", symbol: "£", rate: 1 / 2050 },
  { code: "EUR", symbol: "€", rate: 1 / 1750 },
  { code: "GHS", symbol: "₵", rate: 1 / 105 },
];

function formatPrice(priceNGN:any, currency:any) {
  const converted = priceNGN * currency.rate;
  // Whole naira has no decimals; converted foreign currencies keep up to 2.
  const decimals = currency.code === "NGN" ? 0 : converted < 100 ? 2 : 0;
  return `${currency.symbol}${converted.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}
function CurrencyDropdown({ currency, onChange }: {currency: any, onChange: any}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const btnRefCurrency = useRef<HTMLButtonElement>(null)
  if (btnRefCurrency.current) btnRefCurrency.current.disabled = true

  useEffect(() => {
    function handleClick(e: any) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        ref={btnRefCurrency}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 bg-[#B6B6B6] hover:bg-[#B6B6B6]/60 transition-colors rounded-lg px-3 py-2 text-sm font-medium text-primary-white cursor-not-allowed"
      >
        <span>{currency.symbol}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 mt-1.5 w-40 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-20">
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              onClick={() => {
                onChange(c);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-slate-50 transition-colors ${
                c.code === currency.code ? "text-secondary-orange font-medium" : "text-slate-700"
              }`}
            >
              <span className="w-5">{c.symbol}</span>
              <span>{c.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
function SubCategoryDropdown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Sub Category");
  const ref = useRef<HTMLDivElement>(null);
  const btnRefSubCategory = useRef<HTMLButtonElement>(null)
  const options = ["All", "Wholesale", "Retail", "Custom Made"];
  if (btnRefSubCategory.current) btnRefSubCategory.current.disabled = true

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        ref={btnRefSubCategory}
        className="flex items-center gap-1.5 bg-[#B6B6B6] hover:bg-[#B6B6B6]/60 transition-colors rounded-lg px-3 py-2 text-sm font-medium text-primary-white cursor-not-allowed"
      >
        <span>{value}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-1.5 w-40 bg-white rounded-lg shadow-lg border border-slate-100 py-1 z-20">
          {options.map((o) => (
            <button
              key={o}
              onClick={() => {
                setValue(o);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-50 transition-colors ${
                o === value ? "text-secondary-orange font-medium" : "text-slate-700"
              }`}
            >
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function StarRating({ rating }: {rating: number}) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-secondary-orange text-orange-400" : "text-slate-200"}
        />
      ))}
    </div>
  );
}

const CatDetailsContentIndex = ({ id, details } : CatDetailsProps) => {
  const {category, categoryList} = details
  const [currency, setCurrency] = useState(CURRENCIES[0]);

  // pignation view
  const PAGE_SIZE = 9;
  const totalPages = Math.ceil(categoryList.length / PAGE_SIZE);
  const [page, setPage] = useState(1);

  const start = (page - 1) * PAGE_SIZE;
  const visible = categoryList.slice(start, start + PAGE_SIZE);
  
  const goTo = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
  };

  const content = () => {
    return(
    <div className="w-full flex flex-col items-center relative px-4 p-16 sm:px-16 xl:px-28 bg-[#F9F7F7]">
      <div className="flex w-[95%] 425xl:w-full 1280xl:w-[95%] items-center justify-end gap-3 mb-6">
        <CurrencyDropdown currency={currency} onChange={setCurrency} />
        <SubCategoryDropdown />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 w-[95%] 425xl:w-full 1280xl:w-[95%]">
        {visible.map((card, index) => (
          <div key={index} className="flex flex-col rounded-xl  bg-white overflow-hidden">
            <div className=" relative w-auto h-40">
              <img 
                src={card.backdropImage}
                alt={card.title} 
                className="w-full h-full object-cover object-top text-sm font-semibold italic"
              />
              {/* Avatar + price pill + negotiable */}
              <div className="absolute w-full px-3 bottom-3 flex items-center justify-between ">
                <div className="flex items-center gap-2">
                  <img
                    src={card.avatar}
                    alt=""
                    className="w-8 h-8 shrink-0 rounded-full object-cover border"
                  />
                  <span className="text-sm font-semibold text-primary-white whitespace-nowrap backdrop-blur-xl backdrop-brightness-90 rounded-md">
                    {formatPrice(card.amount, currency)}
                  </span>
                </div>
                {card.negotiable && (
                  <span className=" bg-secondary-orange text-white text-xs font-medium px-3 py-1.5 rounded-lg select-none">
                    Negotiable
                  </span>
                )}
              </div>
            </div>
            <div className="pt-6 pb-4 px-4">
              <h3 className="text-sm font-medium text-slate-800 leading-snug mb-2 line-clamp-2">
                {card.title}
              </h3>

              <StarRating rating={card.ratings} />

              <div className="flex items-center justify-between mt-3 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <div className=" rounded-full border border-dashed p-2">
                    <PhoneCall size={13} />
                  </div>
                  <span>{card.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>{card.location}</span>
                  <div className=" rounded-full border border-dashed p-2">
                    <MapPin size={13} />
                  </div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center pt-16 ">
          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goTo(p)}
                className={`w-9 h-9 rounded-md text-sm font-medium transition-colors ${
                  p === page
                    ? "bg-secondary-blue text-white"
                    : "bg-primary-white text-slate-500 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              className="w-9 h-9 rounded-md bg-slate-200 text-slate-500 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-300 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
    </div>)
  }

  return (
    <section className="w-full flex flex-col items-center relative ">
      <SEOHead
        title={category ? `${category} Artisans` : "Find Artisans"}
        description={`Browse and book verified ${category || "service"} artisans on Handwork Expert. Compare profiles, ratings, and prices to find the best professional near you.`}
        canonical={`/categories/${id}`}
      />
      <div className="flex flex-col w-full items-center ">
        <div className="flex items-center justify-between w-[90%] md:w-full pt-36 px-4 p-16 sm:px-16 xl:px-28 gap-4">
          <h2 className="font-semibold leading-relaxed text-start text-xl 425xl:text-2xl sm:text-4xl lg:leading-14 tracking-[2%]">{category}</h2>
          <span className="flex flex-nowrap text-base font-medium text-[#858585] select-none">{id} / categories </span>
        </div>
        { content() }
        <div className="flex justify-center w-full max-w-[90%] my-16 pt-36 px-4 p-16 sm:px-16 xl:px-28 text-primary-text">
          <div className=" flex flex-col justify-end 425xl:max-w-[80%]">
            <h4 className=" font-semibold self-center text-center sm:text-start sm:self-start text-xl 425xl:text-2xl sm:text-3xl lg:text-[2rem] lg:leading-10 425xl:max-w-[80%] mb-4">Join the network of professionals around you</h4>
            <p className=" sm:max-w-[90%] font-medium text-sm  tracking-tight leading-6 mb-7 ">
              Become part the working class community and find your next client and extra income.
            </p>
            {/* Navigation Buttons */}
            <div className="flex items-center w-fit gap-4">
              <button 
              className=" text-nowrap bg-secondary-blue text-primary-white p-4 outline-0 cursor-pointer font-bold text-[.75rem] 425xl:text-sm hover:bg-[#232958] rounded-sm"
              >
                Register as a Professional
              </button>
              <button 
              className=" text-nowrap text-secondary-blue outline-0 cursor-pointer text-[.625rem] 425xl:text-[.75rem] h-fit font-semibold hover:underline hover:bg-transparent "
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden sm:flex h-auto w-[35rem]">
            <img src={engineer} alt="engineer"
            className=" w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CatDetailsContentIndex