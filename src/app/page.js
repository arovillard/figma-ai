import Image from 'next/image'

export default function Home() {
  return (
		<>
<div style={{width: '100%', height: '100%', position: 'relative'}}>
    <div style={{width: 204, height: 125, left: 0, top: 20, position: 'absolute', background: '#1B2B65', borderRadius: 8}} />
    <div style={{width: 40, height: 40, left: 82, top: 0, position: 'absolute', background: '#AABBFA', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.10)', borderRadius: 9999}} />
    <div style={{width: 32, height: 32, left: 86, top: 4, position: 'absolute'}}>
        <div style={{width: 26.67, height: 26.67, left: 2.67, top: 2.67, position: 'absolute', background: '#017EFA'}}></div>
    </div>
    <div style={{width: 166, height: 40, left: 19, top: 88, position: 'absolute'}}>
        <div style={{width: 166, height: 40, left: 0, top: 0, position: 'absolute', background: '#017EFA', borderRadius: 6}} />
        <div style={{left: 25, top: 12, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Gilroy', fontWeight: '400', wordWrap: 'break-word'}}>Go to help center</div>
    </div>
</div>
		</>
  )
}
