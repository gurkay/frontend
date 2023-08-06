import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductServiceData } from './service/ProductServiceData';

export default function DataTableTest() {
    const [prods, setProds] = useState([]);

    useEffect(() => {
        ProductServiceData.getProductsMini().then(data => setProds(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={prods} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}