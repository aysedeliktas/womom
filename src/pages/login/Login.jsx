import React, { useState, useEffect } from 'react';
import './LoginStyle.css';
import { useNavigate } from 'react-router-dom';
import { setLocalStorage, getLocalStorage } from '../../utils/LocalStrManager';
import { setSessionStorage, getSessionStorage } from '../../utils/SessionStrManager';
import Navbar from '../../components/navbar/Navbar';

function Login({ onLoginSuccess }) {
    const [minDate, setMinDate] = useState('');
    const [estimatedDueDate, setEstimatedDueDate] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [babyGender, setBabyGender] = useState(''); 
    const [isFormValid, setIsFormValid] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        setMinDate(`${year}-${month}-${day}`);

        const storedData = getSessionStorage('formData');
        if (storedData) {
            setFirstName(storedData.firstName || '');
            setLastName(storedData.lastName || '');
            setEstimatedDueDate(storedData.estimatedDueDate || '');
            setBabyGender(storedData.babyGender || ''); 
        }
    }, []);

    useEffect(() => {
        const isFormComplete = firstName && lastName && estimatedDueDate && babyGender;
        setIsFormValid(isFormComplete);
    }, [firstName, lastName, estimatedDueDate, babyGender]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    const handleNameChange = (field) => (e) => {
        const value = capitalizeFirstLetter(e.target.value);
        if (field === 'firstName') {
            setFirstName(value);
        } else if (field === 'lastName') {
            setLastName(value);
        }
        // Save data to sessionStorage
        const data = {
            firstName: field === 'firstName' ? value : firstName,
            lastName: field === 'lastName' ? value : lastName,
            estimatedDueDate,
            babyGender
        };
        setSessionStorage('formData', data);
    };

    const handleDateChange = (e) => {
        const value = e.target.value;
        setEstimatedDueDate(value);
        // Save data to sessionStorage
        const data = { firstName, lastName, estimatedDueDate: value, babyGender };
        setSessionStorage('formData', data);
    };

    const handleGenderChange = (e) => {
        const value = e.target.value;
        setBabyGender(value);
        // Save data to sessionStorage
        const data = { firstName, lastName, estimatedDueDate, babyGender: value };
        setSessionStorage('formData', data);
    };

    const handleSubmit = () => {
        const existingData = getLocalStorage('formData') || {};
        if (!existingData.isLoginBefore) {
            existingData.isLoginBefore = true;
        }

        const formData = {
            ...existingData,
            firstName,
            lastName,
            estimatedDueDate,
            babyGender
        };
        setLocalStorage('formData', formData);

        if (onLoginSuccess) {
            onLoginSuccess();
        }

        navigate('/modules');
    };

    return (
        <div className='login-container'>
            <div className='page-area'>
                <div className='header'>
                    <h1 className='tag'>Profil</h1>
                    <p className="alert">Aşağıdaki alanları doldurunuz.</p>
                </div>
                <div className="inputs">
                    <div className='input-area'>
                        <p className="input-tag">Ad</p>
                        <input
                            className='data-input'
                            value={firstName}
                            onChange={handleNameChange('firstName')}
                            style={{ borderColor: "transparent" }}
                        />
                    </div>
                    <div className='input-area'>
                        <p className="input-tag">Soyad</p>
                        <input
                            className='data-input'
                            value={lastName}
                            onChange={handleNameChange('lastName')}
                        />
                    </div>
                    <div className='input-area'>
                        <p className="input-tag">Bebeğin Cinsiyeti</p>
                        <select
                            className='data-input'
                            value={babyGender}
                            onChange={handleGenderChange}
                        >
                            <option value=''>Cinsiyet Seçiniz</option>
                            <option value='Kız'>Kız</option>
                            <option value='Erkek'>Erkek</option>
                            <option value='Diğer'>Diğer</option>
                        </select>
                    </div>
                    <div className='input-area'>
                        <p className="input-tag">Beklenen Doğum Tarihi</p>
                        <input
                            className='data-input'
                            type='date'
                            min={minDate}
                            value={estimatedDueDate}
                            onChange={handleDateChange}
                        />
                    </div>
                    <button
                        className='next-btn'
                        style={{ backgroundColor: isFormValid ? '#6B5EE6' : '#6c5ee66c' }} 
                        onClick={handleSubmit}
                        disabled={!isFormValid}
                        
                    >
                        Kaydet
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
