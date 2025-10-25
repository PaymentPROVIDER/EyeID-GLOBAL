import dynamic from 'next/dynamic';
const EyeIDGlobalPage=dynamic(()=>import('@/components/EyeIDGlobalPage'),{ssr:true});
export default function Home(){return <EyeIDGlobalPage/>}
