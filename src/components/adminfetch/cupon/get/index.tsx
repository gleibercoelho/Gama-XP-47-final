import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { api } from "../../../../services/api";
import { CuponsTable } from "./style";

interface Coupon {
    id: number;
    nome: string;
    desconto: number;
    descontoporcentagem: boolean;
    createdAt: string;
    updatedAt: string;
}

const CouponList: React.FC = () => {
    const [coupons, setCoupons] = useState<Coupon[]>([]);
    const [newCouponName, setNewCouponName] = useState("");
    const [newCouponDiscount, setNewCouponDiscount] = useState("");
    const [newCouponIsPercentage, setNewCouponIsPercentage] = useState(false);
    const token = useSelector((state: any) => state.user.token || "");

    useEffect(() => {
        api
            .get("http://localhost:3000/cupons", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                setCoupons(response.data);
            })
            .catch((error) => console.log(error));
    }, [token]);

    const handleDelete = async (couponId: number) => {
        const confirmed = confirm(
            "Are you sure you want to delete this coupon? This action cannot be undone."
        );
        if (confirmed) {
            try {
                await api.delete(`http://localhost:3000/cupons/${couponId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setCoupons(coupons.filter((coupon) => coupon.id !== couponId));
            } catch (error) {
                console.error("Error deleting coupon", error);
            }
        }
    };

    const handleCreate = async () => {
        try {
            const response = await api.post(
                "http://localhost:3000/cupons",
                {
                    nome: newCouponName,
                    desconto: Number(newCouponDiscount),
                    descontoporcentagem: newCouponIsPercentage,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setCoupons([...coupons, response.data]);
            setNewCouponName("");
            setNewCouponDiscount("");
            setNewCouponIsPercentage(false);
        } catch (error) {
            console.error("Error creating coupon", error);
        }
    };

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear().toString().slice(-2);
      
        return `${day}/${month}/${year}`;
      }

    return (
        <CuponsTable>
            <div>
                
                <table>
                    <thead>
                        <tr>
                            <th>Coupon ID</th>
                            <th>Name</th>
                            <th>Discount</th>
                            <th>Percentage?</th>
                            <th>Created at</th>
                            <th>Updated at</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coupons.map((coupon) => (
                            <tr key={coupon.id}>
                                <td>{coupon.id}</td>
                                <td>{coupon.nome}</td>
                                <td>{coupon.desconto}</td>
                                <td>{coupon.descontoporcentagem ? "Yes" : "No"}</td>
                                <td>{formatDate(coupon.createdAt)}</td>
                                <td>{formatDate(coupon.updatedAt)}</td>
                                <td>
                                    <button onClick={() => handleDelete(coupon.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <h2>Create a new coupon</h2>
                <label>
                    Name:
                    <input
                        type="text"
                        value={newCouponName}
                        onChange={(e) => setNewCouponName(e.target.value)}
                    />
                </label>
                <label>
                    Discount:
                    <input
                        type="number"
                        value={newCouponDiscount}
                        onChange={(e) => setNewCouponDiscount(e.target.value)}
                    />
                </label>
                <label>
                    Is percentage:
                    <input
                        type="checkbox"
                        checked={newCouponIsPercentage}
                        onChange={() => setNewCouponIsPercentage(!newCouponIsPercentage)}
                    />
                </label>
                <button onClick={handleCreate}>Create</button>
            </div>
           
        </CuponsTable>
    );
};

export default CouponList;
