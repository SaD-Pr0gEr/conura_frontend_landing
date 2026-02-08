'use client';

import {useState, useEffect} from 'react';

interface RequestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const services = [
    {value: 'context', label: 'Контекстная реклама'},
    {value: 'target', label: 'Таргет'},
    {value: 'sites', label: 'Сайты'},
    {value: 'bots', label: 'Боты'},
    {value: 'integrations', label: 'Интеграции'},
];

const contacts = [
    {value: 'call', label: 'Звонок'},
    {value: 'telegram', label: 'Telegram'},
];

export function RequestModal({isOpen, onClose}: RequestModalProps) {
    const [step, setStep] = useState<'form' | 'success'>('form');
    const [serviceOpen, setServiceOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        service: '',
        phone: '+998 ',
        contact: '',
    });

    // Close on ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.classList.add('modal-open');
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.classList.remove('modal-open');
        };
    }, [isOpen, onClose]);

    // Reset on close
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setStep('form');
                setFormData({name: '', service: '', phone: '+998 ', contact: ''});
            }, 300);
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep('success');
    };

    const formatPhone = (value: string) => {
        let digits = value.replace(/\D/g, '');
        if (!digits.startsWith('998')) {
            digits = '998' + digits.replace(/^998/, '');
        }
        digits = digits.slice(0, 12);

        let formatted = '+998';
        if (digits.length > 3) formatted += ' ' + digits.slice(3, 5);
        if (digits.length > 5) formatted += ' ' + digits.slice(5, 8);
        if (digits.length > 8) formatted += ' ' + digits.slice(8, 10);
        if (digits.length > 10) formatted += ' ' + digits.slice(10, 12);
        return formatted;
    };

    if (!isOpen) return null;

    return (
        <>
            <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}/>
            <div className={`modal request-modal ${isOpen ? 'active' : ''}`}>
                <button className="modal-close" onClick={onClose} aria-label="Закрыть">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="#787878" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </button>

                <div className="modal-content">
                    {/* Step 1: Form */}
                    <div className={`modal-step modal-step-1 ${step === 'form' ? 'active' : ''}`}>
                        <div className="modal-header">
                            <h2 className="modal-title">Начнём сотрудничество</h2>
                            <p className="modal-subtitle">Получите консультацию от экспертов и найдите решение для
                                вашего проекта</p>
                        </div>

                        <form className="modal-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="ФИО *"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <div
                                    className={`custom-dropdown ${serviceOpen ? 'open' : ''} ${formData.service ? 'has-value' : ''}`}>
                                    <button
                                        type="button"
                                        className="custom-dropdown-trigger"
                                        onClick={() => setServiceOpen(!serviceOpen)}
                                    >
                    <span className="custom-dropdown-value">
                      {formData.service
                          ? services.find(s => s.value === formData.service)?.label
                          : <>Услуга <span className="required">*</span></>
                      }
                    </span>
                                        <svg className="custom-dropdown-arrow" width="10" height="6" viewBox="0 0 10 6"
                                             fill="none">
                                            <path d="M1 1L5 5L9 1" stroke="#101010" strokeWidth="1.5"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                    <div className="custom-dropdown-list">
                                        {services.map((s) => (
                                            <div
                                                key={s.value}
                                                className={`custom-dropdown-item ${formData.service === s.value ? 'selected' : ''}`}
                                                onClick={() => {
                                                    setFormData({...formData, service: s.value});
                                                    setServiceOpen(false);
                                                }}
                                            >
                                                {s.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <input
                                    type="tel"
                                    className="form-input"
                                    placeholder="+998 XX XXX XX XX *"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: formatPhone(e.target.value)})}
                                    inputMode="tel"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <div
                                    className={`custom-dropdown ${contactOpen ? 'open' : ''} ${formData.contact ? 'has-value' : ''}`}>
                                    <button
                                        type="button"
                                        className="custom-dropdown-trigger"
                                        onClick={() => setContactOpen(!contactOpen)}
                                    >
                    <span className="custom-dropdown-value">
                      {formData.contact
                          ? contacts.find(c => c.value === formData.contact)?.label
                          : <>Как с вами связаться? <span className="required">*</span></>
                      }
                    </span>
                                        <svg className="custom-dropdown-arrow" width="10" height="6" viewBox="0 0 10 6"
                                             fill="none">
                                            <path d="M1 1L5 5L9 1" stroke="#101010" strokeWidth="1.5"
                                                  strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                    <div className="custom-dropdown-list">
                                        {contacts.map((c) => (
                                            <div
                                                key={c.value}
                                                className={`custom-dropdown-item ${formData.contact === c.value ? 'selected' : ''}`}
                                                onClick={() => {
                                                    setFormData({...formData, contact: c.value});
                                                    setContactOpen(false);
                                                }}
                                            >
                                                {c.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn btn-primary form-submit">Отправить</button>
                                <p className="form-agreement">
                                    Отправляя заявку вы соглашаетесь с <a href="#">политикой конфиденциальности</a>
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Step 2: Success */}
                    <div className={`modal-step modal-step-success ${step === 'success' ? 'active' : ''}`}>
                        <div className="modal-success-icon">
                            <img src="https://www.figma.com/api/mcp/asset/27009dca-a296-411f-865d-7e0c67f5e012"
                                 alt="Success"/>
                        </div>
                        <div className="modal-success-content">
                            <h2 className="modal-success-title">Успешно отправлено</h2>
                            <p className="modal-success-subtitle">
                                Спасибо! Заявка на услугу<br/>
                                «{services.find(s => s.value === formData.service)?.label || 'Разработка ботов'}»
                                отправлена
                            </p>
                        </div>
                        <div className="modal-success-buttons">
                            <a href="tel:+998901234567" className="btn btn-primary modal-success-call">
                                Позвонить
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path
                                        d="M16.5 12.69V14.94C16.5008 15.1489 16.4581 15.3557 16.3743 15.547C16.2906 15.7384 16.1676 15.9103 16.0135 16.0515C15.8594 16.1927 15.6774 16.3002 15.4791 16.3671C15.2809 16.434 15.0708 16.4589 14.8625 16.44C12.5571 16.1893 10.3402 15.4007 8.3925 14.1375C6.58047 12.9861 5.04407 11.4497 3.8925 9.6375C2.625 7.68055 1.83622 5.4528 1.59 3.1375C1.57117 2.92999 1.59585 2.72067 1.66223 2.52306C1.72862 2.32546 1.8353 2.14391 1.97545 1.99001C2.1156 1.83611 2.28612 1.71302 2.47613 1.6288C2.66613 1.54458 2.87148 1.50094 3.07917 1.5H5.32917C5.69538 1.49642 6.05007 1.62533 6.32509 1.86266C6.60011 2.09999 6.77657 2.42903 6.82333 2.79167C6.91 3.51643 7.08019 4.22851 7.33 4.91667C7.42882 5.18427 7.44717 5.47499 7.38274 5.75275C7.3183 6.03051 7.17377 6.28318 6.96667 6.48L6.0125 7.43417C7.07625 9.31218 8.60449 10.8404 10.4825 11.9042L11.4367 10.95C11.6335 10.7429 11.8862 10.5984 12.1639 10.5339C12.4417 10.4695 12.7324 10.4879 13 10.5867C13.6882 10.8365 14.4002 11.0067 15.125 11.0933C15.4916 11.1406 15.8237 11.3205 16.062 11.6003C16.3002 11.88 16.4275 12.2407 16.4183 12.61L16.5 12.69Z"
                                        fill="white"/>
                                </svg>
                            </a>
                            <button type="button" className="btn btn-secondary modal-success-close"
                                    onClick={onClose}>Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
