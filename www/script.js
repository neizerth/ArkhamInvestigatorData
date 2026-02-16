(() => {
	const DATA_URL = "https://neizerth.github.io/ArkhamInvestigatorData";

	function detectUserLang() {
		const preferred = navigator.languages || [navigator.language];
		for (const tag of preferred) {
			const normalized = tag.toLowerCase().replace("_", "-");
			if (TRANSLATIONS[normalized]) return normalized;
			const base = normalized.split("-")[0];
			if (TRANSLATIONS[base]) return base;
		}
		return "en";
	}

	function getLang() {
		const params = new URLSearchParams(window.location.search);
		const fromUrl = params.get("lang");
		if (fromUrl && TRANSLATIONS[fromUrl]) return fromUrl;
		const detected = detectUserLang();
		setLangInUrl(detected);
		return detected;
	}

	function setLangInUrl(lang) {
		const url = new URL(window.location.href);
		url.searchParams.set("lang", lang);
		window.history.replaceState({ lang }, "", url);
	}

	function applyTranslations(lang) {
		const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
		for (const el of document.querySelectorAll("[data-i18n]")) {
			const key = el.getAttribute("data-i18n");
			if (t[key] != null) {
				if (el.tagName === "INPUT" || el.tagName === "BUTTON") {
					el.value = t[key];
				} else {
					el.innerHTML = t[key];
				}
			}
		}
		document.documentElement.lang = lang === "zh-cn" ? "zh-Hans" : lang;
	}

	function initLang() {
		const lang = getLang();
		const select = document.getElementById("lang");
		if (select) {
			select.value = lang;
			select.addEventListener("change", (e) => {
				const newLang = e.target.value;
				setLangInUrl(newLang);
				applyTranslations(newLang);
			});
		}
		applyTranslations(lang);
	}

	function initCopy() {
		const input = document.getElementById("data-url");
		const btn = document.getElementById("copy-btn");
		const status = document.getElementById("copy-status");

		if (!btn || !input) return;

		btn.addEventListener("click", () => {
			const t = TRANSLATIONS[getLang()] || TRANSLATIONS.en;
			input.select();
			input.setSelectionRange(0, 99999);
			try {
				navigator.clipboard.writeText(DATA_URL).then(
					() => {
						status.textContent = t.copySuccess || "Copied!";
						status.classList.remove("error");
						setTimeout(() => {
							status.textContent = "";
						}, 2000);
					},
					() => {
						status.textContent = t.copyFail || "Copy failed";
						status.classList.add("error");
					}
				);
			} catch (e) {
				status.textContent = t.copyFail || "Copy failed";
				status.classList.add("error");
			}
		});
	}

	initLang();
	initCopy();
})();
