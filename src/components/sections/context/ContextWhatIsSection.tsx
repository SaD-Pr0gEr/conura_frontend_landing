export function ContextWhatIsSection() {
    return (
        <section className="what-is-section">
            <div className="what-is-container">
                {/* Icons */}
                <div className="what-is-icons">
                    <img src="/images/what-is-icon-bars.svg" alt="" className="what-is-icon-bars"/>
                    <img
                        src="/images/alien_head.svg"
                        alt=""
                        className="what-is-icon-alien"
                    />
                </div>

                {/* Heading */}
                <div className="what-is-heading">
                    <h2 className="what-is-title">
                        <div className="what-is-title-orange">Контекстная реклама —</div>
                        <span className="what-is-title-black">
                          это объявления, которые показываются в поиске на сайтах или в приложениях
                            <img
                                src="/images/alien_head.svg"
                                alt=""
                                className="what-is-title-alien"
                            />
                        </span>
                    </h2>
                </div>

                {/* Description */}
                <p className="what-is-description">
                    Это способ привлечь аудиторию, уже заинтересованную в вашем предложении. Таргетинг выставляются по
                    ключевым словам, гео, демографии, интересам и поведению пользователей
                </p>
            </div>
            <img
                src="/images/glass.svg"
                alt=""
                className="what-is-decoration-img"
            />
        </section>
    );
}
