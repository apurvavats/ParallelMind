import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import SimplePreview from "../components/SimplePreview"; // Reusing your existing preview!

// 1. Connect to Supabase
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function LiveView() {
  const { id } = useParams(); // Get the ID from the URL
  const [code, setCode] = useState(null);

  useEffect(() => {
    // 2. Fetch the design code
    const fetchDesign = async () => {
      const { data } = await supabase
        .from('variants')
        .select('code') // We only need the code column
        .eq('id', id)
        .single();
      
      if (data) setCode(data.code);
    };
    fetchDesign();
  }, [id]);

  // 3. Show it full screen
  if (!code) return <div className="h-screen bg-black text-white p-10">Loading...</div>;
  
  return (
    <div className="h-screen w-screen overflow-hidden bg-black">
      <SimplePreview code={code} />
    </div>
  );
}