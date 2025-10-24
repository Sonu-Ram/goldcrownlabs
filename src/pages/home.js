import React from 'react'
import Navbar from '@/components/Navbar'

export default function Home() {
    return (
        <div style={{height: "100vh", width: "100vw", marginBottom: "100px"}}>
            <Navbar />
            <div style={{ marginTop: "120px", color: "#fff", fontSize: "24px", textAlign: "center" }}>Home</div>
        </div>
    )
}
