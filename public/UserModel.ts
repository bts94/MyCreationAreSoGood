type DataItem = {
    id: number;
    name: string;
    value: number;
};

const generateRandomString = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

const generateData = (size: number): DataItem[] => {
    const data: DataItem[] = [];
    for (let i = 0; i < size; i++) {
        data.push({
            id: i + 1,
            name: generateRandomString(10),
            value: Math.floor(Math.random() * 1000),
        });
    }
    return data;
};

const processData = (data: DataItem[]): DataItem[] => {
    return data
        .filter((item) => item.value > 500)
        .sort((a, b) => b.value - a.value);
};

const largeDataSet = generateData(50000);
const processedData = processData(largeDataSet);

console.log('Generated Data:', largeDataSet.length);
console.log('Processed Data:', processedData.length);

type DataItem = {
    id: number;
    name: string;
    value: number;
};

const generateRandomString = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

const generateData = (size: number): DataItem[] => {
    const data: DataItem[] = [];
    for (let i = 0; i < size; i++) {
        data.push({
            id: i + 1,
            name: generateRandomString(10),
            value: Math.floor(Math.random() * 1000),
        });
    }
    return data;
};

const processData = (data: DataItem[]): DataItem[] => {
    return data
        .filter((item) => item.value > 500)
        .sort((a, b) => b.value - a.value);
};

const largeDataSet = generateData(50000);
const processedData = processData(largeDataSet);

console.log('Generated Data:', largeDataSet.length);
console.log('Processed Data:', processedData.length);

type DataItem = {
    id: number;
    name: string;
    value: number;
};

const generateRandomString = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

const generateData = (size: number): DataItem[] => {
    const data: DataItem[] = [];
    for (let i = 0; i < size; i++) {
        data.push({
            id: i + 1,
            name: generateRandomString(10),
            value: Math.floor(Math.random() * 1000),
        });
    }
    return data;
};

const processData = (data: DataItem[]): DataItem[] => {
    return data
        .filter((item) => item.value > 500)
        .sort((a, b) => b.value - a.value);
};

const largeDataSet = generateData(50000);
const processedData = processData(largeDataSet);

console.log('Generated Data:', largeDataSet.length);
console.log('Processed Data:', processedData.length);

type DataItem = {
    id: number;
    name: string;
    value: number;
};

const generateRandomString = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

const generateData = (size: number): DataItem[] => {
    const data: DataItem[] = [];
    for (let i = 0; i < size; i++) {
        data.push({
            id: i + 1,
            name: generateRandomString(10),
            value: Math.floor(Math.random() * 1000),
        });
    }
    return data;
};

const processData = (data: DataItem[]): DataItem[] => {
    return data
        .filter((item) => item.value > 500)
        .sort((a, b) => b.value - a.value);
};

const largeDataSet = generateData(50000);
const processedData = processData(largeDataSet);

console.log('Generated Data:', largeDataSet.length);
console.log('Processed Data:', processedData.length);

type DataItem = {
    id: number;
    name: string;
    value: number;
};

const generateRandomString = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

const generateData = (size: number): DataItem[] => {
    const data: DataItem[] = [];
    for (let i = 0; i < size; i++) {
        data.push({
            id: i + 1,
            name: generateRandomString(10),
            value: Math.floor(Math.random() * 1000),
        });
    }
    return data;
};

const processData = (data: DataItem[]): DataItem[] => {
    return data
        .filter((item) => item.value > 500)
        .sort((a, b) => b.value - a.value);
};

const largeDataSet = generateData(50000);
const processedData = processData(largeDataSet);

console.log('Generated Data:', largeDataSet.length);
console.log('Processed Data:', processedData.length);

type DataItem = {
    id: number;
    name: string;
    value: number;
};

const generateRandomString = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

const generateData = (size: number): DataItem[] => {
    const data: DataItem[] = [];
    for (let i = 0; i < size; i++) {
        data.push({
            id: i + 1,
            name: generateRandomString(10),
            value: Math.floor(Math.random() * 1000),
        });
    }
    return data;
};

const processData = (data: DataItem[]): DataItem[] => {
    return data
        .filter((item) => item.value > 500)
        .sort((a, b) => b.value - a.value);
};

const largeDataSet = generateData(50000);
const processedData = processData(largeDataSet);

console.log('Generated Data:', largeDataSet.length);
console.log('Processed Data:', processedData.length);

type DataItem = {
    id: number;
    name: string;
    value: number;
};

const generateRandomString = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

const generateData = (size: number): DataItem[] => {
    const data: DataItem[] = [];
    for (let i = 0; i < size; i++) {
        data.push({
            id: i + 1,
            name: generateRandomString(10),
            value: Math.floor(Math.random() * 1000),
        });
    }
    return data;
};

const processData = (data: DataItem[]): DataItem[] => {
    return data
        .filter((item) => item.value > 500)
        .sort((a, b) => b.value - a.value);
};

const largeDataSet = generateData(50000);
const processedData = processData(largeDataSet);

console.log('Generated Data:', largeDataSet.length);
console.log('Processed Data:', processedData.length);

type DataItem = {
    id: number;
    name: string;
    value: number;
};

const generateRandomString = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

const generateData = (size: number): DataItem[] => {
    const data: DataItem[] = [];
    for (let i = 0; i < size; i++) {
        data.push({
            id: i + 1,
            name: generateRandomString(10),
            value: Math.floor(Math.random() * 1000),
        });
    }
    return data;
};

const processData = (data: DataItem[]): DataItem[] => {
    return data
        .filter((item) => item.value > 500)
        .sort((a, b) => b.value - a.value);
};

const largeDataSet = generateData(50000);
const processedData = processData(largeDataSet);

console.log('Generated Data:', largeDataSet.length);
console.log('Processed Data:', processedData.length);

type DataItem = {
    id: number;
    name: string;
    value: number;
};

const generateRandomString = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

const generateData = (size: number): DataItem[] => {
    const data: DataItem[] = [];
    for (let i = 0; i < size; i++) {
        data.push({
            id: i + 1,
            name: generateRandomString(10),
            value: Math.floor(Math.random() * 1000),
        });
    }
    return data;
};

const processData = (data: DataItem[]): DataItem[] => {
    return data
        .filter((item) => item.value > 500)
        .sort((a, b) => b.value - a.value);
};

const largeDataSet = generateData(50000);
const processedData = processData(largeDataSet);

console.log('Generated Data:', largeDataSet.length);
console.log('Processed Data:', processedData.length);

type DataItem = {
    id: number;
    name: string;
    value: number;
};

const generateRandomString = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};

const generateData = (size: number): DataItem[] => {
    const data: DataItem[] = [];
    for (let i = 0; i < size; i++) {
        data.push({
            id: i + 1,
            name: generateRandomString(10),
            value: Math.floor(Math.random() * 1000),
        });
    }
    return data;
};

const processData = (data: DataItem[]): DataItem[] => {
    return data
        .filter((item) => item.value > 500)
        .sort((a, b) => b.value - a.value);
};

const largeDataSet = generateData(50000);
const processedData = processData(largeDataSet);

console.log('Generated Data:', largeDataSet.length);
console.log('Processed Data:', processedData.length);

