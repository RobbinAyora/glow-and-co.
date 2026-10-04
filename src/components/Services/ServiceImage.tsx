"use client";

import Image from "next/image";
import type { Service } from "./servicesData";
import { useEffect, useRef } from "react";
import { useReducer } from "react";

type State = {
  displayed: Service;
  incoming: Service | null;
};

type Action =
  | { type: "start"; service: Service }
  | { type: "finish"; service: Service };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "start":
      return { displayed: state.displayed, incoming: action.service };
    case "finish":
      return { displayed: action.service, incoming: null };
    default:
      return state;
  }
}

type Props = {
  service: Service;
};

export default function ServiceImage({ service }: Props) {
  const [state, dispatch] = useReducer(reducer, {
    displayed: service,
    incoming: null,
  });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevIdRef = useRef(service.id);

  useEffect(() => {
    if (service.id !== prevIdRef.current) {
      dispatch({ type: "start", service });
      prevIdRef.current = service.id;
      timerRef.current = setTimeout(() => {
        dispatch({ type: "finish", service });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [service]);

  const { displayed, incoming } = state;

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose-100 via-rose-50 to-fuchsia-100 shadow-2xl shadow-rose-100/60 sm:h-[520px] lg:h-[640px]">
      <Image
        src={displayed.image}
        alt={displayed.title}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        priority={false}
        className={`object-cover transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          incoming ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
      />
      {incoming && (
        <Image
          src={incoming.image}
          alt={incoming.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={false}
          className="absolute inset-0 object-cover animate-[fadeScaleIn_1000ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase text-neutral-700 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
        {displayed.number} · Service
      </div>
    </div>
  );
}
