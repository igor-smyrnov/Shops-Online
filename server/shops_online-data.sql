SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

INSERT INTO `categories` (`id`, `name`) VALUES
(NULL, 'All products');

INSERT INTO `products` (`id`, `img_src`, `name`, `slug`, `price`, `old_price`, `default_quantity`, `description`, `shop_id`, `category_id`) VALUES
(NULL, './../assets/img/lidl_001.jpg', 'Oshee Woda', 'oshee_woda_', 2, NULL, NULL, '555 ml/1 but.1 l=4', 1, 1),
(NULL, './../assets/img/lidl_002.jpg', 'Ocean Sea Krewetki indyjskie kidi lub mieszanka mo', 'ocean_sea_k', 10, NULL, NULL, '250 g/1 opak.100 g=4', 1, 1),
(NULL, './../assets/img/lidl_003.jpg', 'Fin Carre Czekolada mleczna z siekanymi migdałami', 'fin_carre_c', 3, NULL, NULL, '100 g/1 opak.', 1, 1),
(NULL, './../assets/img/kaufland_001.jpg', 'Sok pomarańczowy', 'sok_pomaran', 4, 4, NULL, 'Sok pomarańczowy 100%', 2, 1),
(NULL, './../assets/img/kaufland_002.jpg', 'Kiwi', 'kiwi_01', 6, NULL, NULL, '3 sztuki opakowanie', 2, 1),
(NULL, './../assets/img/kaufland_003.jpg', 'Tofu naturalne', 'tofu_natura', 5, 6, NULL, '2 x 200 g opakowanie', 2, 1),
(NULL, './../assets/img/piotr_i_pawel_001.jpg', 'Błonnik gryczany bio', 'blonnik_gry', 17, NULL, NULL, 'Błonnik gryczany Bio - można spożywać z jogurtem musli płatkami śniadaniowymi kakao mlekiem kefirem lub sokiem . Można też stosować do zagęszczenia koktajli zup sosów deserów oraz jako dodatek do pieczenia ciast i chleba.''', 3, 1),
(NULL, './../assets/img/piotr_i_pawel_002.jpg', 'Wafle ryżowe naturalne', 'wafle_ryzow', 2, NULL, NULL, 'Wafle ryżowe naturalne - Piotr i Paweł', 3, 1),
(NULL, './../assets/img/piotr_i_pawel_003.jpg', 'Masło Irlandzkie Dublin Dairy', 'dublin_dair', 7, NULL, NULL, 'Masło irlandzkie Dublin Dair. Zawartość tłuszczu 82%', 3, 1),
(NULL, './../assets/img/lidl_001.jpg', 'Oshee Woda', 'oshee_woda_', 2, NULL, NULL, '555 ml/1 but.1 l=4', 49, 1),
(NULL, './../assets/img/lidl_002.jpg', 'Ocean Sea Krewetki indyjskie kidi lub mieszanka mo', 'ocean_sea_k', 10, NULL, NULL, '250 g/1 opak.100 g=4', 0, 1),
(NULL, './../assets/img/lidl_003.jpg', 'Fin Carre Czekolada mleczna z siekanymi migdałami', 'fin_carre_c', 3, NULL, NULL, '100 g/1 opak.', 1, 1),
(NULL, './../assets/img/kaufland_001.jpg', 'Sok pomarańczowy', 'sok_pomaran', 4, 4, NULL, 'Sok pomarańczowy 100%', 2, 1),
(NULL, './../assets/img/kaufland_002.jpg', 'Kiwi', 'kiwi_01', 6, NULL, NULL, '3 sztuki opakowanie', 2, 1),
(NULL, './../assets/img/kaufland_003.jpg', 'Tofu naturalne', 'tofu_natura', 5, 6, NULL, '2 x 200 g opakowanie', 2, 1),
(NULL, './../assets/img/piotr_i_pawel_001.jpg', 'Błonnik gryczany bio', 'blonnik_gry', 17, NULL, NULL, 'Błonnik gryczany Bio - można spożywać z jogurtem musli płatkami śniadaniowymi kakao mlekiem kefirem lub sokiem . Można też stosować do zagęszczenia koktajli zup sosów deserów oraz jako dodatek do pieczenia ciast i chleba.''', 3, 1),
(NULL, './../assets/img/piotr_i_pawel_002.jpg', 'Wafle ryżowe naturalne', 'wafle_ryzow', 2, NULL, NULL, 'Wafle ryżowe naturalne - Piotr i Paweł', 3, 1),
(NULL, './../assets/img/piotr_i_pawel_003.jpg', 'Masło Irlandzkie Dublin Dairy', 'dublin_dair', 7, NULL, NULL, 'Masło irlandzkie Dublin Dair. Zawartość tłuszczu 82%', 3, 1);

INSERT INTO `shops` (`id`, `name`, `slug`, `description`, `img_src`) VALUES
(NULL, 'Lidl', 'lidl', 'Lidl to międzynarodowa grupa przedsiębiorstw, a jednocześnie odnosząca sukcesy sieć sklepów spożywczych, która prowadzi aktywną działalność na terenie całej Europy.', './../assets/img/lidl_logo.jpg'),
(NULL, 'Kaufland', 'kaufland', 'W Polsce zapraszamy do ponad 200 sklepów sieci Kaufland. Poza tym nasze markety znajdują się w Niemczech, Rumunii, Bułgarii, Chorwacji, Czechach i na Słowacji.\r\n \r\nGrupa Kaufland należy do 10 największych przedsiębiorstw handlowych Europy i dominuje w branży sklepów wielkopowierzchniowych. ', './../assets/img/kaufland_logo.jpg'),
(NULL, 'Piotr i Paweł', 'piotr_i_pawel', 'Supermarket internetowy Piotr i Paweł Łódź to miejsce na udane zakupy w Internecie. Jesteśmy już w całej Polsce. Jedyne delikatesy internetowe z dostawą do domu! Nasz internetowy sklep spożywczy to przyjemność z e-zakupów. W naszej ofercie: Pieczywo, Warzywa i Owoce, Nabiał, Sery, Wędliny i Mięso, Ryby, Mrożonki, Kawy i Herbaty, Przetwory i Przyprawy, Słodycze, Napoje. Piotr i Paweł Łódź – Zakupy przez Internet. Życzymy udanych zakupów. Supermarket online - Zapraszamy.', './../assets/img/piotr_i_pawel_logo.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
