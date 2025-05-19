
interface Props {
    icon: string,
    label: string,
    number: number
}

export default function Layout() {
  return (
    <>
        <StatCard icon="👉" label="Points" number={3000} />
        <StatCard icon="⚡" label="Lightnings" number={6540} />
        <StatCard icon="🤙" label="Shakas" number={337010} />
        <StatCard icon="💎" label="Diamonds" number={98661} />
    </>
  )
}

function StatCard({ icon, label, number }: Props) {
    return (
        <div style={{backgroundColor:"white", borderRadius: 5, marginTop: 10}}>
            <div className="stat-line">
                <span>{icon}</span>
                <strong>{label}</strong>
            </div>
            <h3 className="text-xl">{number}</h3>
        </div>
    );
}