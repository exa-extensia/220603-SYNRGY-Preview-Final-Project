export default function Tabs() {
	return (
		<Tabs.Group aria-label="Tabs with underline" style="underline">
			<Tabs.Item active={true} title="Deskripsi">
				<ol>
					<li>
						Di dalam Scarlett Whitening Facial Wash terdapat kandungan
						Glutathione, Vitamin E, Rose Petals dan Aloe Vera yang sangat bagus
						untuk :
					</li>
					<li>1. Membantu mencerahkan wajah.</li>
					<li>2. Membantu menutrisi serta mengecilkan pori-pori di wajah.</li>
					<li>3. Membantu mengontrol kadar minyak berlebih di wajah.</li>
					<li>4. Membantu menghilangkan beruntus/jerawat di wajah.</li>
					<li>5. Membantu meregenerasi kulit wajah agar tampak lebih fresh.</li>
				</ol>
			</Tabs.Item>
			<Tabs.Item title="Cara Penggunaan">
				<ol>
					<li>1. Basuh wajah dengan air</li>
					<li>
						2. Tuang Facial Wash Scarlett pada tangan lalu usapkan pada wajah.
					</li>
					<li>3. Bilas dengan air bersih.</li>
					<li>
						Gunakan secara rutin sehari dua kali pada pagi dan malam hari. Untuk
						hasil maksimal gunakan juga rangkaiannya, seperti Brightening
						Moisturizer Scarlett.
					</li>
				</ol>
			</Tabs.Item>
			<Tabs.Item title="Komposisi">
				<ol>
					<li>1. Glutathione</li>
					<li>2. TOCOPHEROL</li>
					<li>3. Lauryl Betaine</li>
					<li>4. Water</li>
					<li>5. Tetrahydroxypropyl Ethylenediamine</li>
					<li>6. Dmdm hydantoin</li>
				</ol>
			</Tabs.Item>
		</Tabs.Group>
	);
}
