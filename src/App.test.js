import { render, screen, fireEvent } from '@testing-library/react';
import originalMedicines from './medicines.json';
import App from './App';


describe('you didn\'t break anything', () => {
    test('it renders header', () => {
        render(<App />);
        const linkElement = screen.getByText(/no-filter/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('it renders meds counter', () => {
        render(<App />);
        const linkElement = screen.getByText(/looks like you have 20 medicines!/i);
        expect(linkElement).toBeInTheDocument();
    });
})



describe('it renders all meds', () => {
    test('it renders all meds', () => {
        render(<App />);
        originalMedicines.forEach(med => {
            const nameElement = screen.getByText(x => x.includes(med.name));
            expect(nameElement).toBeInTheDocument();

            const companyElement = screen.getByText(x => x.includes(med.company));
            expect(companyElement).toBeInTheDocument();
        })
    });
})

describe('it renders all original meds', () => {
    test('it renders all meds', () => {
        render(<App />);
        originalMedicines.forEach(med => {
            const nameElement = screen.getByText(x => x.includes(med.name));
            expect(nameElement).toBeInTheDocument();

            const companyElement = screen.getByText(x => x.includes(med.company));
            expect(companyElement).toBeInTheDocument();
        })
    });
})


describe('it renders filtered meds', () => {
    test('it filters by name', () => {
        render(<App />);
        const searchTerm = 'Bismuth';
        const search = screen.getByLabelText('search');
        fireEvent.change(search, { target: { value: searchTerm } })
        const nameElement = screen.getByText(x => x.includes(searchTerm));
        expect(nameElement).toBeInTheDocument();
    });

    test('it filters by name with multiple results', () => {
        render(<App />);
        const searchTerm = 'Bi';
        const search = screen.getByLabelText('search');
        fireEvent.change(search, { target: { value: searchTerm } })
        const resultElements = screen.getAllByText(/Bi/i);
        expect(resultElements.length).toBe(2);
    });

    test('it filters by company', () => {
        render(<App />);
        const searchTerm = 'Par';
        const search = screen.getByLabelText('search');
        fireEvent.change(search, { target: { value: searchTerm } })
        const resultElements = screen.getAllByText(/Pa/i);
        expect(resultElements.length).toBe(2);
    });

    test('it filters by company with multiple results', () => {
        render(<App />);
        const searchTerm = 'Pa';
        const search = screen.getByLabelText('search');
        fireEvent.change(search, { target: { value: searchTerm } })
        const resultElements = screen.getAllByText(/Pa/i);
        expect(resultElements.length).toBe(3);
    });

    test('search is not case sensitive', () => {
        render(<App />);
        const searchTerm = 'bi';
        const search = screen.getByLabelText('search');
        fireEvent.change(search, { target: { value: searchTerm } })
        const resultElements = screen.getAllByText(/bi/i);
        expect(resultElements.length).toBe(2);
    });
})



describe('it uses correct pluralisation in med counter', () => {
    test('it drops the s when only one', () => {
        render(<App />);
        const searchTerm = 'softgel';
        const search = screen.getByLabelText('search');
        fireEvent.change(search, { target: { value: searchTerm } })
        const resultElement = screen.getByText(/looks like you have 1 medicine!/i);
        expect(resultElement).toBeInTheDocument();
    })
    test('it displays message when 0 hits', () => {
        render(<App />);
        const searchTerm = 'q';
        const search = screen.getByLabelText('search');
        fireEvent.change(search, { target: { value: searchTerm } })
        const resultElement = screen.getByText(/looks like you don't have any medicines!/i);
        expect(resultElement).toBeInTheDocument();
    })
})

