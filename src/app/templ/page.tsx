
export default function Page() {  
  const now = new Date();
  return <div>time: {now.getTime()}</div>;
}