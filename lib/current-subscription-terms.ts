import type { Locale } from './site-content';

// Google Play is the source of the actual price, eligibility and dates at checkout.
export const currentSubscriptionTerms: Record<Locale, string[]> = {
  ru: [
    'Partitoria доступна в Google Play в поддерживаемых странах. Подписка Pro предлагается на 1, 3, 6 или 12 месяцев с автоматическим продлением. Доступные планы, цена за выбранный срок, налоги и даты показываются в Google Play перед подтверждением покупки.',
    'Подходящим новым подписчикам может предлагаться бесплатный пробный период. Его доступность, длительность и дата первого платежа показываются в Google Play. По окончании пробного периода подписка продлевается по указанной цене, если её не отменить до списания.',
    'Отмените продление в Google Play: Платежи и подписки → Подписки. Удаление приложения не отменяет подписку. После отмены доступ обычно сохраняется до конца оплаченного или пробного периода; возврат или отзыв покупки может изменить срок доступа. Для восстановления используйте тот же аккаунт Google.',
    'По вопросам подписки и возврата обратитесь в Google Play или на support@partitoria.app. Условия Google Play применяются наряду с обязательными правами потребителя по применимому законодательству; они не ограничивают эти права. Сохранённые ноты и результаты остаются доступны для чтения, экспорта, удаления и восстановления после окончания Pro.',
  ],
  en: [
    'Partitoria is available through Google Play in supported countries. Pro subscriptions are offered for 1, 3, 6 or 12 months and renew automatically. Google Play shows the available plans, price for the selected period, taxes and dates before purchase confirmation.',
    'A free trial may be offered to eligible new subscribers. Google Play shows eligibility, duration and the first payment date. After the trial, the subscription renews at the stated price unless cancelled before the charge.',
    'Cancel renewal in Google Play under Payments and subscriptions → Subscriptions. Uninstalling the app does not cancel the subscription. Access normally continues until the end of the paid or trial period; a refund or revocation may change the access period. Restore using the same Google account.',
    'For subscription or refund questions, contact Google Play or support@partitoria.app. Google Play terms apply alongside mandatory consumer rights under applicable law and do not limit those rights. Saved scores and results remain readable, exportable, deletable and recoverable after Pro ends.',
  ],
  de: [
    'Partitoria ist in unterstützten Ländern über Google Play verfügbar. Pro-Abonnements werden für 1, 3, 6 oder 12 Monate mit automatischer Verlängerung angeboten. Google Play zeigt verfügbare Laufzeiten, den Preis für den gewählten Zeitraum, Steuern und Termine vor der Kaufbestätigung.',
    'Berechtigten neuen Abonnenten kann eine kostenlose Testphase angeboten werden. Google Play zeigt Berechtigung, Dauer und den ersten Zahlungstermin. Danach verlängert sich das Abonnement zum angegebenen Preis, sofern es nicht vor der Abbuchung gekündigt wird.',
    'Kündigen Sie die Verlängerung in Google Play unter Zahlungen und Abos → Abos. Die Deinstallation kündigt nicht. Der Zugang bleibt normalerweise bis zum Ende des bezahlten oder kostenlosen Zeitraums bestehen; eine Erstattung oder ein Widerruf kann ihn ändern. Zur Wiederherstellung verwenden Sie dasselbe Google-Konto.',
    'Bei Fragen zu Abonnement oder Erstattung wenden Sie sich an Google Play oder support@partitoria.app. Google-Play-Bedingungen gelten neben zwingenden Verbraucherrechten und schränken diese nicht ein. Gespeicherte Noten und Ergebnisse bleiben nach Ende von Pro lesbar, exportierbar, löschbar und wiederherstellbar.',
  ],
  it: [
    'Partitoria è disponibile su Google Play nei paesi supportati. Gli abbonamenti Pro sono offerti per 1, 3, 6 o 12 mesi con rinnovo automatico. Google Play mostra piani disponibili, prezzo per il periodo scelto, imposte e date prima della conferma.',
    'Ai nuovi abbonati idonei può essere offerta una prova gratuita. Google Play mostra idoneità, durata e data del primo addebito. Dopo la prova l’abbonamento si rinnova al prezzo indicato, salvo disdetta prima dell’addebito.',
    'Annulla il rinnovo in Google Play alla voce Pagamenti e abbonamenti → Abbonamenti. Disinstallare non annulla l’abbonamento. L’accesso continua normalmente fino alla fine del periodo pagato o di prova; rimborso o revoca possono modificarlo. Per il ripristino usa lo stesso account Google.',
    'Per abbonamenti o rimborsi contatta Google Play o support@partitoria.app. Le condizioni di Google Play si applicano insieme ai diritti inderogabili dei consumatori e non li limitano. Spartiti e risultati salvati restano leggibili, esportabili, eliminabili e recuperabili dopo Pro.',
  ],
  es: [
    'Partitoria está disponible en Google Play en los países admitidos. Las suscripciones Pro se ofrecen por 1, 3, 6 o 12 meses con renovación automática. Google Play muestra los planes disponibles, el precio del período elegido, impuestos y fechas antes de confirmar la compra.',
    'Los nuevos suscriptores que cumplan los requisitos pueden recibir una prueba gratuita. Google Play muestra los requisitos, la duración y la fecha del primer cobro. Tras la prueba, la suscripción se renueva al precio indicado salvo que se cancele antes del cobro.',
    'Cancela la renovación en Google Play, en Pagos y suscripciones → Suscripciones. Desinstalar no cancela la suscripción. Normalmente el acceso continúa hasta el final del período pagado o de prueba; un reembolso o revocación puede modificarlo. Usa la misma cuenta de Google para restaurar.',
    'Para consultas sobre suscripciones o reembolsos, contacta con Google Play o support@partitoria.app. Las condiciones de Google Play se aplican junto a los derechos obligatorios de los consumidores y no los limitan. Las partituras y resultados guardados siguen siendo legibles, exportables, eliminables y recuperables tras Pro.',
  ],
  pt: [
    'A Partitoria está disponível na Google Play nos países suportados. As subscrições Pro são disponibilizadas por 1, 3, 6 ou 12 meses, com renovação automática. Antes da confirmação, a Google Play mostra os planos disponíveis, o preço do período escolhido, impostos e datas.',
    'Os novos subscritores elegíveis podem receber um período experimental gratuito. A Google Play mostra a elegibilidade, a duração e a data do primeiro pagamento. Após o período experimental, a subscrição renova-se pelo preço indicado, salvo cancelamento antes da cobrança.',
    'Cancele a renovação na Google Play em Pagamentos e subscrições → Subscrições. Desinstalar não cancela a subscrição. O acesso mantém-se normalmente até ao fim do período pago ou experimental; um reembolso ou revogação pode alterar esse prazo. Para restaurar, use a mesma conta Google.',
    'Para questões sobre subscrições ou reembolsos, contacte a Google Play ou support@partitoria.app. As condições da Google Play aplicam-se em conjunto com os direitos imperativos dos consumidores e não os limitam. Partituras e resultados guardados continuam legíveis, exportáveis, apagáveis e recuperáveis após o fim de Pro.',
  ],
  uk: [
    'Partitoria доступна в Google Play у підтримуваних країнах. Підписка Pro пропонується на 1, 3, 6 або 12 місяців з автоматичним продовженням. Google Play показує доступні плани, ціну за обраний строк, податки й дати до підтвердження купівлі.',
    'Новим підписникам, які відповідають умовам, може пропонуватися безкоштовний пробний період. Google Play показує умови доступності, тривалість і дату першого платежу. Після пробного періоду підписка продовжується за вказаною ціною, якщо її не скасувати до списання.',
    'Скасуйте продовження в Google Play: Платежі й підписки → Підписки. Видалення застосунку не скасовує підписку. Зазвичай доступ зберігається до кінця оплаченого чи пробного періоду; повернення або відкликання купівлі може змінити цей строк. Для відновлення використовуйте той самий Google-акаунт.',
    'Із питаннями щодо підписки чи повернення звертайтеся до Google Play або на support@partitoria.app. Умови Google Play діють разом з обов’язковими правами споживачів і не обмежують їх. Збережені ноти та результати залишаються доступними для читання, експорту, видалення й відновлення після Pro.',
  ],
  fr: [
    'Partitoria est disponible sur Google Play dans les pays compatibles. Les abonnements Pro sont proposés pour 1, 3, 6 ou 12 mois avec renouvellement automatique. Google Play indique les offres disponibles, le prix de la période choisie, les taxes et les dates avant confirmation.',
    'Un essai gratuit peut être proposé aux nouveaux abonnés éligibles. Google Play indique les conditions, la durée et la date du premier paiement. Après l’essai, l’abonnement se renouvelle au prix indiqué sauf résiliation avant le prélèvement.',
    'Résiliez le renouvellement dans Google Play, sous Paiements et abonnements → Abonnements. Désinstaller ne résilie pas l’abonnement. L’accès continue normalement jusqu’à la fin de la période payée ou d’essai ; un remboursement ou une révocation peut le modifier. Utilisez le même compte Google pour restaurer.',
    'Pour toute question sur un abonnement ou remboursement, contactez Google Play ou support@partitoria.app. Les conditions Google Play s’appliquent aux côtés des droits impératifs des consommateurs et ne les limitent pas. Les partitions et résultats enregistrés restent lisibles, exportables, supprimables et récupérables après Pro.',
  ],
  pl: [
    'Partitoria jest dostępna w Google Play w obsługiwanych krajach. Subskrypcje Pro są oferowane na 1, 3, 6 lub 12 miesięcy z automatycznym odnowieniem. Google Play pokazuje dostępne plany, cenę wybranego okresu, podatki i daty przed potwierdzeniem zakupu.',
    'Uprawnionym nowym subskrybentom może zostać zaoferowany bezpłatny okres próbny. Google Play pokazuje warunki, czas trwania i datę pierwszej płatności. Po próbie subskrypcja odnawia się za podaną cenę, o ile nie zostanie anulowana przed pobraniem opłaty.',
    'Anuluj odnowienie w Google Play w sekcji Płatności i subskrypcje → Subskrypcje. Odinstalowanie aplikacji nie anuluje subskrypcji. Dostęp zwykle trwa do końca opłaconego lub próbnego okresu; zwrot lub cofnięcie zakupu może to zmienić. Przywracaj przy użyciu tego samego konta Google.',
    'W sprawach subskrypcji lub zwrotów skontaktuj się z Google Play lub support@partitoria.app. Warunki Google Play obowiązują obok bezwzględnie obowiązujących praw konsumenta i ich nie ograniczają. Zapisane nuty i wyniki pozostają czytelne, eksportowalne, usuwalne i możliwe do odzyskania po zakończeniu Pro.',
  ],
};
