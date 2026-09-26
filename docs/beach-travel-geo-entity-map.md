# Beach Travel: GEO entity map

Generated 2026-09-25. Each article's `BlogPosting` names its main entity in `about` (a `TouristDestination` inside its state and India, or a `Thing` for topic pages), lists places in `mentions`, and adds an `ItemList` of the beaches or items described. Breadcrumbs place each page under Beach Travel and its parent.

## Example relationships

- Goa → India → Konkan coast → north Goa (Arambol, Mandrem, Morjim, Vagator, Anjuna, Baga, Calangute, Candolim) → south Goa (Colva, Benaulim, Cavelossim, Agonda, Palolem) → water sports, nightlife, turtle nesting.
- Varkala → Thiruvananthapuram district → Kerala → India → Arabian Sea → Varkala cliff → beach → surfing.
- Swaraj Dweep (Havelock) → Andaman Islands → Andaman and Nicobar Islands → Bay of Bengal → Radhanagar (Blue Flag), Kalapathar, Elephant Beach → snorkelling, diving.
- Puri → Odisha → Bay of Bengal → Golden Beach (Blue Flag) → Jagannath Temple → Konark → Chandrabhaga → Chilika (Irrawaddy dolphins).
- Shivrajpur → Devbhumi Dwarka → Gujarat → Arabian Sea → Blue Flag → Dwarka, Bet Dwarka.
- Rushikonda → Visakhapatnam → Andhra Pradesh → Bay of Bengal → Blue Flag → water sports; Vizag beach road → Bheemili.

## Entities by page

