// components/OrderModal.tsx
"use client";

import { useState, useEffect } from "react";
import { useOrderModal } from "./OrderModalContext";

const branches = ["Sucursal Teleferico Amarillo", "Sucursal Teleferico Rojo", "Sucursal UPEA", "Sucursal Villa Dolores", "Sucursal Satelite"];
const flavors = ["Chocolate", "Frutilla", "Vainilla", "Red Velvet"];
const sizes = ["Pequeño", "Mediano", "Grande"];

export default function OrderModal() {
    const { isOpen, closeModal, product } = useOrderModal();

    const [branch, setBranch] = useState(branches[0]);
    const [flavor, setFlavor] = useState(flavors[0]);
    const [size, setSize] = useState(sizes[0]);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [advance, setAdvance] = useState("");

    // Si el modal recibe un producto desde un botón, lo preseleccionamos
    useEffect(() => {
        if (product) setFlavor(product);
        console.log("Producto seleccionado:", product);
    }, [product]);

    const handleSend = () => {
        const message =
            `Pedido generado desde la web de Pastelería Alarcón:
            Monto del adelanto: ${advance}
            Hora de entrega: ${time}
            Sucursal de entrega: ${branch}
            Producto: ${product}
            Tamaño de torta: ${size}
            Fecha de entrega: ${date}
            El Mensaje o dedicatoria se escribirá en sucursal:`;

        const url = `https://wa.me/59170000000?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                } bg-black/50`}
        >
            <div
                className={`bg-background rounded-2xl shadow-lg p-6 w-full max-w-md transform transition-all duration-300 ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    }`}
            >
                <h2 className="text-xl font-bold text-primary mb-4">Haz tu pedido 🎂</h2>

                {/* Monto adelanto */}
                <label className="block mb-2 text-sm text-secondary">💵 Monto del adelanto</label>
                <input
                    type="number"
                    className="w-full border rounded-lg p-2 mb-4"
                    value={advance}
                    onChange={(e) => setAdvance(e.target.value)}
                />

                {/* Fecha */}
                <label className="block mb-2 text-sm text-secondary">🗓️ Fecha de entrega</label>
                <input
                    type="date"
                    className="w-full border rounded-lg p-2 mb-4"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                {/* Hora */}
                <label className="block mb-2 text-sm text-secondary">⌚ Hora de entrega</label>
                <input
                    type="time"
                    className="w-full border rounded-lg p-2 mb-4"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />

                {/* Sucursal */}
                <label className="block mb-2 text-sm text-secondary">🧭 Sucursal de entrega</label>
                <select
                    className="w-full border rounded-lg p-2 mb-4"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                >
                    {branches.map((b) => (
                        <option key={b} value={b}>{b}</option>
                    ))}
                </select>

                {/* Sabor */}
                <label className="block mb-2 text-sm text-secondary">🎂 Producto</label>
                <input
                    type="text"
                    className="w-full border rounded-lg p-2 mb-4"
                    value={product+''}
                    onChange={(e) => setFlavor(e.target.value)}
                >
                    
                </input>

                {/* Tamaño */}
                <label className="block mb-2 text-sm text-secondary">🎂 Tamaño de torta</label>
                <select
                    className="w-full border rounded-lg p-2 mb-6"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                >
                    {sizes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>

                <div className="flex justify-between">
                    <button
                        onClick={closeModal}
                        className="px-4 py-2 rounded-xl bg-secondary text-white hover:opacity-80"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSend}
                        className="px-4 py-2 rounded-xl bg-primary text-white hover:opacity-80"
                    >
                        Enviar por WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
}
