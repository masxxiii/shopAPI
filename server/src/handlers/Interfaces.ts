'use strict';

export interface OutputInterface {
    ok: boolean,
    result?: object
}

export interface TriggerInterface {
    id: string,
    name: string
}

export interface RemoveItem {
    id: string,
}

export interface BrandFilter {
    id: string,
}

export interface EmployeeFilter {
    ManagerId: string,
}

export interface PostBrand {
    id: string,
    Name: string,
    country: string,
    rating: number
}

export interface PostProduct {
    id: string,
    BrandId: string,
    Name: string,
    supplier: string
}

export interface PostManager {
    id: string,
    Name: string,
    Surname: string,
    Age: number
}

export interface PostEmployee {
    id: string,
    ManagerId: string,
    Name: string,
    Surname: string,
    Age: number
}

export interface PostOrder {
    id: string,
    EmployeeId: string,
    ProductId: string,
    total: number
}