| Page | Main entity (schema type) | Within | Regions | Places mentioned |
| --- | --- | --- | --- | --- |
| `/blog/beach-holidays-in-india` | India's coast (TouristDestination) | India | India, West coast, East coast, Islands | — |
| `/blog/beach-honeymoon-destinations-in-india` | India's coast (TouristDestination) | India | Andaman and Nicobar Islands, Lakshadweep, Goa, Kerala, Karnataka, Puducherry | Havelock Island, Neil Island, Radhanagar, Bangaram, Agatti, Palolem, Agonda, Patnem, Varkala, Kovalam, Poovar, Marari, Gokarna, Pondicherry |
| `/blog/beach-safety-in-india` | Beach safety in India (Thing) | India | India, West coast, East coast, Islands | — |
| `/blog/beach-tourism-in-india` | Beach tourism in India (Thing) | India | India, West coast, East coast, Islands | Shivrajpur, Ghoghla, Shrivardhan, Nagaon, Parnaka, Guhagar, Ladghar, Kasarkod, Padubidri, Kappad, Chal, Minicoy, Kadmat, Kovalam (Covelong), Eden, Rushikonda, Puri, Sunapur, Radhanagar |
| `/blog/beach-trips-in-india` | India's coast (TouristDestination) | India | India, Maharashtra, Karnataka, Tamil Nadu, West Bengal, Gujarat, Andhra Pradesh | Alibaug, Kashid, Diveagar, Ganpatipule, Tarkarli, Daman, Pondicherry, Gokarna, Udupi, Kovalam (Covelong), Mahabalipuram, Tranquebar, Visakhapatnam, Digha, Mandarmani, Bakkhali, Puri, Diu, Shivrajpur, Tithal, Goa |
| `/blog/best-beach-destinations-in-india` | India's coast (TouristDestination) | India | India, West coast, East coast, Islands | Goa, Havelock Island, Neil Island, Lakshadweep, Varkala, Kovalam, Gokarna, Udupi, Tarkarli, Diu, Puducherry, Mahabalipuram, Puri, Visakhapatnam, Digha |
| `/blog/best-beaches-in-andaman` | Andaman Islands beaches (TouristDestination) | Andaman and Nicobar Islands → India | Andaman and Nicobar Islands, Bay of Bengal | Radhanagar, Kalapathar, Elephant Beach, Vijaynagar, Laxmanpur, Bharatpur, Sitapur, Corbyn's Cove, Chidiya Tapu, North Bay, Jolly Buoy, Lalaji Bay, Ross and Smith, Kalipur, Butler Bay |
| `/blog/best-beaches-in-andhra-pradesh` | Visakhapatnam coast (TouristDestination) | Andhra Pradesh → India | Andhra Pradesh, South India, Bay of Bengal | Visakhapatnam, RK Beach, Rushikonda, Tenneti Park, Lawson's Bay, Yarada, Dolphin's Nose, Bheemili, Mangamaripeta, Suryalanka, Manginapudi |
| `/blog/best-beaches-in-goa` | Goa beaches (TouristDestination) | Goa → India | Goa, West India, Konkan coast | Arambol, Mandrem, Ashwem, Morjim, Vagator, Anjuna, Baga, Calangute, Candolim, Sinquerim, Miramar, Bogmalo, Colva, Benaulim, Varca, Cavelossim, Mobor, Cabo de Rama, Cola, Agonda, Palolem, Patnem, Galgibaga |
| `/blog/best-beaches-in-gujarat` | Gujarat coast (TouristDestination) | Gujarat → India | Gujarat, West India, Saurashtra | Shivrajpur, Dwarka, Bet Dwarka, Somnath, Chorwad, Ahmedpur Mandvi, Mandvi, Tithal, Dumas, Diu, Nagoa, Ghoghla, Daman, Devka, Jampore |
| `/blog/best-beaches-in-india` | Beaches of India (TouristDestination) | India | India, West coast, East coast, Islands | Radhanagar, Elephant Beach, Laxmanpur, Bangaram, Palolem, Agonda, Vagator, Om beach, Kudle, St Mary's Island, Varkala, Kovalam, Marari, Tarkarli, Kashid, Shivrajpur, Nagoa, Rushikonda, Puri, Chandipur, Paradise Beach, Mahabalipuram, Tajpur |
| `/blog/best-beaches-in-karnataka` | Karnataka coast (TouristDestination) | Karnataka → India | Karnataka, South India, Konkan coast | Karwar, Devbagh, Gokarna, Kudle, Om beach, Half Moon beach, Paradise beach, Kasarkod, Murudeshwar, Netrani Island, Maravanthe, Malpe, St Mary's Island, Kaup, Padubidri, Panambur, Mulki |
| `/blog/best-beaches-in-kerala` | Kerala beaches (TouristDestination) | Kerala → India | Kerala, South India, Malabar coast | Poovar, Kovalam, Varkala, Marari, Alappuzha, Cherai, Fort Kochi, Kappad, Muzhappilangad, Payyambalam, Chal, Bekal, Kappil |
| `/blog/best-beaches-in-lakshadweep` | Lakshadweep (TouristDestination) | Lakshadweep → India | Lakshadweep, Arabian Sea | Agatti, Bangaram, Kadmat, Kavaratti, Minicoy, Kalpeni, Thinnakara, Kochi |
| `/blog/best-beaches-in-maharashtra` | Konkan coast of Maharashtra (TouristDestination) | Maharashtra → India | Maharashtra, West India, Konkan coast | Juhu, Girgaon Chowpatty, Parnaka, Alibaug, Nagaon, Kashid, Murud-Janjira, Diveagar, Shrivardhan, Harihareshwar, Velas, Ladghar, Guhagar, Ganpatipule, Tarkarli, Devbagh, Malvan, Vengurla |
| `/blog/best-beaches-in-odisha` | Odisha coast (TouristDestination) | Odisha → India | Odisha, East India, Bay of Bengal | Puri, Chandrabhaga, Konark, Ramchandi, Gopalpur, Sunapur, Rushikulya, Chandipur, Talasari, Chilika Lake, Bhitarkanika |
| `/blog/best-beaches-in-puducherry` | Puducherry beaches (TouristDestination) | Puducherry → India | Puducherry, South India, Coromandel coast | Promenade (Rock Beach), Paradise Beach, Chunnambar, Eden beach, Serenity Beach, Kottakuppam, Auroville |
| `/blog/best-beaches-in-tamil-nadu` | Tamil Nadu coast (TouristDestination) | Tamil Nadu → India | Tamil Nadu, South India, Coromandel coast | Marina beach, Elliot's beach, Kovalam (Covelong), Mahabalipuram, Tranquebar, Velankanni, Pichavaram, Rameswaram, Dhanushkodi, Arichal Munai, Kanyakumari |
| `/blog/best-beaches-in-west-bengal` | West Bengal coast (TouristDestination) | West Bengal → India | West Bengal, East India, Bay of Bengal | Digha, Shankarpur, Tajpur, Mandarmani, Junput, Bakkhali, Frasergunj, Gangasagar |
| `/blog/best-time-for-beach-holidays-in-india` | Beach seasons in India (Thing) | India | India, West coast, East coast, Islands | Goa, Kerala, Andaman Islands, Lakshadweep, Pondicherry, Puri, Velas, Rushikulya |
| `/blog/coastal-tourism-in-india` | Coastal tourism in India (Thing) | India | India, West coast, East coast, Islands | Alappuzha, Kumarakom, Munroe Island, Chilika Lake, Murud-Janjira, Kolaba Fort, Sindhudurg, Aguada, Chapora, Diu Fort, Bekal, Tranquebar, Kovalam lighthouse, Kaup, Sundarbans, Bhitarkanika, Pichavaram, Fort Kochi |
| `/blog/dolphin-watching-in-india` | Dolphin watching in India (Thing) | India | Goa, Maharashtra, Odisha, West Bengal, Bihar | Sinquerim, Coco Beach, Palolem, Tarkarli, Devbagh, Karde, Ladghar, Chilika Lake, Satapada, Sundarbans, Vikramshila |
| `/blog/offbeat-beaches-in-india` | India's coast (TouristDestination) | India | India, West coast, East coast, Islands | Guhagar, Velas, Devbagh, Vengurla, Galgibaga, Cola, Kasarkod, Maravanthe, Karwar, Marari, Kappil, Muzhappilangad, Tranquebar, Yarada, Bheemili, Gopalpur, Talasari, Junput, Lalaji Bay, Butler Bay, Kalipur, Minicoy |
