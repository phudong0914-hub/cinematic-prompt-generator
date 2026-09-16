// Remotion React Dataset generated from Cine Prompt Pro
export interface CinematicPrompt {
  id: string;
  name: string;
  category: string;
  difficulty?: string;
  definition?: string;
  promptTemplate: string;
  whenToUse?: string;
}

export const CINEMATIC_PROMPTS_DATA = [
  {
    "id": "omni-food-saigon-cold-brew",
    "name": "Saigon Cold Brew Phin (Cà Phê Phin Sữa Đá)",
    "definition": "Cinematic macro commercial for authentic Vietnamese iced milk coffee with traditional metal phin dripping over condensed milk with crystal ice cubes and morning golden sunlight.",
    "category": "food",
    "difficulty": "Intermediate",
    "mood": "Cinematic Commercial",
    "image": "/img/cinematique/food-saigon-coffee.webp",
    "videoRef": "/video/cinematique/food-saigon-coffee.mp4",
    "promptTemplate": "Macro cinematic shot of authentic Vietnamese iced milk coffee with dark rich coffee slowly dripping from a traditional stainless steel phin filter onto a sweet condensed milk layer, clear crystal ice cubes, morning golden sunlight on a wooden table, morning Saigon haze, shot on 100mm Macro Lens, 8k resolution.",
    "whenToUse": "Dùng cho TVC quảng cáo đồ uống, ẩm thực đường phố cao cấp, reel cà phê sáng hoặc video giới thiệu quán cafe phong cách Sài Gòn.",
    "bestPractices": "Tập trung vào 3 tầng: sữa đặc trắng dưới đáy, cà phê phin đen đậm ở giữa và đá viên trong suốt bên trên. Sử dụng ánh sáng xiên ban mai (morning sidelight) để làm nổi bật độ trong của đá và bọt cà phê.",
    "commonMistakes": [
      "Để cà phê chảy quá nhanh làm mất cảm giác phin truyền thống.",
      "Quên mô tả tiếng đá rơi và tiếng khuấy thìa (Foley audio ASMR)."
    ],
    "videoPrompt": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni / Veo 3.1. Concept: A glass of authentic Saigon iced milk coffee. 0.0-3.0s: Macro slow motion of dark rich coffee slowly dripping from a traditional stainless steel phin filter onto a layer of sweet condensed milk. 3.0-7.0s: Clear crystal ice cubes falling into the glass in super slow motion with sparkling liquid splashes. 7.0-10.0s: Long stainless spoon stirring the dark coffee and white milk together into a creamy golden-brown swirl, morning Saigon balcony light and morning haze in background. Native audio: rhythmic metallic phin drip, ice cubes clinking crisply, spoon swirling against glass."
  },
  {
    "id": "aerial-shot",
    "name": "Aerial Shot",
    "definition": "A shot captured from high above the ground, typically using a drone or helicopter, providing a sweeping view of landscapes, cityscapes, or large-scale action. The aerial perspective conveys omniscience, freedom, or the terrifying scale of nature. David Lean pioneered epic aerial work in \"Lawrence of Arabia,\" while Ridley Scott used helicopter shots to establish the grandeur of ancient Rome in \"Gladiator.\" More recently, Denis Villeneuve employed haunting aerial compositions in \"Sicario\" to reveal the eerie geometry of border landscapes.",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/aerial-shot.webp",
    "videoRef": "/video/cinematique/aerial-shot.mp4",
    "promptTemplate": "Sweeping aerial shot of [Subject] seen from 300 feet above, captured at golden hour with warm amber light painting one side of the terrain while the other falls into deep violet shadow, volumetric god rays piercing through scattered cumulus clouds, shot on ARRI Alexa 65 with Hasselblad glass, 8K resolution, Kodak Vision3 250D color science, subtle atmospheric haze layering depth into the landscape",
    "whenToUse": "Chọn ảnh chụp từ trên không khi địa lý cũng quan trọng như chủ đề. Nó có thể giới thiệu một thành phố, hiển thị hình dạng của mạng lưới biên giới hoặc đường bộ, theo dõi hành động quy mô lớn hoặc giảm một người xuống điểm dễ bị tổn thương trong cảnh quan. Độ cao tạo ra khoảng cách về mặt cảm xúc, vì vậy hãy sử dụng nó cho sự toàn tri, tự do, sự hùng vĩ hoặc mối đe dọa môi trường hơn là những nhịp điệu thân mật của nhân vật.",
    "bestPractices": "Đặt máy ảnh cách đối tượng khoảng 300 feet và mô tả góc nhìn rộng hướng xuống dưới thay vì góc thẳng từ trên xuống. Giữ tiêu điểm dễ nhận biết bên trong địa hình, sau đó xây dựng chiều sâu với địa hình tiền cảnh, các lớp ở xa, sương mù trong khí quyển và các đám mây rải rác. Hãy để ánh sáng giờ vàng ấm áp chiếu vào một phía của cảnh quan trong khi bóng tím đậm bao trùm phía bên kia. Đối với chuyển động, hãy chỉ định chuyển động trượt chậm, ổn định để duy trì tỷ lệ và hướng đường chân trời.",
    "commonMistakes": [
      "Đặt máy ảnh ở vị trí cao mà không xác định góc của nó, khiến kết quả bị nhầm lẫn giữa chế độ xem từ trên không và sơ đồ từ trên cao.",
      "Lấp đầy mọi phần của phong cảnh với độ chi tiết như nhau, để chủ thể biến mất mà không có mối quan hệ tỷ lệ có chủ ý.",
      "Yêu cầu chuyển động nhanh của máy bay không người lái khi cảnh cần sự hoành tráng, biến cảnh được đo lường thành cảnh quay hành trình không ngừng nghỉ."
    ]
  },
  {
    "id": "birds-eye-view",
    "name": "Bird's Eye View",
    "definition": "A shot taken from directly overhead, looking straight down on the subject, creating a god-like perspective that can make subjects appear small and insignificant or reveal patterns invisible from ground level. Busby Berkeley pioneered the technique in 1930s musicals, choreographing dancers into kaleidoscopic geometric formations seen from directly above. Darren Aronofsky used it extensively in \"Requiem for a Dream\" to convey psychological detachment, and Wes Anderson frequently employs overhead shots of meticulously arranged objects as a signature compositional device.",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/birds-eye-view.webp",
    "videoRef": "/video/cinematique/birds-eye-view.mp4",
    "promptTemplate": "Bird's eye view looking straight down on [Subject], the camera positioned directly overhead creating a flattened god-like perspective where depth is eliminated and everything becomes pattern and geometry, long shadows stretching from each element, shot on medium format digital with a 40mm equivalent lens, muted teal and gold color palette, forensic sharpness from edge to edge",
    "whenToUse": "Sử dụng chế độ xem mắt chim khi cảnh có mẫu mà khung hình trên mặt đất sẽ ẩn. Đám đông, đường sá, cơ thể, bảng biểu và kiến ​​trúc trở nên dễ đọc dưới dạng hình học từ ngay phía trên. Nó cũng khiến mọi người có vẻ bị kiểm soát, bị quan sát hoặc tầm thường. Góc độ này hoạt động tốt nhất khi thiết kế không gian mang ý nghĩa; nó ít hữu ích hơn khi nét mặt hoặc chiều sâu bình thường phải quyết định thời điểm.",
    "bestPractices": "Cho biết máy ảnh nhìn thẳng xuống với trục quang học của nó vuông góc với mặt đất. Loại bỏ đường chân trời và coi con người, đồ vật, con đường và bóng tối là các hình dạng đồ họa phẳng. Sắp xếp các yếu tố chính thành một mô hình có chủ ý với khoảng cách rõ ràng và độ sắc nét từng cạnh. Sử dụng bảng màu xanh mòng két và vàng nhạt và bóng định hướng dài để duy trì sự tách biệt về mặt thị giác. Đối với video, hãy khóa máy ảnh hoặc di chuyển theo chiều dọc để hình học từ trên xuống không bị trôi vào một góc xiên trên không.",
    "commonMistakes": [
      "Sử dụng cụm từ từ trên cao mà không hướng thẳng ngôn ngữ máy ảnh, thay vào đó thường tạo ra góc nhìn góc cao thông thường.",
      "Xây dựng một khung cảnh không có hình mẫu rõ ràng, làm cho góc nhìn khác thường mang tính trang trí hơn là mang tính chất tường thuật.",
      "Thêm tiêu điểm nông trên khung hình, điều này làm suy yếu độ rõ nét pháp lý và hình học phẳng xác định chế độ xem."
    ]
  },
  {
    "id": "close-up",
    "name": "Close-Up",
    "definition": "A tightly framed shot that fills the screen with a subject's face or a specific detail, revealing emotions, textures, and subtle details invisible in wider shots. Carl Theodor Dreyer's \"The Passion of Joan of Arc\" (1928) is built almost entirely from devastating close-ups of Renée Falconetti's face, widely considered the greatest performance ever captured on film. Sergio Leone elevated the close-up to operatic intensity in his Westerns, while Jonathan Demme's direct-to-camera close-ups in \"The Silence of the Lambs\" created unbearable intimacy with Hannibal Lecter.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/close-up.webp",
    "videoRef": "/video/cinematique/close-up.mp4",
    "promptTemplate": "Tight close-up of [Subject] filling the entire frame, every pore and texture rendered in sharp detail, shallow depth of field with background dissolving into creamy bokeh, warm sidelight from a single source, shot on Cooke S4 75mm at T2, Kodak Vision3 500T color science",
    "whenToUse": "Sử dụng cận cảnh khi khuôn mặt, cử chỉ hoặc đồ vật mang ý nghĩa của cảnh. Nó loại bỏ thông tin về môi trường và yêu cầu khán giả đọc những biểu hiện vi mô, kết cấu và sự do dự. Hãy để dành nó để có những thông tin thực sự xứng đáng được thân mật; cận cảnh liên tục làm phẳng hệ thống phân cấp thị giác.",
    "bestPractices": "Chỉ định phần cắt, tiêu cự, mặt phẳng tiêu điểm, đường kẻ mắt và một nguồn sáng có động. Nếu khuôn mặt phải nhất quán, hãy mô tả nhận dạng trước ngôn ngữ ảnh và kiểm soát độ méo của ống kính bằng độ dài tiêu cự ở phạm vi chân dung. Đối với video, hãy yêu cầu hạn chế chuyển động - hít thở, chớp mắt hoặc đẩy vào trong một phút - thay vì hành động cạnh tranh thứ hai.",
    "commonMistakes": [
      "Sử dụng ống kính rất rộng sát khuôn mặt khi bạn không muốn khuôn mặt bị biến dạng quá mức.",
      "Thêm quá nhiều môi trường và hành động đến nỗi kết quả không thể đọc được dưới dạng cận cảnh.",
      "Yêu cầu đồng thời có đôi mắt sắc nét, hậu cảnh sắc nét, hiệu ứng mờ nhòe đậm và khả năng lấy nét cực nông."
    ]
  },
  {
    "id": "dutch-angle",
    "name": "Dutch Angle",
    "definition": "A shot where the camera is tilted on its roll axis, creating a diagonal horizon line to convey unease, disorientation, tension, or a character's disturbed psychological state. Carol Reed made the Dutch angle iconic in \"The Third Man\" (1949), tilting nearly every frame in the Vienna sewers to mirror the moral corruption of Harry Lime. Tim Burton adopted it as a signature style in \"Batman\" and \"Edward Scissorhands,\" while Kenneth Branagh used it relentlessly in \"Thor\" to evoke the comic-book panels of Jack Kirby.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Horror",
    "image": "/img/cinematique/dutch-angle.webp",
    "videoRef": "/video/cinematique/dutch-angle.mp4",
    "promptTemplate": "[Subject] framed at a sharp 25-degree Dutch angle, vertical lines tilting diagonally across the frame, long distorted shadows, overhead lighting casting fractured geometric patterns, 35mm film grain, Zeiss Super Speed 25mm, anamorphic edge distortion",
    "whenToUse": "Sử dụng góc nhìn Hà Lan khi thế giới, tính cách hoặc mối quan hệ quyền lực mất cân bằng. Độ nghiêng phải thể hiện một sự bất ổn cụ thể - hoang tưởng, say sưa, nguy hiểm, băng hoại đạo đức - chứ không chỉ đơn giản là làm cho khung hình trông đậm chất điện ảnh hơn.",
    "bestPractices": "Nêu rõ góc cuộn và bảo toàn các đường nét kiến ​​trúc hoặc đường chân trời chắc chắn để độ nghiêng vẫn dễ đọc. Ghép khung nghiêng với một nguyên nhân cảm xúc và lựa chọn ống kính có kiểm soát. Trong video, hãy giữ cố định cuộn phim trừ khi hành động xoay camera chính là điểm chính; sự trôi dạt chân trời không được kiểm soát được coi là lỗi phát sinh hơn là hướng.",
    "commonMistakes": [
      "Nghiêng khung không có tham chiếu dọc hoặc ngang rõ ràng, làm cho kỹ thuật này biến mất về mặt thị giác.",
      "Sử dụng góc trong mỗi lần chụp cho đến khi sự mất phương hướng trở thành đường cơ sở về mặt hình ảnh và mất đi ý nghĩa.",
      "Kết hợp góc độ Hà Lan với một số biến dạng không liên quan làm che khuất tín hiệu tâm lý dự định."
    ]
  },
  {
    "id": "dolly-shot",
    "name": "Dolly Shot",
    "definition": "A smooth camera movement where the entire camera physically moves toward, away from, or alongside the subject on a wheeled platform or track, creating an immersive sense of movement through space. Orson Welles used dolly shots to navigate the deep-focus interiors of \"Citizen Kane,\" while Spike Lee invented his signature double-dolly shot — mounting both actor and camera on the same platform — to create a floating, surreal glide seen in \"Do the Right Thing\" and \"25th Hour.\" Martin Scorsese's famous Copacabana shot in \"Goodfellas\" tracks Henry Hill through the back entrance of a nightclub in one fluid dolly movement.",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/dolly-shot.webp",
    "videoRef": "/video/cinematique/dolly-shot.mp4",
    "promptTemplate": "Smooth dolly shot gliding toward [Subject], the camera at eye level moving with buttery precision on dolly track, parallax effect separating foreground elements from the mid-ground subject from far-ground details, shot on 35mm with Panavision Primo lenses, rich blacks and saturated warm tones, the elegant motion of precision dolly track work",
    "whenToUse": "Sử dụng dolly-in khi một nhận thức, mối đe dọa hoặc chi tiết cảm xúc cần phải trở nên không thể tránh khỏi. Dolly out khi bối cảnh lấn át chủ đề hoặc tạo ra khoảng cách về mặt cảm xúc. Di chuyển cùng với nhân vật khi khán giả nên đi cùng họ thay vì chỉ quan sát họ.",
    "bestPractices": "Mô tả hành trình vật lý của máy ảnh, hướng, tốc độ, khóa chủ thể và sự tách biệt giữa tiền cảnh và hậu cảnh. “Dolly hướng tới” hữu ích hơn “chuyển động điện ảnh”. Cung cấp cho mô hình các lớp hiển thị cho thị sai — vật cản ở tiền cảnh, chủ thể ở khoảng cách giữa và nền có thể đọc được — để việc di chuyển thay đổi các mối quan hệ không gian thay vì hoạt động giống như thu phóng kỹ thuật số.",
    "commonMistakes": [
      "Gọi dolly và zoom cùng lúc mà không cố ý yêu cầu dolly zoom.",
      "Mô tả chuyển động của máy ảnh mà không có lớp tiền cảnh hoặc hậu cảnh, không để lại thị sai cho mô hình thể hiện.",
      "Xếp chồng các hướng camera “mượt mà”, “động”, “hoành tráng” và nhiều hướng camera xung đột thay vì chỉ định một chuyển động được kiểm soát."
    ]
  },
  {
    "id": "establishing-shot",
    "name": "Establishing Shot",
    "definition": "A wide shot typically used at the beginning of a scene to set the context, showing the location, time of day, and spatial relationships before cutting to closer action. Stanley Kubrick's establishing shots in \"The Shining\" — the Overlook Hotel dwarfed by mountains — immediately communicated isolation and foreboding. Ridley Scott's opening of \"Blade Runner\" established a dystopian Los Angeles with a single, unforgettable wide shot of industrial hellscape. David Fincher meticulously crafts establishing shots that embed narrative information into every architectural detail.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/establishing-shot.webp",
    "videoRef": "/video/cinematique/establishing-shot.mp4",
    "promptTemplate": "Wide establishing shot of [Subject] at blue hour, deep indigo sky with the last traces of sunset, a few warm lights glowing from within, atmospheric haze softening the distance, shot on ARRI Alexa with Zeiss Master Primes, desaturated cool palette with selective warm accents, architectural precision meets cinematic storytelling",
    "whenToUse": "Mở đầu bằng cảnh quay ấn tượng khi người xem cần hiểu bối cảnh diễn ra ở đâu, thời gian hoặc thời tiết định hình cảnh đó như thế nào và các không gian chính kết nối với nhau như thế nào. Một phiên bản mạnh mẽ cũng có thể gieo mầm sự cô lập, nguy hiểm, giàu có hoặc suy tàn thông qua kiến ​​trúc và quy mô. Sử dụng nó trước khi có phạm vi phủ sóng chặt chẽ hơn hoặc sau khi có sự thay đổi lớn về địa điểm. Đừng chi tiêu vào bối cảnh mà khán giả đã đọc rõ ràng.",
    "bestPractices": "Đóng khung vị trí đủ rộng để hiển thị kiến ​​trúc nổi bật, địa hình xung quanh, điểm truy cập và một dấu hiệu nhỏ của sự sống. Lấy bối cảnh vào giờ xanh với bầu trời màu chàm thẫm, dư vị hoàng hôn mờ ảo, ánh đèn nội thất ấm áp và sương mù làm dịu đi khoảng cách. Giữ cho bố cục dễ đọc thay vì chỉ mở rộng. Nếu tạo video, hãy bắt đầu ở trạng thái tĩnh hoặc với sự trôi dạt có giới hạn, cho phép người xem lập bản đồ địa điểm trước khi bất kỳ cảnh cắt hoặc chuyển động nào của nhân vật thu hút sự chú ý.",
    "commonMistakes": [
      "Hiển thị một vị trí đẹp mà không có điểm mốc hoặc mối quan hệ không gian cần thiết để định hướng cảnh tiếp theo.",
      "Làm cho nhân vật chính có kích thước khung hình quá lớn, biến phạm vi bao quát theo ngữ cảnh thành một cảnh quay dài thông thường.",
      "Đóng gói hình ảnh với các tín hiệu bầu không khí không liên quan làm che khuất thời gian, địa lý hoặc giọng điệu tường thuật dự định."
    ]
  },
  {
    "id": "extreme-close-up",
    "name": "Extreme Close-Up",
    "definition": "An intensely tight shot focusing on a very specific detail — an eye, a hand trembling, a drop of sweat — amplifying significance and forcing the viewer into intimate proximity with the subject. Sergio Leone built the climax of \"The Good, the Bad and the Ugly\" almost entirely from extreme close-ups of eyes during the three-way standoff, creating unbearable tension through the intimacy of a glance. Darren Aronofsky used macro close-ups of dilating pupils and needle punctures in \"Requiem for a Dream\" to physicalize addiction. David Lynch frequently employs extreme close-ups of mundane objects to reveal the uncanny lurking beneath the ordinary.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/extreme-close-up.webp",
    "videoRef": "/video/cinematique/extreme-close-up.mp4",
    "promptTemplate": "Extreme macro close-up of [Subject] filling the entire frame, every microscopic detail rendered with clinical precision, ring light creating a circular catchlight, razor-thin depth of field at f/2.8 on a 100mm macro lens, Fujifilm Velvia-inspired saturated color science, the forensic intimacy of extreme proximity",
    "whenToUse": "Cắt ở mức cực cận khi một chi tiết nhỏ phải mang khung cảnh: đồng tử thay đổi, ngón tay siết chặt, mồ hôi hình thành hoặc kim chạm vào da. Khung hình thu hút sự chú ý và biến kết cấu vật lý thành cảm xúc. Sử dụng nó để tăng cường sự hồi hộp, tiết lộ bằng chứng hoặc làm cho một vật thể bình thường trở nên kỳ lạ. Sức mạnh của nó giảm xuống nhanh chóng khi mỗi nhịp đều được xử lý bằng kính hiển vi giống nhau.",
    "bestPractices": "Đặt tên cho mảnh chính xác lấp đầy khung và loại trừ khuôn mặt hoặc thân rộng hơn. Yêu cầu chi tiết ở quy mô vĩ mô, phối cảnh macro 100mm, độ sâu trường ảnh mỏng như dao cạo và một mặt phẳng lấy nét chính xác. Đèn chiếu sáng hình tròn hoặc đèn vòng được điều khiển có thể làm lộ cấu trúc bề mặt mà không làm phẳng đối tượng. Giữ thông tin cơ bản trừu tượng hoặc vắng mặt. Trong video, hãy hạn chế chuyển động ở mức rung, nhấp nháy, hơi ẩm hoặc điều chỉnh tiêu điểm theo phút để vẫn giữ được khoảng cách.",
    "commonMistakes": [
      "Nhắc cận cảnh chung chung thay vì đặt tên chính xác cho mắt, đầu ngón tay, vết thương hoặc chi tiết vật thể lấp đầy khung hình.",
      "Yêu cầu độ sắc nét ở mọi nơi, điều này loại bỏ sự chú ý có chọn lọc và sự gần gũi về mặt quang học của việc tạo khung hình macro thực sự.",
      "Thêm nền bận rộn giới thiệu lại bối cảnh và phá vỡ sự gần gũi ngột ngạt của chi tiết đã chọn."
    ]
  },
  {
    "id": "extreme-long-shot",
    "name": "Extreme Long Shot",
    "definition": "A very wide shot where the subject appears small against a vast environment, emphasizing scale, isolation, or the overwhelming nature of the surroundings. David Lean defined the technique in \"Lawrence of Arabia,\" where Peter O'Toole becomes a speck against infinite desert horizons, communicating both the grandeur and the punishing emptiness of the landscape. Terrence Malick uses extreme long shots in \"The Thin Red Line\" to dwarf soldiers against indifferent nature, and Chloé Zhao employed them throughout \"Nomadland\" to place Frances McDormand's van as a tiny vessel adrift in the American West.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/extreme-long-shot.webp",
    "videoRef": "/video/cinematique/extreme-long-shot.mp4",
    "promptTemplate": "Extreme long shot of [Subject] barely visible against a vast landscape stretching to the horizon, a single long shadow the only vertical element in a perfectly horizontal world, sky gradient from pale white at the horizon to deep cerulean overhead, shot on large format 65mm film, infinite depth of field rendering everything sharp from feet to infinity, Lawrence of Arabia scale and desolation",
    "whenToUse": "Sử dụng một cảnh quay cực xa khi môi trường sẽ lấn át người bên trong nó. Nó phù hợp với những chuyến băng qua sa mạc, những phương tiện biệt lập, chiến trường, di cư, hoang dã và những khoảnh khắc mà chính khoảng cách là cảm xúc. Chủ đề có thể rất nhỏ nhưng vẫn phải có thể được khám phá về mặt bố cục. Chọn thang đo này cho sự vĩ đại, cô đơn hoặc thờ ơ; chuyển sang gần hơn khi cử chỉ, danh tính hoặc cuộc đối thoại trở thành trung tâm kịch tính.",
    "bestPractices": "Làm cho đối tượng trở thành một dấu ấn nhỏ nhưng có chủ đích đối với môi trường trải dài theo chân trời. Mô tả bố cục theo chiều ngang chủ đạo, không gian âm rộng lớn và một bóng dài hoặc màu tương phản giúp hình vẽ được ghi lại. Giữ chi tiết sắc nét từ gần mặt đất đến đường chân trời xa, với độ sâu tăng cường độ dốc bầu trời từ nhạt đến xanh thiên thanh. Đối với cảnh quay chuyển động, hãy sử dụng khung hình gần như tĩnh hoặc chuyển động sang bên rất chậm; chuyển động nhanh chóng phá hủy sự so sánh kiên nhẫn giữa quy mô con người và cảnh quan.",
    "commonMistakes": [
      "Làm cho đối tượng trở nên vô hình đến mức khung hình chỉ đọc ở dạng phong cảnh chứ không phải là sự so sánh tỷ lệ có chủ ý.",
      "Sử dụng độ sâu trường ảnh nông, giúp thu gọn chi tiết môi trường rộng lớn cần thiết để truyền đạt khoảng cách và sự cô lập.",
      "Làm chật kín đường chân trời với một số tiêu điểm cạnh tranh làm suy yếu tầm quan trọng về mặt bố cục của nhân vật đơn độc."
    ]
  },
  {
    "id": "eye-level-shot",
    "name": "Eye-Level Shot",
    "definition": "A neutral shot taken at the subject's eye height, the most natural and common camera angle, creating a sense of equality and objectivity between viewer and subject. Yasujiro Ozu famously placed his camera at a low eye-level (the \"tatami shot\") in films like \"Tokyo Story,\" creating an intimate, respectful perspective that defined Japanese domestic cinema. The Dardenne brothers use persistent eye-level handheld work in \"Rosetta\" and \"The Child\" to maintain unflinching equality with their working-class subjects, never looking down on or up at them.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "/img/cinematique/eye-level-shot.webp",
    "videoRef": "/video/cinematique/eye-level-shot.mp4",
    "promptTemplate": "Eye-level shot of [Subject] with the camera positioned exactly at their eye height creating a direct and equal relationship with the viewer, natural available light providing gentle directional illumination, no dramatic angles or manipulation, shot on 16mm film stock with gentle grain, naturalistic color palette, intimate documentary stillness",
    "whenToUse": "Chọn tầm mắt khi máy ảnh sẽ gặp một người mà không tôn vinh, hạ thấp hoặc đánh giá họ. Đó là góc độ đáng tin cậy cho các cuộc phỏng vấn, cảnh gia đình, kịch quan sát và trao đổi trực tiếp, nơi hiệu suất quan trọng hơn thao tác hình ảnh. Bởi vì nó mang lại cảm giác bình thường nên nó cũng có thể khiến những hành vi bất thường trở nên đáng lo ngại hơn. Chỉ sử dụng một góc độ khác khi sức mạnh, tính dễ bị tổn thương hoặc tổng quan về không gian cần được nhấn mạnh hơn.",
    "bestPractices": "Đặt ống kính chính xác ngang tầm mắt của đối tượng và giữ chiều dọc trung tính. Tạo khung hình cho người đó với khoảng cách trò chuyện tự nhiên, ánh sáng định hướng sẵn có, hạt kiểu 16mm nhẹ nhàng và bảng màu không bắt buộc. Tránh các đường đi lên hùng vĩ hoặc nén xuống. Hãy để tư thế, ánh mắt và những thay đổi nhỏ trên khuôn mặt mang lại khung hình. Trong video, hãy sử dụng nhịp thở cầm tay tối thiểu hoặc máy ảnh bị khóa thay vì chuyển động dễ thấy, duy trì mối quan hệ bình đẳng giữa người xem và chủ thể.",
    "commonMistakes": [
      "Đặt máy ảnh ngang ngực hoặc ngang trán đồng thời gọi ngang tầm mắt, thay đổi mối quan hệ quyền lực một cách tinh tế.",
      "Thêm độ méo ống kính ấn tượng hoặc khung hình nghiêng mâu thuẫn với mục đích quan sát, trung tính của góc.",
      "Coi tính trung lập là sự trống rỗng về thị giác thay vì sử dụng ánh mắt, tư thế và ánh sáng sẵn có để thu hút sự chú ý."
    ]
  },
  {
    "id": "handheld-shot",
    "name": "Handheld Shot",
    "definition": "Camera held by the operator without stabilization, resulting in natural shake and movement that creates raw immediacy, documentary realism, or frantic energy depending on context. John Cassavetes pioneered the emotional handheld style in \"A Woman Under the Influence,\" where the camera's restlessness mirrors Gena Rowlands' unraveling psyche. Paul Greengrass brought visceral handheld energy to mainstream cinema with the \"Bourne\" trilogy, while the Dardenne brothers and Lars von Trier's Dogme 95 movement made handheld a philosophical commitment to unvarnished truth.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "/img/cinematique/handheld-shot.webp",
    "videoRef": "/video/cinematique/handheld-shot.mp4",
    "promptTemplate": "Handheld camera following [Subject], natural shake and breathing motion in the frame, motion blur on fast-moving elements, the gritty texture of Super 16mm film pushed two stops in processing, desaturated color with blown-out highlights, the raw unfiltered energy of being inside the moment rather than observing it",
    "whenToUse": "Tiếp cận chuyển động cầm tay khi máy ảnh phải có cảm giác như đang hiện diện trong một khoảnh khắc không ổn định. Nó có thể theo chân một nhân vật thông qua xung đột, ghi lại tính tự phát của phim tài liệu, sự hoảng loạn trong gương hoặc làm cho những không gian bóng bẩy có cảm giác bị lộ ra ngoài. Sự rung lắc phải phản ánh hành vi của người vận hành và chuyển động của đối tượng chứ không phải sự rung động ngẫu nhiên. Hãy tránh nó khi sự rõ ràng về không gian, quy mô nghi lễ hoặc sự tĩnh lặng có kiểm soát quan trọng hơn sự gần gũi thô sơ.",
    "bestPractices": "Mô tả một người điều khiển đeo vai theo sát phía sau hoặc bên cạnh đối tượng, với hơi thở trôi đi nhẹ, lấy lại khung hình không hoàn hảo và rung lắc nặng hơn chỉ khi chuyển động đột ngột. Cho phép làm mờ chuyển động trên các cử chỉ nhanh và thỉnh thoảng cắt bớt các điểm nổi bật, được hỗ trợ bởi kết cấu Super 16 sắc nét và màu sắc hạn chế. Giữ cho đối tượng có thể phục hồi sau mỗi lần lắc. Đối với ảnh tĩnh, hãy ngụ ý chụp ở chế độ cầm tay thông qua vết nhòe chuyển động nhẹ và thời gian lệch tâm thay vì làm mờ toàn bộ khung hình một cách đồng đều.",
    "commonMistakes": [
      "Yêu cầu rung lắc dữ dội liên tục, tạo cảm giác giả tạo và khiến đối tượng không thể theo dõi trong toàn cảnh.",
      "Kết hợp ngôn ngữ cầm tay với khung hình mượt mà về mặt cơ học được căn giữa hoàn hảo giúp loại bỏ sự hiện diện dự định của người vận hành.",
      "Áp dụng độ mờ bằng nhau cho mọi bề mặt thay vì buộc các tạo tác chuyển động vào chuyển động của máy ảnh và đối tượng."
    ]
  },
  {
    "id": "head-on-shot",
    "name": "Head-On Shot",
    "definition": "A shot where the subject moves or faces directly toward the camera, creating a confrontational, powerful feeling as the subject approaches or stares directly at the viewer. Stanley Kubrick mastered the head-on shot with his famous \"Kubrick stare\" — characters like Alex in \"A Clockwork Orange\" and Jack Torrance in \"The Shining\" glaring directly into the lens with menacing intensity. Spike Lee's double-dolly head-on shots place characters in direct communion with the audience, while Wes Anderson uses symmetrical head-on framing as a core visual signature in every film.",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "/img/cinematique/head-on-shot.webp",
    "videoRef": "/video/cinematique/head-on-shot.mp4",
    "promptTemplate": "Head-on shot of [Subject] moving directly toward the camera with perfect bilateral symmetry, the camera holding its ground as the figure grows larger in frame, shot on anamorphic 40mm Panavision C-series glass with slight barrel distortion adding menace, teal shadows and amber highlights, the confrontational energy of direct approach",
    "whenToUse": "Sử dụng cảnh quay trực diện khi nhân vật phải đối đầu với khán giả hoặc tiến lên với sức mạnh không thể phủ nhận. Giao tiếp bằng mắt trực tiếp có thể báo hiệu sự đe dọa, sự tự tin, buộc tội hoặc sự bình tĩnh kỳ lạ, trong khi chuyển động về phía trước sẽ làm tăng dần áp lực. Tính đối xứng làm cho cách tiếp cận có cảm giác được kiểm soát và không thể tránh khỏi. Hãy để dành góc này cho những lối vào quyết đoán, những mối đe dọa, những tiết lộ hoặc những bức chân dung cách điệu; việc sử dụng nhiều lần có thể biến sự đối đầu thành một thói quen hình ảnh phẳng.",
    "bestPractices": "Căn giữa đối tượng trên trục ống kính và thiết lập sự cân bằng hai bên hoàn hảo xung quanh chúng. Để máy ảnh giữ vị trí trong khi nhân vật quay mặt hoặc đi thẳng về phía nó, phát triển từ khung hình nhỏ hơn thành khung hình chiếm ưu thế. Sử dụng phối cảnh biến dạng rộng vừa phải với độ méo hình thùng nhẹ, bóng xanh mòng két và điểm sáng màu hổ phách để tăng thêm áp lực. Giữ độ trôi ngang gần bằng 0. Ánh mắt, vai và hướng di chuyển đều phải hướng thẳng vào máy ảnh.",
    "commonMistakes": [
      "Để đối tượng tiếp cận theo đường chéo, điều này sẽ thay đổi cảnh quay từ đối đầu trực tiếp sang phạm vi theo dõi thông thường.",
      "Phá vỡ tính đối xứng bằng sự lộn xộn vô tình của hậu cảnh làm mất tập trung vào chuyển động được điều khiển của nhân vật về phía ống kính.",
      "Sử dụng biến dạng góc rộng vui vẻ khi cảm xúc mong muốn phụ thuộc vào sự đe dọa, uy quyền hoặc cường độ tập trung."
    ]
  },
  {
    "id": "high-angle-shot",
    "name": "High Angle Shot",
    "definition": "Camera positioned above the subject, looking down, making the subject appear smaller, weaker, or more vulnerable while also providing a broader view of the scene layout. Alfred Hitchcock used high angles masterfully in \"Psycho\" and \"Vertigo\" to diminish characters and reveal their spatial entrapment. Orson Welles employed towering high angles in \"The Trial\" to crush Joseph K under oppressive bureaucratic architecture. More recently, Denis Villeneuve used high-angle compositions in \"Prisoners\" to convey the helplessness of parents searching for their missing children.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/high-angle-shot.webp",
    "videoRef": "/video/cinematique/high-angle-shot.mp4",
    "promptTemplate": "High angle shot looking down on [Subject], the perspective making them appear impossibly small and vulnerable, the camera positioned high above, shot on Arriflex with a 21mm wide lens to exaggerate spatial distortion, muted institutional color palette with a single color accent",
    "whenToUse": "Góc cao rất hữu ích khi người xem cần hiểu cả chủ thể và các lực xung quanh chúng. Nhìn xuống có thể khiến một người cảm thấy dễ bị tổn thương, bị mắc kẹt, bị theo dõi hoặc bị suy giảm thể chất khi để lộ lối ra, rào cản và vị trí của đám đông. Nó hoạt động cho sự bất lực và tổng quan về mặt chiến thuật mà không đạt đến sự trừu tượng của một góc nhìn thẳng từ trên cao. Tránh cho rằng mọi góc hướng xuống đều tự động thể hiện điểm yếu; dàn dựng phải hỗ trợ nó.",
    "bestPractices": "Nâng máy ảnh lên trên đối tượng một cách rõ ràng và hướng xuống dưới theo một đường chéo nhìn thấy được, duy trì độ sâu giữa tiền cảnh, người và sàn nhà. Sử dụng ống kính rộng để mở rộng kiến ​​trúc xung quanh và thu nhỏ hình ảnh bên trong nó. Màu sắc tổ chức bị tắt tiếng với một điểm nhấn được kiểm soát có thể cô lập chủ thể. Hiển thị các ranh giới, chướng ngại vật hoặc khoảng trống chịu trách nhiệm cho áp lực. Đối với video, hãy giữ hoặc hạ xuống từ từ thay vì chuyển sang bố cục mắt chim hoàn toàn thẳng đứng.",
    "commonMistakes": [
      "Đẩy máy ảnh trực tiếp lên trên, việc này sẽ loại bỏ độ sâu đường chéo và chuyển thiết lập sang một kỹ thuật khác.",
      "Cô lập đối tượng trên một tầng trống không có các yếu tố môi trường giải thích cho sự dễ bị tổn thương hoặc bị giam cầm của họ.",
      "Sử dụng độ méo góc cực rộng một cách mạnh mẽ đến mức kiến ​​trúc bị biến dạng trở nên quan trọng hơn hệ thống phân cấp cảm xúc."
    ]
  },
  {
    "id": "insert-shot",
    "name": "Insert Shot",
    "definition": "A close-up cut to a specific detail within a scene — a ticking clock, a letter, a weapon being drawn — directing audience attention to a crucial narrative element. Hitchcock was the supreme master of the insert shot, using close-ups of keys, glasses of milk, and scissors in films like \"Dial M for Murder\" and \"Notorious\" to build unbearable suspense from ordinary objects. Quentin Tarantino uses stylized insert shots of food, weapons, and car details as a rhythmic signature, while Edgar Wright employs rapid-fire inserts for comedic punctuation in \"Shaun of the Dead\" and \"Hot Fuzz.\"",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/insert-shot.webp",
    "videoRef": "/video/cinematique/insert-shot.mp4",
    "promptTemplate": "Insert shot of [Subject] isolated in tight framing, warm lamplight casting a golden glow while the surrounding space falls into shadow, shot with a macro lens at f/2 creating razor-thin focus, Kodak 5219 500T film stock warmth, the weight of consequence concentrated in a single object",
    "whenToUse": "Sử dụng phần chèn khi khán giả phải chú ý đến một chi tiết làm thay đổi cách hiểu cảnh. Việc xoay chìa khóa, tích tắc đồng hồ, mở thư, rút ​​vũ khí trong bao da hoặc do dự bằng tay có thể mang đến cốt truyện và sự căng thẳng trong một khung hình nhỏ gọn. Đối tượng phải thuộc về hiện trường. Chèn ảnh mạnh nhất là dấu câu; quá nhiều khiến trình tự có cảm giác được minh họa một cách máy móc.",
    "bestPractices": "Xác định một đối tượng hoặc hành động và đóng khung nó đủ chặt để không có gì tranh giành được sự chú ý. Thắp sáng nó bằng đèn ấm có động cơ hoặc nguồn sáng thực tế trong khi khu vực xung quanh rơi vào bóng tối. Sử dụng khoảng cách gần giống như macro, mặt phẳng lấy nét hẹp và chi tiết vật liệu xúc giác để tạo ra hiệu ứng đối tượng. Đối với video, hãy xác định sự kiện chính xác trong phần chèn, chẳng hạn như kim giây tiến lên hoặc ngón tay cái nhả chốt an toàn, sau đó cắt bỏ ngay.",
    "commonMistakes": [
      "Chọn một đối tượng không gây hậu quả về sau, huấn luyện người xem tìm kiếm ý nghĩa mà trình tự không bao giờ mang lại kết quả.",
      "Bao gồm quá nhiều cảnh xung quanh, nên sự chú ý vẫn bị phân tán thay vì tập trung vào chi tiết tường thuật.",
      "Hiển thị phần chèn theo kiểu ánh sáng không khớp khiến phần chèn bị ngắt kết nối với không gian được thiết lập xung quanh nó."
    ]
  },
  {
    "id": "long-shot",
    "name": "Long Shot",
    "definition": "Shows the subject's full body within their environment, balancing character and setting while establishing spatial relationships and keeping the subject identifiable. John Ford used the long shot to place his characters within the monumental landscapes of Monument Valley in \"The Searchers,\" making John Wayne both heroic and dwarfed by nature. Akira Kurosawa's long shots in \"Seven Samurai\" choreograph entire battle sequences with balletic spatial clarity, and Andrea Arnold employs long shots in \"American Honey\" to embed her characters in the vast, indifferent American landscape.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/long-shot.webp",
    "videoRef": "/video/cinematique/long-shot.mp4",
    "promptTemplate": "Long shot of [Subject] with the full figure visible from head to foot, the scale of the environment dwarfing the human figure while the figure's posture radiates quiet authority, shot on 65mm large format with a 50mm lens, rich Technicolor-inspired warm palette, the mythic framing of classic cinema",
    "whenToUse": "Chọn cảnh quay dài khi khán giả cần toàn bộ cơ thể của đối tượng và môi trường đủ để hiểu được chuyển động, khoảng cách hoặc vị trí xã hội. Nó phù hợp với lối vào, cuộc đối đầu, khiêu vũ, du lịch và chặn hành động trong đó tư thế kể một phần câu chuyện. Người đó vẫn có thể nhận dạng được, không giống như một cảnh quay cực xa. Di chuyển lại gần hơn khi sắc thái khuôn mặt lấn át cử chỉ hoặc di chuyển rộng hơn khi phong cảnh chiếm ưu thế.",
    "bestPractices": "Đóng khung đối tượng từ đầu đến chân với không gian có chủ ý ở trên, dưới và dọc theo hướng chuyển động của họ. Hãy để môi trường vẫn quan trọng nhưng phụ thuộc vào tư thế và hình bóng dễ đọc. Sử dụng phối cảnh tự nhiên với tiêu điểm đủ sâu để mô tả bối cảnh, tông màu đất ấm áp và một đường nét rõ ràng liên kết nhân vật với phong cảnh. Đối với video, hãy bảo vệ toàn bộ cơ thể thông qua hành động thay vì cắt chân khi người đó đến gần.",
    "commonMistakes": [
      "Cắt xén bàn chân hoặc đầu trong khi di chuyển, điều này lặng lẽ chuyển khung hình dự định thành một chế độ xem dài trung bình khó xử.",
      "Cho phép phong cảnh thu nhỏ hình ảnh hoàn toàn đến mức kết quả trở thành một cảnh quay cực kỳ dài.",
      "Việc sử dụng tiêu điểm nông để xóa bỏ mối quan hệ về môi trường, khung hình rộng hơn đã được chọn để thiết lập."
    ]
  },
  {
    "id": "low-angle-shot",
    "name": "Low Angle Shot",
    "definition": "Camera positioned below the subject, looking up, making the subject appear dominant, powerful, heroic, or imposing. Orson Welles used low angles obsessively in \"Citizen Kane,\" famously requiring trenches cut into studio floors to achieve extreme upward perspectives on Charles Foster Kane, visually encoding his megalomania into every frame. Quentin Tarantino's iconic trunk shots — looking up at characters from inside a car trunk — are a playful variation, and Christopher Nolan used low angles throughout \"The Dark Knight\" to make Batman a towering mythic figure against Gotham's skyline.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/low-angle-shot.webp",
    "videoRef": "/video/cinematique/low-angle-shot.mp4",
    "promptTemplate": "Low angle shot looking up at [Subject] from below, the camera positioned at ground level shooting upward through converging vertical lines, shot on Cooke S4 18mm wide-angle lens exaggerating the height distortion, high-contrast Kodak Double-X black and white aesthetic, Citizen Kane grandeur",
    "whenToUse": "Sử dụng góc thấp để khiến người, cấu trúc hoặc vật thể chỉ huy khung hình. Cái nhìn hướng lên có thể thể hiện uy quyền, sự đe dọa, chủ nghĩa anh hùng, sự kiêu ngạo hoặc sự kính sợ tùy thuộc vào hiệu suất và ánh sáng. Nó cũng cho phép kiến ​​trúc hội tụ phía sau đối tượng, tăng chiều cao rõ ràng. Hãy chọn nó cho những thay đổi quyền lực và những màn giới thiệu hoành tráng. Tránh sử dụng nó một cách tự động cho mọi anh hùng, vì sự thống trị mà không có lý do tường thuật sẽ nhanh chóng trở thành sáo rỗng về mặt hình ảnh.",
    "bestPractices": "Hạ máy ảnh xuống dưới tầm mắt của đối tượng và hướng lên trên qua các bức tường, cột hoặc đường chân trời hội tụ. Một ống kính rộng có thể kéo dài chiều cao nhưng vẫn giữ được khuôn mặt và cơ thể thay vì bị biến dạng một cách kỳ cục. Tạo cho đối tượng một tư thế vững chắc và đặt bầu trời rộng mở hoặc kiến ​​trúc vững chắc phía sau họ. Xử lý đơn sắc có độ tương phản cao có thể củng cố uy tín. Khi di chuyển, hãy tiến lên cẩn thận hoặc giữ nguyên vị trí; những thay đổi nghiêng ngẫu nhiên làm suy yếu mối quan hệ quyền lực ổn định.",
    "commonMistakes": [
      "Chỉ đặt ống kính thấp hơn tầm mắt một chút, tạo ra một bức chân dung trung tính mà không có áp lực hướng lên đáng kể.",
      "Sử dụng ống kính siêu rộng quá gần khuôn mặt, tạo ra sự biến dạng hài hước thay vì sự thống trị có chủ ý.",
      "Bỏ qua hậu cảnh, mặc dù kiến ​​trúc hội tụ hay bầu trời rộng mở là trung tâm của cảm giác về quy mô của góc nhìn."
    ]
  },
  {
    "id": "master-shot",
    "name": "Master Shot",
    "definition": "A continuous wide shot that captures the entire scene from start to finish, serving as the foundation over which closer coverage is layered in editing. Robert Altman was famous for shooting elaborate master shots with multiple overlapping conversations in films like \"Nashville\" and \"Short Cuts,\" trusting the wide frame to let audiences discover the drama themselves. Sidney Lumet staged masterful master shots in \"12 Angry Men,\" choreographing twelve actors within a single room with balletic precision. Mike Leigh builds entire scenes from master shots that allow his actors' improvisational performances to breathe.",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/master-shot.webp",
    "videoRef": "/video/cinematique/master-shot.mp4",
    "promptTemplate": "Wide master shot of [Subject] with all elements visible simultaneously, every figure precisely blocked to create a composition of intersecting eyelines and subtle tensions, shot on 35mm with a 27mm lens from a tripod, classical Hollywood staging with Altman-esque layered naturalism",
    "whenToUse": "Xây dựng cảnh quay chính khi một cảnh phụ thuộc vào thời gian tổng thể, tính liên tục về không gian hoặc việc khán giả chọn nơi để xem. Nó cung cấp đầy đủ hành động kịch tính trong một bố cục rộng và trở thành nền tảng để đưa tin gần hơn. Định dạng này phù hợp với các cuộc trò chuyện chồng chéo, xung đột nhóm và các phòng được chặn cẩn thận. Nó kém hiệu quả hơn khi cài đặt không thể hỗ trợ hành động theo lớp hoặc khi một khuôn mặt phải chiếm ưu thế ngay từ đầu.",
    "bestPractices": "Hiển thị toàn bộ khu vực chơi và mọi nhân vật cần thiết cùng một lúc. Chặn các tác nhân trên các mặt phẳng có chiều sâu riêng biệt với các đường mắt giao nhau, lối vào rõ ràng và đủ khoảng cách để đọc được các liên minh hoặc ma sát. Sử dụng phối cảnh chân máy ổn định và ống kính rộng vừa phải thay vì ảnh toàn cảnh phóng đại. Ánh sáng phải thu hút sự chú ý bên trong khung hình mà không che giấu hành động phụ. Đối với video, hãy mô tả toàn bộ vũ đạo từ đầu đến cuối của cảnh chứ không chỉ đơn thuần là một đoạn mở rộng trước khi tự động cắt.",
    "commonMistakes": [
      "Sắp xếp mọi diễn viên thành một đường thẳng, ghi lại dàn diễn viên nhưng không tiết lộ gì về thứ bậc hay sự căng thẳng.",
      "Khung hình rộng đến mức không thể đọc được cử chỉ và ánh mắt, điều này làm mất đi mục đích dàn dựng dàn dựng kéo dài.",
      "Gọi một địa điểm ngắn sẽ tiết lộ một cảnh quay chính mặc dù nó không chứa toàn bộ hành động kịch tính của cảnh đó."
    ]
  },
  {
    "id": "medium-shot",
    "name": "Medium Shot",
    "definition": "Frames the subject from roughly the waist up, the workhorse of dialogue scenes — close enough to read expressions but wide enough to capture body language and gestures. Howard Hawks built his entire directorial style around the medium shot in films like \"His Girl Friday\" and \"The Big Sleep,\" trusting the perfect middle distance to convey rapid-fire dialogue and physical chemistry. Aaron Sorkin's walk-and-talk scenes in \"The West Wing\" rely on moving medium shots, and Sofia Coppola uses static medium shots in \"Lost in Translation\" to capture the quiet body language of disconnection.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/medium-shot.webp",
    "videoRef": "/video/cinematique/medium-shot.mp4",
    "promptTemplate": "Medium shot of [Subject] framed from the waist up, the perfect conversational distance that reveals both facial expression and the eloquent language of hands, shot on a 50mm lens at T2.8, Kodak Vision3 200T with rich warm midtones",
    "whenToUse": "Cảnh quay trung bình là mặc định khi đối thoại và hành vi thể chất cần được chú ý như nhau. Khung hình từ thắt lưng giúp biểu đạt dễ đọc trong khi vẫn giữ được bàn tay, vai, tư thế và một số bối cảnh môi trường. Sử dụng nó cho các cuộc trò chuyện, đi bộ và nói chuyện, trình diễn và nhịp điệu yên tĩnh của nhân vật không cần cường độ cận cảnh. Sự quen thuộc của nó rất hữu ích, nhưng một cảnh chỉ được xây dựng từ những cảnh quay trung bình có thể làm mất nhịp điệu và điểm nhấn thị giác.",
    "bestPractices": "Đóng khung đối tượng từ khoảng thắt lưng trở lên và chừa chỗ cho bàn tay đưa vào một cách tự nhiên. Sử dụng phối cảnh bình thường khoảng 50mm, độ sâu trường ảnh vừa phải và tông màu ấm để giữ cho làn da và quần áo có chiều sâu. Đặt đủ chi tiết nền để định vị cảnh mà không ảnh hưởng đến hiệu suất. Đối với video, hãy cho phép các cử chỉ và chuyển động cơ thể nhỏ vẫn ở trong khung hình; tránh cắt xén tự động về phía khuôn mặt bất cứ khi nào đối tượng nói.",
    "commonMistakes": [
      "Cắt bớt phần ngực và mất đi đôi tay, điều này khiến khung hình trông giống như một cảnh cận cảnh ở mức trung bình.",
      "Để lại quá nhiều khoảng trống xung quanh một người, làm suy yếu sự cân bằng thực tế giữa biểu hiện và môi trường.",
      "Sử dụng tiêu điểm nông đến mức mọi cử chỉ vượt qua mặt phẳng hẹp đều trở nên mất tập trung và mềm mại."
    ]
  },
  {
    "id": "over-the-shoulder",
    "name": "Over-the-Shoulder",
    "definition": "Shot framed from behind one character, looking past their shoulder at another, the standard coverage for dialogue that creates spatial relationships and a sense of being within the conversation. The shot/reverse-shot pattern using over-the-shoulder angles became the backbone of Hollywood dialogue coverage through the classical studio era. David Fincher meticulously calibrates the exact angle and depth of his OTS shots in \"The Social Network\" and \"Zodiac\" to control psychological tension. Wong Kar-wai subverts the technique in \"In the Mood for Love,\" using tight over-the-shoulder framings to suggest the suffocating proximity of secret desire.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/over-the-shoulder.webp",
    "videoRef": "/video/cinematique/over-the-shoulder.mp4",
    "promptTemplate": "Over-the-shoulder shot with the near figure's shoulder and jaw soft and dark in the foreground, [Subject] sharply in focus in the mid-ground, the spatial depth between the two figures loaded with tension, shot on a 65mm lens at T2 creating a narrow depth of field, rich chiaroscuro lighting with deep umber shadows and warm golden highlights",
    "whenToUse": "Sử dụng khung hình qua vai để đưa khán giả vào trong cuộc trò chuyện trong khi vẫn xác định được ai đang đối mặt với ai. Vai gần tạo ra chiều sâu và khiến người nghe cảm nhận được sự hiện diện của mình ngay cả khi sự chú ý dồn vào người nói. Nó phù hợp với đối thoại, thẩm vấn, dụ dỗ, đàm phán và kiềm chế phản ứng. Chọn những người độc thân sạch sẽ hơn khi sự cô lập quan trọng hơn; sử dụng hai cảnh quay khi cả hai màn trình diễn đều xứng đáng có sức nặng như nhau trong cùng một thời điểm.",
    "bestPractices": "Đặt vai, hàm và phần sau đầu của một nhân vật dưới dạng hình nền trước tối mềm mại chiếm một cạnh của khung được kiểm soát. Giữ nhân vật khác sắc nét ở giữa mặt đất với ánh mắt của họ nhắm ngay bên cạnh ống kính. Sử dụng độ sâu trường ảnh hẹp và chiaroscuro để tạo độ căng cho khoảng cách giữa chúng. Giữ hướng màn hình nhất quán trên vùng phủ sóng ngược. Hình ở tiền cảnh phải vẫn có thể nhận biết được mà không chặn khuôn mặt hoặc bàn tay của người nói.",
    "commonMistakes": [
      "Để phần đầu ở tiền cảnh che đi biểu cảm của người nói, biến bối cảnh không gian thành một vật cản tầm nhìn lớn.",
      "Phá vỡ hướng mắt giữa các cảnh quay ghép đôi, khiến cả hai nhân vật dường như quay mặt về cùng một phía.",
      "Hiển thị cả hai mặt phẳng đều sắc nét như nhau khi cảnh cần lấy nét để đặc quyền cho người hiện đang mang nhịp."
    ]
  },
  {
    "id": "overhead-shot",
    "name": "Overhead Shot",
    "definition": "Camera positioned directly above the scene looking straight down, similar to bird's eye but typically closer, often used for tabletop scenes, maps, or choreographed action. Wes Anderson uses overhead shots of hands and objects obsessively in films like \"The Grand Budapest Hotel\" and \"The French Dispatch,\" turning tabletop arrangements into graphic design. Martin Scorsese employed the technique in \"Goodfellas\" for the famous cooking-in-prison scene, looking down on razor-thin garlic slices. Spike Jonze and David Fincher both use close overhead angles to transform mundane actions into visually striking compositions.",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/overhead-shot.webp",
    "videoRef": "/video/cinematique/overhead-shot.mp4",
    "promptTemplate": "Overhead shot looking straight down on [Subject], the flat geometric arrangement rendered as graphic composition, natural north-light creating soft even illumination with no harsh shadows, shot on medium format with a 55mm lens, clinical sharpness of top-down perspective, Wes Anderson-level compositional precision",
    "whenToUse": "Chọn ảnh chụp từ trên cao để có góc nhìn cận cảnh từ trên xuống về bàn tay, đồ ăn, bản đồ, công cụ, tài liệu, cơ thể hoặc hành động được dàn dựng. Nó chuyển đổi hoạt động thông thường thành cách sắp xếp đồ họa trong khi vẫn giữ được sự thân mật hơn so với chế độ xem toàn cảnh. Kỹ thuật này có tác dụng với các thủ tục, manh mối, nghi lễ và hài kịch thị giác. Chỉ sử dụng nó khi vị trí và chuyển động của đồ vật mang ý nghĩa chứ không phải để trang trí tự động.",
    "bestPractices": "Gắn điểm quan sát ngay phía trên bề mặt làm việc và hướng thẳng xuống, không nhìn thấy đường chân trời hoặc bức tường góc cạnh. Sắp xếp bàn tay và đồ vật như một bố cục đồ họa rõ ràng, sử dụng ánh sáng dịu nhẹ ở cửa sổ phía bắc để tránh các bóng cạnh tranh gay gắt. Giữ cho bề mặt sắc nét từ góc này sang góc khác và sử dụng cảm giác chi tiết ở định dạng trung bình. Đối với video, hãy chỉ định đường dẫn chính xác của bàn tay và các thay đổi đối tượng trong khi máy ảnh vẫn bị khóa, để chuyển động sẽ kích hoạt bố cục thay vì làm mất ổn định bố cục.",
    "commonMistakes": [
      "Nghiêng máy ảnh đủ để lộ các mặt bên, thay đổi chế độ xem đồ họa từ trên xuống thành góc cao thông thường.",
      "Các đạo cụ phân tán không có khoảng cách có chủ ý, khiến bề mặt trông lộn xộn thay vì được thiết kế để đọc trên cao.",
      "Sử dụng bóng mạnh chồng lên các đối tượng quan trọng và che khuất thông tin quy trình hoặc tường thuật trong cách sắp xếp."
    ]
  },
  {
    "id": "pan-shot",
    "name": "Pan Shot",
    "definition": "A horizontal rotation of the camera on a fixed axis, sweeping left or right to reveal the breadth of a space, follow lateral movement, or connect subjects across a scene. John Ford's slow, reverent pans across Monument Valley in \"The Searchers\" established the landscape as a character. Jean Renoir pioneered fluid panning in \"The Rules of the Game,\" and Paul Thomas Anderson uses methodical lateral pans in \"There Will Be Blood\" to survey the oil fields with the deliberate gaze of a prospector scanning for fortune.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/pan-shot.webp",
    "videoRef": "/video/cinematique/pan-shot.mp4",
    "promptTemplate": "Slow panoramic pan revealing [Subject], the camera rotating smoothly on a fluid head, the steady horizontal sweep connecting a wide expanse of visual information, shot on 35mm anamorphic with Panavision E-series glass, the ultra-wide field of view compressing the panorama into a layered ribbon of texture, cool teal shadows against warm highlight tones",
    "whenToUse": "Sử dụng lia khi sự chú ý phải di chuyển theo chiều ngang mà không cần di chuyển camera. Nó có thể theo chân một người băng qua khung hình, tiết lộ phong cảnh, kết nối hai chủ thể hoặc khám phá thông tin mới đang chờ đợi ngoài màn hình. Việc di chuyển tạo ra mối quan hệ giữa điểm bắt đầu và điểm kết thúc của nó, vì vậy cả hai đều quan trọng. Tránh lia máy đơn giản vì khung hình có cảm giác tĩnh; sự xoay vòng có động cơ rõ ràng và thuyết phục hơn so với việc quét trang trí.",
    "bestPractices": "Cố định máy ảnh trên một trục và mô tả thao tác xoay mượt mà từ trái sang phải hoặc từ phải sang trái. Đặt tên cho chủ đề mở đầu, đường dẫn trực quan xuyên qua phần giữa và điểm cuối chính xác giải quyết bước di chuyển. Sử dụng chất lỏng, đo tốc độ với độ mờ chuyển động vừa đủ để có cảm giác liên tục nhưng không bị nhòe. Trường biến dạng rộng có thể xếp lớp ảnh toàn cảnh. Giữ nguyên độ cao và độ nghiêng của máy ảnh, phân biệt chuyển động quay với dolly, quỹ đạo hoặc chuyển động cầm tay.",
    "commonMistakes": [
      "Không xác định được chủ đề bắt đầu và kết thúc, di chuyển theo chiều ngang mà không có hướng tường thuật hoặc phần thưởng.",
      "Kết hợp chảo với hành trình về phía trước và trôi theo chiều dọc cho đến khi chuyển động không còn được coi là chuyển động quay theo trục cố định.",
      "Di chuyển quá nhanh khiến khán giả không thể quan sát được khung cảnh hoặc hiểu được mối quan hệ đang được tiết lộ."
    ]
  },
  {
    "id": "pov-shot",
    "name": "P.O.V. Shot",
    "definition": "Shows the scene exactly as a character sees it, placing the viewer inside their subjective experience and creating powerful identification and immersion. Hitchcock was the master of POV, using subjective shots in \"Rear Window\" to lock the audience into James Stewart's voyeuristic gaze, and in \"Vertigo\" to plunge viewers into the protagonist's acrophobia. Gaspar Noé built \"Enter the Void\" entirely from a first-person perspective, including the afterlife. The \"Peep Show\" technique was also used to devastating effect by Kathryn Bigelow in \"Strange Days\" and Jonathan Glazer in \"Under the Skin.\"",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "/img/cinematique/pov-shot.webp",
    "videoRef": "/video/cinematique/pov-shot.mp4",
    "promptTemplate": "First-person POV shot through the eyes of [Subject], shallow depth of field mimicking unfocused human vision, subtle lens breathing as focus racks, shot on a wide 14mm rectilinear lens to approximate human field of view, the immersive subjectivity of seeing exactly what the character sees",
    "whenToUse": "Chọn cảnh quay ở góc nhìn khi người xem phải chia sẻ hành động nhìn của nhân vật thay vì chỉ quan sát họ. Nó có thể tăng cường sự khám phá, sợ hãi, ham muốn, giám sát, bối rối hoặc nguy hiểm về thể chất. Cảnh quay hoạt động hiệu quả nhất khi được kết hợp với chủ nhân rõ ràng của ánh nhìn và mục tiêu có ý nghĩa. Nếu không có thiết lập đó, việc lập khung hình ở góc nhìn thứ nhất có thể giống như một thủ thuật quay phim không có động cơ hoặc cảnh quay trò chơi chung chung.",
    "bestPractices": "Nêu rõ mắt của ai xác định được máy ảnh và những gì họ đang nhìn về phía đó. Giữ góc nhìn ở độ cao của nhân vật đó, với chuyển động đầu tự nhiên, nhịp thở tập trung tinh tế và sự mềm mại ở ngoại vi thay vì nhìn thấy cơ thể của người thứ ba. Phối cảnh thẳng rộng có thể gợi ý trường nhìn của con người mà không bị biến dạng mắt cá. Đối với video, hãy đồng bộ hóa chuyển động nhìn bằng âm thanh hoặc tín hiệu hành động và để sự tập trung ổn định một cách không hoàn hảo, giống như sự chú ý của con người, trước khi chi tiết quan trọng trở nên rõ ràng.",
    "commonMistakes": [
      "Hiển thị nhân vật đang quan sát trong cùng một khung hình, điều này phá vỡ tuyên bố rằng hình ảnh đó là góc nhìn chính xác của họ.",
      "Thêm độ cong mắt cá phóng đại để đọc như một camera hành động thay vì tầm nhìn chủ quan thông thường.",
      "Sử dụng cách lắc đầu ngẫu nhiên mà không có mục tiêu, khiến góc nhìn trở nên buồn nôn thay vì đồng cảm về mặt cảm xúc với nhân vật."
    ]
  },
  {
    "id": "rack-focus",
    "name": "Rack Focus",
    "definition": "A deliberate shift of focus from one subject to another within the same shot, redirecting audience attention without cutting and creating elegant visual transitions between foreground and background. Orson Welles and cinematographer Gregg Toland pioneered deep focus techniques in \"Citizen Kane,\" but the deliberate rack focus became an expressive tool through the work of cinematographers like Vilmos Zsigmond in \"The Deer Hunter.\" Robert Altman used rack focus as a narrative device in \"The Player,\" shifting attention between overlapping conversations, and Roger Deakins employs subtle focus pulls as emotional punctuation throughout his collaborations with the Coen Brothers.",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/rack-focus.webp",
    "videoRef": "/video/cinematique/rack-focus.mp4",
    "promptTemplate": "Rack focus shot with [Subject] transitioning between sharp foreground detail and resolved background, the focus pull taking a full two seconds, layers of creamy circular bokeh in the defocused plane, shot on a vintage Canon K35 lens wide open at T1.4 for maximum separation between planes, the shallow depth of field turning focus itself into a storytelling instrument",
    "whenToUse": "Sử dụng tiêu điểm chuẩn khi hai đối tượng có chung một bố cục nhưng sự chú ý của khán giả phải chuyển giữa chúng. Manh mối tiền cảnh có thể sắc nét hơn trước phản ứng ở hậu cảnh hoặc nhân vật đang nói có thể nhường chỗ cho người đang lắng nghe phía sau họ. Việc di chuyển này bảo tồn tính liên tục của không gian trong khi thay đổi điểm nhấn của câu chuyện. Nó cần những mặt phẳng có chiều sâu riêng biệt và một lý do để thay đổi; nếu không thì việc tìm kiếm tiêu điểm trông giống như một lỗi kỹ thuật hơn là chỉ đạo.",
    "bestPractices": "Đưa một đối tượng đến gần ống kính và một đối tượng khác được tách biệt rõ ràng ở hậu cảnh. Chỉ bắt đầu với mặt phẳng đầu tiên sắc nét, sau đó kéo nét mượt mà trong khoảng hai giây cho đến khi mặt phẳng thứ hai được giải quyết và mặt phẳng đầu tiên rơi vào hiệu ứng mờ ảo. Sử dụng ống kính cổ điển nhanh và giữ cố định vị trí máy ảnh để tiêu điểm tự thực hiện chỉnh sửa. Xác định yếu tố kích hoạt sự thay đổi, chẳng hạn như âm thanh, cái nhìn hoặc vật thể được tiết lộ và tránh nhịp thở làm thay đổi khung hình một cách đột ngột.",
    "commonMistakes": [
      "Đặt cả hai đối tượng trên cùng một mặt phẳng độ sâu, để lại quá ít khoảng cách quang học để có thể nhìn thấy quá trình chuyển đổi.",
      "Thay đổi khung hình của máy ảnh trong quá trình kéo, làm mất đi tiêu điểm và che khuất nơi cần chú ý.",
      "Đưa đi xem lại mà không có yếu tố kích hoạt tường thuật, làm giảm sự chuyển hướng tao nhã sang việc tìm kiếm tiêu điểm gây mất tập trung."
    ]
  },
  {
    "id": "slow-motion",
    "name": "Slow Motion",
    "definition": "Footage captured at a higher frame rate than playback speed, stretching time to reveal details invisible at normal speed and amplifying impact, beauty, or emotional weight of a moment. Sam Peckinpah revolutionized screen violence with the slow-motion bloodbath of \"The Wild Bunch,\" making destruction simultaneously beautiful and horrifying. The Wachowskis' \"bullet time\" in \"The Matrix\" became a cultural phenomenon, while Zack Snyder made speed ramping — shifting between slow and normal motion — his signature in \"300.\" Wong Kar-wai uses slow motion with step-printing in \"In the Mood for Love\" to transform a woman walking past a noodle stand into pure visual poetry.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/slow-motion.webp",
    "videoRef": "/video/cinematique/slow-motion.mp4",
    "promptTemplate": "Slow motion capture at 240fps of [Subject] suspended in a single stretched moment, dust particles hanging motionless in shafts of light, every fine detail frozen in crystalline clarity, shot on Phantom Flex4K high-speed camera with Zeiss Master Prime glass, time stretched until a single second becomes an eternity of beauty",
    "whenToUse": "Áp dụng chuyển động chậm khi một hành động ngắn chứa chi tiết hoặc sức nặng cảm xúc mà tốc độ bình thường sẽ che giấu. Các tác động, chuyển động của vải, nước, bụi, cú ngã hoặc phản ứng nhỏ trên khuôn mặt có thể trở nên dễ đọc và hoành tráng. Nó có thể làm cho bạo lực trở nên đẹp đẽ, tạm dừng nỗi đau buồn hoặc phân tích chuyển động thể thao. Dự trữ nó cho nhịp đã chọn; kéo dài chuyển động thường lệ mà không có sự tương phản thường làm giảm tính khẩn cấp thay vì tăng cường nó.",
    "bestPractices": "Chọn một hành động và mô tả hành động đó là quá trình quay tốc độ khung hình cao được phát lại chậm rãi, với phần đầu, phần cao điểm và phần thả ra rõ ràng. Yêu cầu chi tiết vi mô sắc nét trong các hạt, tóc, vải hoặc mảnh vụn đồng thời cho phép làm mờ theo hướng tự nhiên ở các cạnh nhanh nhất. Giữ cho máy ảnh di chuyển đơn giản hơn hành động của chủ thể. Nêu rõ khoảng thời gian cảm nhận để một giây mở rộng một cách có ý nghĩa thay vì đóng băng. Ánh sáng phải đủ mạnh để xác định từng phần tử lơ lửng trên nền.",
    "commonMistakes": [
      "Làm chậm một hành động không có chi tiết ẩn hoặc bước ngoặt cảm xúc, làm cho trình tự có cảm giác bị đệm hơn là được nâng cao.",
      "Loại bỏ tất cả hiện tượng nhòe chuyển động và tạo ra một chuỗi các tư thế cố định dễ vỡ thay vì chụp liên tục ở tốc độ cao.",
      "Kết hợp chuyển động cực chậm với chuyển động phức tạp của camera giúp phân tán sự kiện vật lý đang được kiểm tra."
    ]
  },
  {
    "id": "steadicam",
    "name": "Steadicam",
    "definition": "A stabilized camera rig worn by the operator that produces smooth, floating movement while following subjects through complex environments, combining the fluidity of dolly work with the freedom of handheld. Invented by Garrett Brown, the Steadicam was first showcased in \"Rocky\" (1976) running up the Philadelphia Museum steps, then immortalized by Stanley Kubrick in \"The Shining\" — the relentless tracking shots through the Overlook Hotel's corridors remain the technique's definitive achievement. Martin Scorsese's Copacabana shot in \"Goodfellas\" and Paul Thomas Anderson's opening sequence in \"Boogie Nights\" are also landmark Steadicam moments.",
    "category": "camera",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "/img/cinematique/steadicam.webp",
    "videoRef": "/video/cinematique/steadicam.mp4",
    "promptTemplate": "Steadicam tracking shot floating smoothly behind [Subject] through shifting environments, the preternatural smoothness creating a floating predatory presence, shot on Arriflex 35BL with Zeiss Standard Speed lenses, the shifting light temperatures from warm tungsten through cool fluorescent creating a living color journey",
    "whenToUse": "Sử dụng chuyển động Steadicam khi nhân vật phải di chuyển qua không gian phức tạp mà không có cảm giác rung của thiết bị cầm tay hoặc cảm giác bị ràng buộc bởi một con dolly. Nó phù hợp với hành trình hành lang, lối vào, điều hướng đám đông và những cảnh mà máy ảnh trở thành người bạn đồng hành hoặc kẻ săn mồi bình tĩnh. Tính liên tục trôi nổi có thể tạo nên sự đắm chìm và dự đoán. Hãy tránh điều này khi sự bất ổn, tác động đột ngột hoặc sự tĩnh lặng tuyệt đối của chân máy phục vụ tốt hơn cho cảnh quay.",
    "bestPractices": "Để máy ảnh lơ lửng phía sau, bên cạnh hoặc phía trước đối tượng ở khoảng cách đi bộ không đổi của con người. Mô tả những khúc cua êm ái, những khoảng trời bằng phẳng, khả năng tăng tốc nhẹ nhàng và việc đi qua các ô cửa hoặc môi trường thay đổi một cách có chủ ý. Hãy để nhiệt độ màu thực tế thay đổi một cách tự nhiên khi lộ trình chuyển từ ánh sáng vonfram ấm áp sang ánh sáng huỳnh quang mát mẻ. Giữ cho tiếng bước chân bị chặn nhưng không mang tính robot. Xác định đường đi và điểm cuối hoàn chỉnh để chuyển động có cảm giác được dàn dựng chứ không giống như những thước phim gimbal không có mục đích.",
    "commonMistakes": [
      "Giúp cho việc di chuyển hoàn toàn không có ma sát, khiến bạn có cảm giác như đang rời xa cơ thể thay vì giống như một người điều khiển lành nghề đang di chuyển trong không gian.",
      "Không xác định được lộ trình, khiến cửa, tường và các phần bổ sung thay đổi không thể đoán trước trong quá trình di chuyển được tạo ra.",
      "Thêm các cú giật cầm tay để tạo cảm giác phấn khích, làm suy yếu tính liên tục nổi mượt mà giúp phân biệt tác phẩm Steadicam."
    ]
  },
  {
    "id": "tracking-shot",
    "name": "Tracking Shot",
    "definition": "The camera moves alongside, behind, or in front of a moving subject, maintaining a consistent spatial relationship to create a sense of journey, pursuit, or accompaniment. Jean-Luc Godard's famous lateral tracking shot in \"Weekend\" follows a traffic jam for nearly ten unbroken minutes. Andrei Tarkovsky's tracking shots in \"Stalker\" move with hypnotic slowness through the Zone, while Alfonso Cuarón and cinematographer Emmanuel Lubezki perfected the extended tracking shot in \"Children of Men,\" where the camera follows characters through chaotic war zones without cutting for minutes at a time.",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/tracking-shot.webp",
    "videoRef": "/video/cinematique/tracking-shot.mp4",
    "promptTemplate": "Lateral tracking shot following [Subject] at shoulder height, the camera keeping perfect pace on a parallel track, smooth parallax separation between foreground, mid-ground, and background layers, shot on 35mm Kodak Vision3 250D with a 40mm Panavision Primo lens, the rhythmic steady accompaniment of a camera that walks with its subject",
    "whenToUse": "Sử dụng cảnh quay theo dõi khi chuyển động qua một địa điểm là một phần của câu chuyện: theo đuổi, khám phá, thói quen, trốn thoát hoặc diễu hành. Không giống như chảo, camera thay đổi vị trí. Động thái này có thể khiến khán giả theo dõi một chủ đề, tiếp xúc dần dần với môi trường hoặc giữ sự căng thẳng mà không cần cắt giảm.",
    "bestPractices": "Xác định xem máy ảnh dẫn, đi theo hay di chuyển bên cạnh đối tượng; sau đó nêu rõ chiều cao, khoảng cách, tốc độ và những gì vẫn bị khóa trong khung. Cung cấp cho mô hình các đối tượng tiền cảnh để vượt qua và độ sâu nền để lộ. Đối với các thế hệ dài hơn, hãy giữ cho hành động đơn giản và liên tục để bản sắc, phương hướng và địa lý ít có cơ hội bị trôi dạt hơn.",
    "commonMistakes": [
      "Viết “ảnh chụp theo dõi” mà không nói rõ vị trí của máy ảnh so với đối tượng.",
      "Nhầm lẫn giữa trục xoay cố định với việc di chuyển vật lý qua hiện trường.",
      "Kết hợp đường dẫn camera phức tạp với nhiều hành động của nhân vật và thay đổi môi trường trong một thế hệ ngắn."
    ]
  },
  {
    "id": "vertigo-effect",
    "name": "Vertigo Effect",
    "definition": "Also called a dolly zoom — the camera dollies in while zooming out (or vice versa), causing the background to warp while the subject stays the same size, creating a visceral sense of disorientation. Invented by cameraman Irmin Roberts for Alfred Hitchcock's \"Vertigo\" (1958) to visualize James Stewart's acrophobia, the technique was later used to devastating effect by Steven Spielberg in \"Jaws\" — the moment Chief Brody sees the shark attack from the beach. Peter Jackson employed it in \"The Lord of the Rings\" when Frodo senses the Ringwraiths approaching, and Sam Raimi made it a horror staple in the \"Evil Dead\" films.",
    "category": "camera",
    "difficulty": "Advanced",
    "mood": "Horror",
    "image": "/img/cinematique/vertigo-effect.webp",
    "videoRef": "/video/cinematique/vertigo-effect.mp4",
    "promptTemplate": "Vertigo effect dolly zoom on [Subject] locked in frame while the background warps and telescopes away in a nauseating spatial contradiction, the zoom and dolly counter-movement perfectly synchronized, desaturated palette with sickly yellow-green undertones, shot on anamorphic glass, Hitchcock's visual language of psychological vertigo made manifest",
    "whenToUse": "Triển khai hiệu ứng chóng mặt vào thời điểm bị sốc, sợ hãi, nhận ra hoặc thay đổi nhận thức. Đối tượng vẫn giữ nguyên kích thước trong khi thế giới đằng sau họ là kính viễn vọng, khiến không gian ổn định đột nhiên trở nên bất khả thi. Nó hoạt động khi tâm lý và môi trường phải va chạm nhau trong một động thái máy móc. Vì sự biến dạng rất dễ thấy nên hãy sử dụng nó một cách tiết kiệm và thúc đẩy nó bằng một chuyển biến cảm xúc rõ ràng hơn là sự khó chịu chung chung.",
    "bestPractices": "Khóa kích thước và vị trí trung tâm của đối tượng trong suốt quá trình chụp. Di chuyển máy ảnh vào trong trong khi phóng to ra ngoài hoặc đảo ngược cả hai hành động với khả năng đồng bộ ngược hoàn hảo. Khuôn mặt tiền cảnh phải duy trì ổn định khi khoảng cách hậu cảnh kéo dài hoặc nén lại một cách rõ ràng dọc theo các đường có chiều sâu mạnh. Sử dụng bảng màu không bão hòa với tông màu vàng-xanh lá cây buồn tẻ và kết cấu biến dạng hạn chế. Nêu rõ thời lượng của hành động và sự kích hoạt cảm xúc; không yêu cầu đẩy vào bình thường khi thở ống kính ngẫu nhiên.",
    "commonMistakes": [
      "Cho phép đối tượng phát triển trong quá trình di chuyển, biến thiết lập thành phương pháp thu phóng hoặc dolly thông thường.",
      "Chọn nền phẳng không có đường nét sâu, để lại ít không gian nhìn thấy được khiến sự mâu thuẫn bị cong vênh.",
      "Sử dụng hiệu ứng này nhiều lần, do đó, sự đứt gãy tâm lý mạnh mẽ sẽ trở thành sự chuyển đổi có thể đoán trước được giữa các cảnh quay thông thường."
    ]
  },
  {
    "id": "crane-shot",
    "name": "Crane Shot",
    "definition": "Camera mounted on a mechanical crane arm that sweeps upward, downward, or across a scene with majestic, controlled movement, often used for dramatic reveals or grand establishing moments. Orson Welles opened \"Touch of Evil\" with one of cinema's most famous crane shots — a continuous three-minute take following a car bomb through a Mexican border town. The final crane shot of \"Gone with the Wind\" pulling back to reveal hundreds of wounded soldiers remains one of Hollywood's most iconic images. Brian De Palma used elaborate crane work in \"The Untouchables\" for the Union Station staircase sequence, and Steven Spielberg's crane shots in \"Schindler's List\" shift from intimate to devastating in scale.",
    "category": "camera",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "/img/cinematique/crane-shot.webp",
    "videoRef": "/video/cinematique/crane-shot.mp4",
    "promptTemplate": "Crane shot beginning tight on [Subject] then sweeping upward and backward in a majestic arc to reveal the true surrounding scale, the individual becoming one element among many in a seamless vertical revelation, shot on ARRI Alexa 65 with a 35mm Signature Prime, the mechanical grace of a Technocrane executing a precisely choreographed arc, golden hour light flooding horizontally",
    "whenToUse": "Chọn cảnh quay cần cẩu khi một cảnh cần một tiết lộ hoành tráng để thay đổi quy mô và phối cảnh trong một chuyển động được kiểm soát. Từ một con người đến một đám đông, chiến trường, tòa nhà hoặc phong cảnh có thể bộc lộ những hậu quả vượt ra ngoài khuôn khổ thân mật. Giảm dần có thể cô lập một nhân vật khỏi một thế giới rộng lớn hơn. Động thái này phù hợp với phần mở đầu, phần kết thúc và những chuyển tiếp lớn; sẽ là quá mức khi một thao tác nghiêng hoặc kéo ra đơn giản cũng truyền tải cùng một thông tin.",
    "bestPractices": "Bắt đầu trên một chủ thể được đóng khung rõ ràng, sau đó quét lên và lùi dọc theo một vòng cung cơ học mượt mà. Tiết lộ các lớp mới theo trình tự thay vì hiển thị toàn bộ môi trường cùng một lúc: hành động lân cận, nhóm xung quanh, kiến ​​trúc, rồi đến đường chân trời. Giữ vị trí của đối tượng có thể theo dõi được khi quy mô mở rộng. Sử dụng ánh sáng giờ vàng rộng để liên kết các cấp độ với nhau và ống kính rộng để tránh hiện tượng biến dạng nghiêm trọng. Con đường phải có cảm giác được thiết kế, ổn định và liên tục, không bao giờ giống như những cảnh quay trôi nổi tự do trên không.",
    "commonMistakes": [
      "Tiết lộ toàn bộ bối cảnh trong khung hình đầu tiên, khiến chuyển động của cần cẩu không có thông tin hình ảnh mới nào được khám phá.",
      "Làm mất chủ thể ban đầu trong quá trình đi lên, điều này phá vỡ sự chuyển đổi dự định giữa quy mô cá nhân và quy mô xung quanh.",
      "Thay thế vòng cung được kiểm soát bằng sự trôi dạt ngẫu nhiên trong không khí được coi là một cú bắn từ trên không chứ không phải là chuyển động của cần cẩu."
    ]
  },
  {
    "id": "one-er",
    "name": "One-er (Oner)",
    "definition": "An entire scene captured in a single unbroken take with no cuts, demanding precise choreography of actors, camera, and crew while creating real-time tension and immersive spatial continuity. Alfonso Cuarón and Emmanuel Lubezki pushed the oner to its limits in \"Children of Men\" with a six-minute car ambush shot, and Alejandro González Iñárritu structured the entirety of \"Birdman\" as one apparent continuous take. Alexander Sokurov actually achieved a true single-take feature film with \"Russian Ark,\" 96 unbroken minutes wandering through the Hermitage Museum. Sam Mendes' \"1917\" used hidden cuts to create the illusion of a two-hour oner through World War I trenches.",
    "category": "camera",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "/img/cinematique/one-er.webp",
    "videoRef": "/video/cinematique/one-er.mp4",
    "promptTemplate": "Long unbroken single take following [Subject] through shifting environments, the entire journey unbroken for minutes of choreographed spatial continuity, shot on Steadicam with an ARRI Alexa Mini and Cooke S4 21mm lens, the shifting light temperatures creating a living color journey through the space",
    "whenToUse": "Sử dụng oner khi tính liên tục trong thời gian thực sẽ tạo ra dòng chảy đắm chìm, áp lực hoặc điêu luyện. Nó có thể theo dõi các nhân vật qua các phòng được kết nối, duy trì hiệu suất ngày càng tăng hoặc khiến người xem khám phá hành động giống như máy quay. Cảnh quay cần vũ đạo đủ mạnh để biện minh cho việc không có những đoạn cắt. Chọn phạm vi bao phủ thông thường khi thời gian phải nén, địa lý có thể bị phân mảnh hoặc đường dẫn được tạo không thể mạch lạc.",
    "bestPractices": "Mô tả một tuyến đường liền mạch từ bố cục mở đầu đến vị trí cuối cùng, bao gồm từng ô cửa, lối rẽ, diễn viên băng qua, thay đổi tiêu điểm và chuyển tiếp ánh sáng. Giữ ống kính rộng vừa phải và chuyển động Steadicam mượt mà để không gian vẫn có thể đọc được. Chỉ định các hành động được tính thời gian để thu hút sự chú ý của máy ảnh mà không ám chỉ việc cắt giảm. Mang theo tủ quần áo, đạo cụ, màn chiếu kiên trì qua từng nhịp điệu. Nếu có ý định chuyển tiếp ẩn, hãy xác định phần tắc chính xác thay vì cho phép đặt lại hình ảnh tùy ý.",
    "commonMistakes": [
      "Chỉ viết cảnh quay dài liên tục mà không lập sơ đồ tuyến đường, khiến cảnh dễ bị nhảy vọt về không gian và các chi tiết bị thay đổi.",
      "Đưa các sự kiện không liên quan vào động tác, vì vậy vũ đạo có cảm giác giống như một màn trình diễn hơn là một nhịp điệu đang phát triển.",
      "Sử dụng những thay đổi độ dài tiêu cự đột ngột hoặc khả năng dịch chuyển tức thời của máy ảnh không thể hoạt động như những đoạn cắt mặc dù ngôn ngữ được quay liên tục."
    ]
  },
  {
    "id": "tilt-shot",
    "name": "Tilt Shot",
    "definition": "A vertical rotation of the camera on a fixed axis, tilting up or down to reveal height, scan a character from feet to face, or follow vertical action. Hitchcock used the slow tilt masterfully in \"Psycho,\" tilting up the facade of the Bates house to establish its Gothic menace. Spielberg opens \"Jurassic Park\" with a slow tilt up the Brachiosaurus that mirrors the characters' awe, and Christopher Nolan employs precise tilts in \"Inception\" to disorient the viewer as architecture folds upon itself.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/tilt-shot.webp",
    "videoRef": "/video/cinematique/tilt-shot.mp4",
    "promptTemplate": "Slow tilt shot beginning at the feet of [Subject] and climbing vertically up their body, the deliberate vertical scan building anticipation, each detail telling the character's story before the face is revealed, shot on 85mm telephoto compressing the vertical layers, Kodak Vision3 500T with cool overcast color rendition",
    "whenToUse": "Sử dụng độ nghiêng khi sự chú ý cần di chuyển theo chiều dọc trong khi máy ảnh vẫn giữ nguyên vị trí. Việc nâng từ ủng lên mặt một cách chậm rãi có thể làm chậm khả năng nhận dạng; việc di chuyển lên mặt tiền có thể tạo ra chiều cao đáng sợ; nghiêng xuống có thể tiết lộ mối nguy hiểm, bằng chứng hoặc cơ thể bên dưới. Sự bắt đầu và kết thúc sẽ hình thành một mối quan hệ có ý nghĩa. Tránh nghiêng khi độ cao camera vật lý hoặc khung tĩnh rộng hơn truyền đạt ý tưởng rõ ràng hơn.",
    "bestPractices": "Cố định máy ảnh trên giá đỡ của nó và chỉ định xoay theo chiều dọc lên hoặc xuống mà không di chuyển sang bên. Đặt tên cho chi tiết bắt đầu, thông tin hình ảnh gặp phải trong quá trình di chuyển và tiết lộ cuối cùng. Góc nhìn từ xa có thể nén các chi tiết xếp chồng lên nhau trong quá trình quét ký tự, trong khi tốc độ ổn định sẽ tạo nên sự mong đợi. Giữ khung ngang ổn định và tránh cuộn. Đối với video, hãy để độ nghiêng được giải quyết và giữ nhanh điểm đến để ghi lại khuôn mặt hoặc đối tượng được tiết lộ.",
    "commonMistakes": [
      "Độ nghiêng khó hiểu với việc nâng camera, làm thay đổi góc nhìn và thị sai thay vì xoay trên một trục cố định.",
      "Bắt đầu và kết thúc ở những chi tiết không liên quan, khiến quá trình quét dọc không có tính logic hoặc hình ảnh ấn tượng.",
      "Nghiêng quá nhanh để có thể ghi lại các manh mối về trang phục, kiến ​​trúc hoặc môi trường trước khi tiết lộ cuối cùng."
    ]
  },
  {
    "id": "whip-pan",
    "name": "Whip Pan",
    "definition": "An extremely fast horizontal pan that creates motion blur, used as a dynamic transition or to convey sudden surprise, rapid shifts of attention, or frenetic energy. Edgar Wright made the whip pan his comedic signature in \"Shaun of the Dead,\" \"Hot Fuzz,\" and \"Baby Driver,\" using them as rapid-fire visual punchlines. Sam Raimi employed frantic whip pans in the \"Evil Dead\" trilogy to convey demonic energy, and Damien Chazelle used precise whip pans in \"Whiplash\" to match the violent tempo of jazz drumming. Paul Thomas Anderson uses them as elegant transitions between scenes in \"Boogie Nights.\"",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Action",
    "image": "/img/cinematique/whip-pan.webp",
    "videoRef": "/video/cinematique/whip-pan.mp4",
    "promptTemplate": "Whip pan snapping to [Subject], heavy horizontal motion blur streaking the environment into abstract ribbons of color, the blur lasting just three frames before resolving into razor sharpness, shot on high-speed camera with a 35mm Zeiss Master Prime, raw visceral kinetic energy",
    "whenToUse": "Chọn một chiếc chảo roi để chuyển sự chú ý đột ngột, một đường đột trực quan, một tác động hoặc một sự chuyển đổi năng lượng cao giữa các không gian được kết nối. Độ mờ ngắn của nó có thể che đi vết cắt hoặc thu hẹp khoảng cách giữa các đối tượng. Điểm đến phải biện minh cho việc chụp nhanh. Sử dụng nó làm dấu câu trong phạm vi được kiểm soát; những đòn roi liên tục khiến khung cảnh trở nên ồn ào và xóa đi sự bất ngờ mang lại lực di chuyển.",
    "bestPractices": "Xác định khung bắt đầu sắc nét và khung hạ cánh sắc nét như nhau trên đối tượng thứ hai. Đặt máy ảnh theo chiều ngang giữa chúng, chỉ cho phép một vài khung hình có vệt định hướng nặng trước khi hình ảnh được phân giải. Giữ độ mờ phù hợp với chuyển động thay vì xuyên tâm hoặc ngẫu nhiên. Khớp chiều cao của chủ thể và hướng chuyển động nếu khung xoay che đi quá trình chuyển đổi. Giữ một thời gian ngắn sau khi hạ cánh. Việc di chuyển phải được hiểu là một phản ứng mang tính quyết định của người vận hành chứ không phải là một lần quét nhanh liên tục.",
    "commonMistakes": [
      "Để lại điểm cuối mơ hồ, khiến máy ảnh dừng lại ở khoảng trống hoặc chủ thể không bao giờ được giải quyết rõ ràng.",
      "Áp dụng hiệu ứng làm mờ trước và sau chuyển động, loại bỏ độ tương phản sắc nét tạo ra hiệu ứng xoay tròn.",
      "Sử dụng các vệt thu phóng xuyên tâm thay vì làm mờ chuyển động theo chiều ngang, gây nhầm lẫn kỹ thuật này với thu phóng cố định."
    ]
  },
  {
    "id": "two-shot",
    "name": "Two-Shot",
    "definition": "A shot framing exactly two subjects, showing their spatial and emotional relationship, essential for establishing dynamics between characters in conversation, confrontation, or intimacy. Billy Wilder was a master of the two-shot, using it in \"The Apartment\" and \"Some Like It Hot\" to capture the chemistry of his actors. Before Midnight director Richard Linklater builds entire films from two-shots of couples walking and talking, and Wong Kar-wai uses cramped two-shots in \"In the Mood for Love\" to convey forbidden intimacy within claustrophobic spaces.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/two-shot.webp",
    "videoRef": "/video/cinematique/two-shot.mp4",
    "promptTemplate": "Two-shot of [Subject] framed together, their bodies creating complementary angles, the space between them charged with everything said and unsaid, shot on a 50mm Summilux at f/1.4 with gentle background blur, Kodak Portra 400 color rendition with soft warm midtones, the quiet eloquence of two figures in shared space",
    "whenToUse": "Sử dụng cảnh quay kép khi mối quan hệ giữa hai người quan trọng hơn hiệu suất của từng cá nhân. Việc đóng khung chia sẻ thể hiện sự hấp dẫn, liên minh, sự cạnh tranh, khoảng cách và những thay đổi về người kiểm soát không gian. Nó có tác dụng cho cuộc trò chuyện, đối thoại đi bộ, đối đầu và sự thân mật trong im lặng. Chuyển sang đánh đơn khi sự cô lập trở thành điểm chính hoặc chuyển sang bảo hiểm qua vai khi sàn giao dịch cần nhiều áp lực chủ quan hơn.",
    "bestPractices": "Đóng khung chính xác hai đối tượng với cả khuôn mặt và góc độ cơ thể đều rõ ràng. Sử dụng khoảng cách, chiều cao, hướng và đường nhìn chung của họ để thể hiện mối quan hệ trước khi cuộc đối thoại bắt đầu. Một ống kính bình thường và khả năng tách hậu cảnh nhẹ nhàng giữ cho khung cảnh trở nên gần gũi mà không xóa bối cảnh. Để lại khoảng cách giữa chúng có thể nhìn thấy được; nó mang sức nặng cảm xúc. Đối với video, người biên đạo sẽ đóng, cắt ngang hoặc rút ra khỏi khoảng trống đó trong khi vẫn giữ cả hai nhân vật bên trong bố cục theo nhịp.",
    "commonMistakes": [
      "Coi cả hai nhân vật như những bức chân dung độc lập, không có đường kẻ mắt, cử chỉ hoặc sự căng thẳng về không gian kết nối chúng.",
      "Cắt xén một chủ thể ở một góc cạnh khó xử, khiến người thứ hai cảm thấy vô tình hơn là có bố cục cân bằng.",
      "Việc sử dụng phông nền mờ quá nặng khiến môi trường chung không còn góp phần vào mối quan hệ của họ nữa."
    ]
  },
  {
    "id": "three-shot",
    "name": "Three-Shot",
    "definition": "A shot framing three subjects, often used to show group dynamics, alliances, or the odd-one-out tension within a trio. Sergio Leone perfected the three-shot in the climactic standoff of \"The Good, the Bad and the Ugly,\" cycling between three armed men in a graveyard to create one of cinema's most iconic compositions. Akira Kurosawa uses triangular three-shots in \"Rashomon\" to stage conflicting testimonies, and the Coen Brothers frequently compose three-shots in their ensemble comedies like \"The Big Lebowski\" to play dynamics of alliance and exclusion within a group.",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/three-shot.webp",
    "videoRef": "/video/cinematique/three-shot.mp4",
    "promptTemplate": "Three-shot of [Subject] arranged in a triangular composition across the widescreen frame, each occupying their own third, the triangular formation revealing tension between completely different energies colliding at a single point, shot on anamorphic 50mm with the wide frame emphasizing space between the three figures",
    "whenToUse": "Chọn cảnh quay ba cảnh khi bộ phim có một bộ ba thay vì ba nhân vật riêng biệt. Vị trí tam giác có thể tiết lộ hai đối một, một người hòa giải bị mắc kẹt giữa các đối thủ hoặc các liên minh không ổn định thay đổi trong bối cảnh. Nó phù hợp với những tình huống bế tắc, đàm phán, hài kịch và căng thẳng gia đình. Tránh xếp mọi người ngang nhau trừ khi có chủ ý trung lập; sự sắp xếp sẽ làm cho hình học cảm xúc của nhóm trở nên rõ ràng.",
    "bestPractices": "Đặt ba đối tượng tại các điểm khác nhau của một hình tam giác trên khung màn hình rộng, thay đổi độ sâu hoặc chiều cao để thiết lập thứ bậc. Cung cấp cho mỗi người một đường kẻ mắt dễ đọc và hướng cơ thể hướng về phía hoặc cách xa những người khác. Giữ khoảng cách giữa chúng rõ ràng để liên minh và loại trừ có thể thay đổi thông qua chuyển động. Sử dụng trường biến dạng mà không làm các cạnh bị chen chúc. Trong video, hãy chỉ định cử chỉ hoặc bước làm thay đổi hình tam giác và phân phối lại trọng lượng hình ảnh.",
    "commonMistakes": [
      "Sắp xếp bộ ba thành một hàng ngang vai, giúp che giấu các liên minh và tạo cảm giác bố cục.",
      "Tạo cho cả ba nhân vật sức nặng hình ảnh bằng nhau khi cảnh phụ thuộc vào một người bị cô lập hoặc chiếm ưu thế.",
      "Cho phép ánh mắt hướng vào một cách ngẫu nhiên, làm cho các nhân vật có vẻ như bị ngắt kết nối khỏi cuộc trò chuyện hoặc đang bế tắc."
    ]
  },
  {
    "id": "cowboy-shot",
    "name": "Cowboy Shot",
    "definition": "Frames the subject from roughly mid-thigh up, named after Western films where the frame needed to include a gunslinger's holstered weapon, conveying casual authority. Sergio Leone codified this framing in his Dollars trilogy, making the cowboy shot synonymous with Clint Eastwood's laconic gunfighter stance. Tarantino pays homage to the cowboy shot throughout \"Kill Bill\" and \"Django Unchained,\" and it has migrated beyond Westerns — John Woo uses the same mid-thigh framing for his dual-pistol action heroes in \"Hard Boiled\" and \"The Killer.\"",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/cowboy-shot.webp",
    "videoRef": "/video/cinematique/cowboy-shot.mp4",
    "promptTemplate": "Cowboy shot of [Subject] framed from mid-thigh up, hands hanging loose at their sides, the figure's posture radiating coiled readiness beneath apparent calm, shot on Techniscope 2-perf 35mm for a gritty widescreen look, warm dusty color palette of ochre and leather brown",
    "whenToUse": "Sử dụng cảnh quay cao bồi khi tay, hông, tư thế hoặc cầm vũ khí của nhân vật quan trọng dọc theo khuôn mặt. Khung giữa đùi truyền tải sự sẵn sàng và uy quyền bình thường mà không làm mất đi sự biểu cảm. Nó phù hợp với sự căng thẳng, lối vào hành động, thời trang của phương Tây và bất kỳ khoảnh khắc nào được xây dựng xung quanh những gì ai đó có thể hướng tới. Chọn một cảnh quay trung bình để trò chuyện dễ dàng hơn hoặc một cảnh quay dài hoàn chỉnh khi động tác chân và môi trường quan trọng.",
    "bestPractices": "Cắt hình ở giữa đùi, giữ rõ cả hai tay và có đủ khoảng trống trên đầu để có hình dáng ổn định. Yêu cầu một tư thế thoải mái nhưng sẵn sàng, với sự phân bổ trọng lượng và các chi tiết trong tủ quần áo có tác dụng nhiều như sự biểu cảm. Sử dụng kết cấu màn hình rộng thô ráp, tông màu da và màu đất son ấm áp cũng như phối cảnh tự nhiên không kéo dài chân. Trong video, hãy giữ khung hình bằng chuyển động của tay thay vì tự động đẩy gần khuôn mặt hơn.",
    "commonMistakes": [
      "Cắt ở phần thắt lưng, giúp loại bỏ vùng bao da và biến ảnh thành ảnh trung bình tiêu chuẩn.",
      "Giấu cả hai tay sau đạo cụ hoặc mép khung, làm mất đi hành động tiềm ẩn mang lại sự căng thẳng cho bố cục.",
      "Theo mặc định, sử dụng góc thấp quá mức, tạo ra sự thống trị rõ ràng vào khung hình vốn đã mang tính uy tín."
    ]
  },
  {
    "id": "medium-close-up",
    "name": "Medium Close-Up",
    "definition": "Frames the subject from the chest up, tighter than a medium shot but not as intimate as a close-up, ideal for emotional dialogue while retaining some body language context. This framing became the default for television drama and is the backbone of prestige TV from \"The Sopranos\" to \"Breaking Bad.\" In cinema, Michael Mann favors the medium close-up in \"Heat\" and \"Collateral\" to maintain both the intensity of facial performance and the physical awareness of characters in dangerous environments. Jonathan Demme's slightly-off-center medium close-ups became his signature from \"Silence of the Lambs\" through \"Rachel Getting Married.\"",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/medium-close-up.webp",
    "videoRef": "/video/cinematique/medium-close-up.mp4",
    "promptTemplate": "Medium close-up of [Subject] from the chest up, the intimate distance perfect for reading micro-expressions while body language of tension remains visible in the shoulders and hands, shot on a 75mm Cooke S4 at T2, noir-inflected color palette of deep blues and intermittent warm accents",
    "whenToUse": "Chọn một cảnh quay cận cảnh trung bình khi cuộc đối thoại đầy cảm xúc cần sự thân mật mà không bị áp lực bởi một cảnh quay cận cảnh hoàn toàn. Khung hình hướng lên trên giúp cho các biểu cảm vi mô trở nên rõ ràng trong khi vẫn giữ được độ căng của vai và phần trên cơ thể. Nó mạnh mẽ cho các cuộc phỏng vấn, thú nhận, xung đột hạn chế và nhịp phản ứng. Kéo rộng hơn khi bàn tay hoặc mối quan hệ không gian quan trọng; di chuyển chặt chẽ hơn khi khuôn mặt phải trở thành toàn bộ khung cảnh ấn tượng.",
    "bestPractices": "Khung từ ngực trở lên, giữ cho vai hiện diện đầy đủ và mắt gần phần trên. Sử dụng phối cảnh chân dung dài hơn một chút, độ mờ hậu cảnh vừa phải và độ tương phản được kiểm soát để bảo toàn chi tiết làn da. Hãy để những thay đổi nhỏ ở hàm, hơi thở và vị trí vai mang lại hiệu quả. Chỉ bao gồm đủ môi trường để neo vị trí. Đối với video, tránh thu phóng tự động; giữ khoảng cách thân mật và để biểu cảm vi mô của diễn viên tạo nên sự biến hóa.",
    "commonMistakes": [
      "Cắt dưới cằm hoặc phía trên vai, biến khung hình dự định thành cận cảnh chặt chẽ.",
      "Để lộ quá nhiều phần thân trên, làm yếu đi điểm nhấn trên khuôn mặt và quay trở lại cảnh quay trung bình thông thường.",
      "Làm mịn da và biểu cảm một cách mạnh mẽ đến mức các tín hiệu hiệu suất tinh tế mà khung hình tồn tại để ghi lại sẽ biến mất."
    ]
  },
  {
    "id": "choker-shot",
    "name": "Choker Shot",
    "definition": "A very tight shot framing the face from forehead to chin, eliminating nearly all background, more claustrophobic than a standard close-up and often used for moments of extreme emotion. Ingmar Bergman used the choker shot relentlessly in \"Persona\" and \"Cries and Whispers,\" trapping his actors' faces in frames that feel like emotional prisons. Darren Aronofsky adopted this approach in \"Black Swan,\" keeping Natalie Portman's face in suffocating proximity, and Steve McQueen uses sustained choker shots in \"Hunger\" and \"Shame\" to force viewers into uncomfortable intimacy with his characters' pain.",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "/img/cinematique/choker-shot.webp",
    "videoRef": "/video/cinematique/choker-shot.mp4",
    "promptTemplate": "Choker shot framing [Subject] from hairline to chin with zero background visible, the skin filling the entire screen like a landscape, harsh toplight creating deep shadow in the eye sockets while illuminating the planes of cheekbone and brow, shot on a 100mm macro lens at T2.8, high-contrast monochromatic color treatment, Bergman-level psychological claustrophobia",
    "whenToUse": "Sử dụng ảnh vòng cổ khi khuôn mặt phải trở thành một không gian cảm xúc bị giới hạn. Việc đóng khung từ trán đến cằm sẽ loại bỏ hầu hết mọi bối cảnh và để lại những thay đổi nhỏ ở mắt, miệng và độ căng của da. Nó phù hợp với sự hoảng loạn, xấu hổ, ám ảnh, đối đầu và cảm giác khó chịu kéo dài. Bởi vì sự gần gũi mang tính hung hăng nên hãy để dành nó cho các hệ thống chính thức có chủ ý hoặc đỉnh cao hơn là đưa tin đối thoại thông thường.",
    "bestPractices": "Đổ đầy khung hình với khuôn mặt từ chân tóc đến cằm và loại bỏ tất cả phần nền có thể nhìn thấy. Sử dụng phối cảnh chân dung dài hơn hoặc macro để kiểm soát các tính năng, sau đó định hình các mặt phẳng bằng ánh sáng mạnh và bóng hốc mắt sâu. Bảo vệ lỗ chân lông, độ ẩm và biểu hiện vi mô hơn là độ mịn màng thẩm mỹ. Đối với video, hãy giữ đối tượng bên trong ranh giới hẹp này chỉ bằng hơi thở, chớp mắt hoặc trôi tiêu điểm theo từng phút; chuyển động của đầu lớn sẽ có cảm giác bị hạn chế bởi khung.",
    "commonMistakes": [
      "Để lại hậu cảnh xung quanh đầu, mang lại cho người xem cảm giác nhẹ nhõm về không gian mà cảnh quay vòng cổ nên phủ nhận.",
      "Di chuyển quá gần với ống kính rộng, làm biến dạng mũi và má thành bức tranh biếm họa ngoài ý muốn.",
      "Sử dụng khung hình để trình bày trung tính, trong đó áp lực tâm lý của nó lấn át tầm quan trọng kịch tính thực sự."
    ]
  },
  {
    "id": "push-in",
    "name": "Push In",
    "definition": "A slow, deliberate camera movement toward the subject, physically closing distance to intensify focus and emotional weight, drawing the audience deeper into a moment or realization. Jonathan Demme's slow push-in to Clarice Starling's face during her final conversation with Hannibal Lecter in \"Silence of the Lambs\" is a masterclass in the technique. Kubrick used glacial push-ins toward Jack Nicholson in \"The Shining\" to build unbearable psychological pressure, and Paul Thomas Anderson employs the slow push-in as a recurring emotional punctuation mark throughout \"There Will Be Blood\" and \"Phantom Thread.\"",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "/img/cinematique/push-in.webp",
    "videoRef": "/video/cinematique/push-in.mp4",
    "promptTemplate": "Imperceptibly slow push-in toward [Subject], the camera beginning in a medium shot and gradually closing to a medium close-up, the push-in so gradual viewers may not consciously register the camera moving yet feel the emotional walls closing in, shot on a 50mm Cooke Speed Panchro vintage lens with gentle focus breathing, Kodak 5219 warmth",
    "whenToUse": "Sử dụng cú đẩy khi nhận ra, quyết định, đe dọa hoặc thú nhận trở nên quan trọng hơn trong khi cảnh quay tiếp tục. Chuyển động vật lý của camera thu hẹp thế giới của người xem và có thể tạo ra áp lực trước khi họ nhận ra lý do một cách có ý thức. Nó phù hợp với kịch tính của bệnh nhân hơn là sự ngạc nhiên đột ngột. Xác định những thay đổi trong quá trình di chuyển; hướng về một khuôn mặt tĩnh mà không có chuyển biến cảm xúc thường có cảm giác như sự nhấn mạnh trống rỗng.",
    "bestPractices": "Bắt đầu ở khoảng cách trung bình rõ ràng và di chuyển máy ảnh từ từ về phía cận cảnh trung bình trong khi vẫn giữ phối cảnh ống kính nhất quán. Hậu cảnh phải thay đổi theo thị sai tự nhiên, chứng tỏ việc di chuyển vật lý thay vì thu phóng kỹ thuật số. Sử dụng hơi thở lấy nét cổ điển nhẹ nhàng và màu sắc ấm áp, nhưng vẫn giữ cho đôi mắt của đối tượng luôn sắc nét. Thời gian tiếp cận một suy nghĩ hoặc một dòng cụ thể, kết thúc ngay khi nhịp cảm xúc chạm tới, sau đó giữ lại thay vì tiếp tục vô thời hạn.",
    "commonMistakes": [
      "Thay đổi độ dài tiêu cự mà không cần di chuyển máy ảnh, tạo ra khả năng thu phóng thiếu áp lực không gian của thao tác đẩy vào thực sự.",
      "Di chuyển quá nhanh để có thể nhận ra một cách lặng lẽ, bộc lộ cảm xúc trước khi màn trình diễn có thời gian phát triển.",
      "Bắt đầu quá chặt, không còn khoảng cách đáng kể để máy ảnh đóng lại trong nhịp."
    ]
  },
  {
    "id": "pull-out",
    "name": "Pull Out",
    "definition": "The camera physically moves away from the subject, revealing more of the environment, often used to create a sense of isolation, revelation, or to transition from intimate to epic scale. The final pull-out of \"The Truman Show\" — revealing that Truman's entire world is a television set — is a defining use of the technique. Steven Spielberg's pull-out in \"Schindler's List\" from Oskar Schindler to reveal the enormous line of saved workers is emotionally devastating. The famous opening of Robert Altman's \"The Player\" pulls out from an office window to reveal the entire studio lot in one continuous movement.",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/pull-out.webp",
    "videoRef": "/video/cinematique/pull-out.mp4",
    "promptTemplate": "Pull-out shot beginning tight on [Subject] then slowly withdrawing to reveal the true scale of their surroundings, the shot transitioning from intimacy to cosmic isolation in one continuous movement, shot on 24mm wide-angle lens mounted on a telescoping jib arm, the scale expanding to swallow the individual",
    "whenToUse": "Chọn một phần kéo dài khi bối cảnh mới sẽ điều chỉnh lại khoảnh khắc thân mật. Di chuyển ra xa có thể để lộ đám đông, bối cảnh, phong cảnh, hậu quả hoặc rào cản làm thay đổi ý nghĩa của chủ thể và khiến họ cảm thấy bị cô lập. Nó hoạt động cho những kết thúc, những khám phá và chuyển đổi từ quy mô cá nhân sang quy mô sử thi. Thông tin rộng hơn phải quan trọng; việc rút lui chỉ để thấy thêm khoảng trống hiếm khi tạo ra sự thay đổi cảm xúc.",
    "bestPractices": "Bắt đầu đủ chặt để đọc biểu cảm của đối tượng, sau đó di chuyển máy ảnh về phía sau theo một đường liên tục. Để các đối tượng ở tiền cảnh đi vào và kiến ​​trúc hậu cảnh mở rộng thông qua thị sai nhìn thấy được, thu nhỏ dần người bên trong bố cục. Chỉ sử dụng phối cảnh rộng khi không gian mở ra chứ không phải khi ống kính đột ngột nhảy. Chỉ định phần tử được tiết lộ cuối cùng và duy trì vị trí màn hình của chủ thể để người xem có thể theo dõi chúng khi môi trường bắt đầu nuốt chửng khung hình.",
    "commonMistakes": [
      "Không để lộ hậu quả gì ngoài khung ban đầu nên việc rút tiền thay đổi kích thước nhưng không có ý nghĩa.",
      "Chỉ thu nhỏ đối tượng chỉ bằng cách thu phóng, thiếu thị sai tiền cảnh khiến việc rút lui vật lý trở nên thuyết phục.",
      "Đánh mất chủ thể đằng sau những đồ vật mới được hé lộ trước khi khán giả có thể so sánh chúng với môi trường rộng lớn hơn."
    ]
  },
  {
    "id": "360-degree-shot",
    "name": "360-Degree Shot",
    "definition": "The camera orbits completely around the subject, creating a sense of circling energy, romantic intensity, or the feeling of time and space collapsing around a central moment. Brian De Palma used the 360-degree orbit in \"Carlito's Way\" as Carlito and Gail dance, the world spinning away until only they exist. The Wachowskis' \"bullet time\" in \"The Matrix\" took the orbital shot to a new technological dimension. Michael Bay, for all his excess, executes dynamic 360-degree hero shots that became action cinema clichés. Sam Mendes uses a slow orbit in \"American Beauty\" around Kevin Spacey's dinner table to convey suburban entrapment.",
    "category": "camera",
    "difficulty": "Advanced",
    "mood": "Romantic",
    "image": "/img/cinematique/360-degree-shot.webp",
    "videoRef": "/video/cinematique/360-degree-shot.mp4",
    "promptTemplate": "360-degree orbiting shot circling [Subject], the camera revolving slowly as the background becomes a continuous ribbon of light, the centripetal energy of the rotation making the world feel like it is spinning around the subject as its axis, shot on anamorphic 50mm with oval bokeh, warm tungsten tones on skin against cool ambient light, the romantic vertigo of circular motion",
    "whenToUse": "Sử dụng một quỹ đạo hoàn chỉnh khi thế giới dường như quay quanh một trung tâm cảm xúc. Nó có thể nâng cao sự lãng mạn, chủ nghĩa anh hùng, sự hoảng loạn, sự đoàn tụ hoặc khoảnh khắc khi không gian bình thường biến mất. Di chuyển vòng tròn cũng cho thấy mọi khía cạnh của môi trường trong khi vẫn giữ một chủ thể ở trung tâm. Dành nó cho nhịp đập lớn; một quỹ đạo không thay đổi thông tin cảm xúc hoặc không gian sẽ nhanh chóng trở thành một cảnh tượng quen thuộc.",
    "bestPractices": "Giữ đối tượng cố định gần trục trong khi máy ảnh di chuyển qua một vòng tròn hoàn chỉnh, bằng phẳng xung quanh đối tượng. Duy trì khoảng cách, tiêu điểm và tỷ lệ cơ thể nhất quán khi hậu cảnh trở thành một dải thị sai và ánh sáng liên tục. Sử dụng phối cảnh biến dạng với hiệu ứng mờ ảo hình bầu dục, làn da ấm áp và môi trường xung quanh mát mẻ hơn. Biên đạo cái nhìn hoặc cái ôm của đối tượng trong quỹ đạo và xác định sự quay trở lại góc ban đầu một cách rõ ràng thay vì một vòng quay vô tận.",
    "commonMistakes": [
      "Xoay nền mà không thay đổi góc nhìn, trông giống như một tấm quay chứ không phải là quỹ đạo máy ảnh vật lý.",
      "Thay đổi bán kính trong suốt quá trình di chuyển, khiến đối tượng bị chao đảo về quy mô và làm suy yếu hiệu ứng trục trung tâm.",
      "Hoàn thành một số vòng tròn mà không có hành động tiến triển, biến việc nhấn mạnh cảm xúc thành hiển thị hình ảnh lặp đi lặp lại."
    ]
  },
  {
    "id": "static-shot",
    "name": "Static Shot",
    "definition": "A completely locked-off shot with no camera movement, forcing the composition to do all the work — the deliberate stillness can create contemplation, comedy through staging, or unsettling tension. Yasujiro Ozu built an entire cinematic philosophy around the static shot, his \"pillow shots\" of empty rooms and corridors in \"Tokyo Story\" becoming meditations on impermanence. Wes Anderson's rigorously static, symmetrical compositions in \"The Grand Budapest Hotel\" turn every frame into a diorama. Roy Andersson constructs elaborate single-frame tableaux vivants in \"Songs from the Second Floor,\" and Chantal Akerman's static shots in \"Jeanne Dielman\" transform domestic routine into radical cinema.",
    "category": "camera",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "/img/cinematique/static-shot.webp",
    "videoRef": "/video/cinematique/static-shot.mp4",
    "promptTemplate": "Perfectly static locked-off shot of [Subject], the camera absolutely motionless on a heavy tripod, every element placed with obsessive precision, the stillness of the camera making the frame feel like a living painting, shot on ARRI Alexa with a 40mm Zeiss Master Prime at T5.6 for maximum sharpness edge to edge, Wes Anderson palette, the deadpan humor of perfect order",
    "whenToUse": "Chọn một cảnh tĩnh khi sự tĩnh lặng sẽ khiến người xem nghiên cứu bố cục, thời lượng và hoạt động bên trong khung hình. Nó phù hợp với hài kịch bế tắc, thói quen sinh hoạt, trật tự kiến ​​trúc, sự trầm ngâm và sự căng thẳng được tạo ra bởi sự chờ đợi. Khi không có chuyển động của camera để tạo điểm nhấn, việc chặn và định thời gian sẽ bị lộ ra. Sử dụng nó khi khung có thể phát triển nội bộ; nếu không cảnh quay bị khóa có thể chỉ mang lại cảm giác không hoạt động hơn là có chủ ý.",
    "bestPractices": "Khóa máy ảnh vào chân máy nặng và cấm xoay, nghiêng, thu phóng, trôi hoặc lắc lư ổn định. Sắp xếp mọi đối tượng và hình ảnh với khoảng cách chính xác, chiều dọc mạnh mẽ và đủ độ sâu để chuyển động trong bố cục. Sử dụng độ rõ nét từng góc cạnh và bảng màu được kiểm soát để ghi lại những thay đổi nhỏ. Đối với video, vũ đạo vào, ra, cử chỉ hoặc sự kiện nền trong khi khung hình vẫn được cố định tuyệt đối. Sự căng thẳng thị giác phải đến từ những gì thay đổi bên trong ranh giới.",
    "commonMistakes": [
      "Thêm tính năng đẩy tự động tinh tế hoặc trôi cầm tay, phá vỡ sự tĩnh lặng trang trọng ngay cả khi hầu như không nhìn thấy chuyển động.",
      "Coi máy ảnh bị khóa là sự cho phép bố cục yếu, không để lại đường bên trong, độ sâu hoặc hành động dàn dựng để kiểm tra.",
      "Việc căn giữa mọi chủ thể một cách máy móc khi sự bất đối xứng hoặc áp lực ngoài màn hình sẽ tạo ra lực căng mạnh hơn trong khung hình cố định."
    ]
  },
  {
    "id": "crash-zoom",
    "name": "Crash Zoom",
    "definition": "A sudden, rapid zoom into a subject for dramatic emphasis, often used for comedic punchlines, horror reveals, or martial arts impact moments. The crash zoom is a staple of Hong Kong martial arts cinema, used by directors like Lau Kar-leung and Chang Cheh in Shaw Brothers productions to punctuate kung fu strikes. Quentin Tarantino pays homage to this in \"Kill Bill,\" and Edgar Wright uses crash zooms for comedic shock in his Cornetto trilogy. Sam Raimi made the crash zoom a horror signature — the camera hurtling toward a screaming face in the \"Evil Dead\" films became one of the genre's most recognizable moves.",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Action",
    "image": "/img/cinematique/crash-zoom.webp",
    "videoRef": "/video/cinematique/crash-zoom.mp4",
    "promptTemplate": "Crash zoom snapping from a wide shot to an extreme close-up of [Subject] in half a second, the blur of the rapid zoom creating concentric radial streaks, shot on a vintage Angenieux 25-250mm zoom cranked at maximum speed, 35mm film grain adding grit to the motion blur, Shaw Brothers visual energy channeled through a modern lens",
    "whenToUse": "Sử dụng chế độ thu phóng sự cố để tạo ra tiết lộ, phản ứng, vũ khí, đòn tấn công hoặc sự bất ngờ hài hước bằng sự gây hấn có chủ ý về mặt thị giác. Không giống như thao tác đẩy vào, nó thay đổi khung hình thông qua chuyển động nhanh của ống kính và sẽ có cảm giác đột ngột. Kỹ xảo phù hợp với võ thuật, kinh dị, hành động và hài kịch cách điệu. Lưu nó cho các giọng cứng; những lần bấm máy lặp đi lặp lại sẽ giảm âm lượng từng khoảnh khắc xuống cùng một mức và khiến người xem kiệt sức.",
    "bestPractices": "Bắt đầu với bố cục rộng hoặc trung bình có thể đọc được, sau đó thu phóng đến mức cực gần trong khoảng nửa giây. Giữ mục tiêu đủ chính giữa để hạ cánh mạnh sau một thời gian ngắn có vệt xuyên tâm đồng tâm. Thêm kết cấu phim nhám mà không làm nhòe khung hình cuối cùng. Xác định chính xác yếu tố kích hoạt, chẳng hạn như một cú đánh hoặc cái nhìn bất ngờ, và giữ vững đích đến. Không di chuyển máy ảnh trong không gian; sự thay đổi ống kính là sự kiện cơ học.",
    "commonMistakes": [
      "Đẩy máy ảnh về phía trước một cách vật lý, điều này tạo ra thị sai và chuyển chuyển động thành một cảnh quay nhanh.",
      "Không xác định được chi tiết đích, khiến quá trình thu phóng kết thúc giữa các đối tượng hoặc bị cắt xén không thể đọc được.",
      "Mở rộng độ mờ trên toàn bộ ảnh cận cảnh được giữ, loại bỏ dấu câu sắc nét khiến bức ảnh trở nên hài lòng."
    ]
  },
  {
    "id": "worms-eye-view",
    "name": "Worm's Eye View",
    "definition": "Camera placed at ground level looking straight up, the most extreme low angle, making everything tower above and creating a sense of awe, intimidation, or childlike wonder. Orson Welles was famous for his low-angle work in \"Citizen Kane\" and \"The Trial,\" often requiring sets to be built with ceilings — unusual for the era. Terry Gilliam employs worm's eye views in \"Brazil\" and \"12 Monkeys\" to make bureaucratic architecture oppressive. Denis Villeneuve used ground-level upward shots in \"Arrival\" when the characters first approach the alien ship, capturing the vertigo of encountering something incomprehensibly vast.",
    "category": "camera",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "/img/cinematique/worms-eye-view.webp",
    "videoRef": "/video/cinematique/worms-eye-view.mp4",
    "promptTemplate": "Worm's eye view from ground level looking straight up at [Subject], the perspective so extreme that vertical elements seem to lean inward and threaten to collapse, shot from a camera placed directly on the ground with a 14mm ultra-wide rectilinear lens pointed straight up, the barrel distortion adding to the vertiginous effect, the overwhelming scale from the perspective of the smallest creature",
    "whenToUse": "Chọn chế độ xem mắt của sâu khi máy ảnh phải chiếm vị trí nhỏ nhất có thể bên dưới thứ gì đó to lớn. Nhìn gần như thẳng lên có thể khiến một tòa nhà, sinh vật, phương tiện hoặc con người cảm thấy ngột ngạt, đáng kinh ngạc hoặc kỳ diệu một cách trẻ con. Nó cực đoan hơn một góc thấp thông thường và trừu tượng hóa không gian một cách mạnh mẽ. Sử dụng nó cho các cuộc gặp gỡ với quy mô; tránh nó khi khả năng đọc được khuôn mặt hoặc vị trí địa lý thông thường phải rõ ràng.",
    "bestPractices": "Đặt ống kính trực tiếp xuống đất và hướng gần như thẳng lên trên. Sử dụng phối cảnh thẳng cực rộng để các cấu trúc thẳng đứng hướng vào trong bầu trời trong khi vẫn giữ được nét kiến ​​trúc dễ nhận biết. Bao gồm một tham chiếu cạnh mặt đất nhỏ để chia tỷ lệ và định vị đối tượng phía trên hoặc xung quanh ống kính chứ không chỉ ở phía trước ống kính. Kiểm soát độ méo của thùng thay vì để nó chiếm ưu thế. Trong video, hãy sử dụng chuyển động nghiêng chậm hoặc chuyển động qua đầu để duy trì góc nhìn được căn cứ.",
    "commonMistakes": [
      "Đặt máy ảnh ở độ cao ngang eo để tạo ra góc thấp thông thường mà không có góc nhìn ở cấp độ sinh vật.",
      "Nhắm về phía trước thay vì hướng lên trên, làm mất đi các phương thẳng đứng sụp đổ và sự thống trị từ trên cao là trọng tâm của kỹ thuật này.",
      "Để độ biến dạng cực rộng uốn cong từng đường một cách ngẫu nhiên, biến cơn chóng mặt có kiểm soát thành hiệu ứng mắt cá không thể đọc được."
    ]
  },
  {
    "id": "three-point-lighting",
    "name": "Three-Point Lighting",
    "definition": "The foundational lighting setup using three sources: a key light as the primary source, a fill light to soften shadows, and a backlight to separate the subject from the background. Developed during Hollywood's Golden Age by cinematographers like James Wong Howe and Gregg Toland, three-point lighting became the grammar of classical Hollywood cinema. It defined the glamorous look of stars from Garbo to Monroe and remains the starting point for all narrative lighting. Modern cinematographers like Roger Deakins and Janusz Kamiński build upon and deconstruct this foundation in every film they shoot.",
    "category": "lighting",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/three-point-lighting.webp",
    "promptTemplate": "Classic three-point lighting on [Subject], the key light at 45 degrees creating defined shadow, a soft fill light gently opening the shadows, a warm-toned backlight rimming the edges with a thin golden halo, the balanced interplay sculpting the form into three dimensions, shot on medium format with an 80mm portrait lens at f/2.8, Kodak Portra color science with creamy skin tones and deep velvety blacks",
    "whenToUse": "Sử dụng ánh sáng ba điểm khi bạn cần nền tảng linh hoạt, dễ đọc để chụp chân dung, phỏng vấn, đối thoại, tác phẩm sản phẩm hoặc tường thuật. Phím này thiết lập hướng, điều khiển độ tương phản và đèn nền tách chủ thể khỏi cài đặt. Nó có thể trông bóng bẩy hoặc ấn tượng tùy theo tỷ lệ. Hãy coi nó như một cấu trúc khởi đầu hơn là một công thức bắt buộc; một số cảnh mạnh mẽ hơn với một nguồn động lực.",
    "bestPractices": "Đặt key khoảng 45 độ sang một bên và phía trên đối tượng, tạo ra bóng mô hình rõ ràng. Thêm màu tô mờ hơn, mềm hơn từ phía đối diện để mở ra chi tiết mà không xóa hình dạng. Đặt đèn nền ấm phía sau và phía trên để theo dõi vai và tóc đồng thời tránh hiện tượng lóa ống kính. Mô tả cường độ và màu sắc tương đối của cả ba nguồn. Giữ nền đủ tối hơn để vẫn có thể nhìn thấy sự tách biệt mà không làm cho viền trông như bị dán vào.",
    "commonMistakes": [
      "Làm cho phím và vùng tô sáng đều sáng, giúp làm phẳng bề mặt và loại bỏ phân cấp hướng của thiết lập.",
      "Sử dụng đèn nền mạnh đến mức tạo ra một đường cắt màu trắng quanh tóc và vai.",
      "Liệt kê ba đèn không có vị trí hoặc tỷ lệ, để lại kết quả chiếu sáng tùy ý thay vì có cấu trúc có chủ ý."
    ]
  },
  {
    "id": "key-light",
    "name": "Key Light",
    "definition": "The primary and brightest light source in a scene, whose position, intensity, and quality define the overall mood and establish the dominant direction of light and shadow. Gordon Willis, \"the Prince of Darkness,\" used deliberately underexposed key lights in \"The Godfather\" to create the shadowy world of the Corleone family. Vittorio Storaro sculpted light as pure emotion in \"Apocalypse Now\" and \"Last Tango in Paris.\" The placement and quality of the key light is the single most important creative decision in any lighting setup, shaping everything from film noir's harsh side-key to Lubezki's soft naturalistic sources.",
    "category": "lighting",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/key-light.webp",
    "promptTemplate": "Strong directional key light from a single source illuminating [Subject], the light carving sharp shadows that define every contour, dust motes floating in the visible beam, the single-source authority establishing the entire mood, a Fresnel spotlight quality with defined beam edge, warm tungsten color temperature at 3200K against cool blue ambient shadow",
    "whenToUse": "Xác định ánh sáng chính bất cứ khi nào một nguồn phải thiết lập logic hình ảnh chủ đạo của cảnh. Góc và độ cứng của nó có thể làm cho khuôn mặt trở nên cởi mở, dè dặt, quyến rũ, đe dọa hoặc kiệt sức trước khi ánh sáng phụ làm được bất cứ điều gì. Chìa khóa rõ ràng rất quan trọng trong các cảnh chân dung và tường thuật mà người xem phải hiểu được ánh sáng đến từ đâu. Nó có thể đứng một mình hoặc cố định một thiết lập lớn hơn nhưng không bao giờ có cảm giác mất phương hướng.",
    "bestPractices": "Đặt tên cho phím là nguồn sáng nhất và đặt nó một cách chính xác so với chủ thể, chẳng hạn như góc máy ảnh 45 độ và hơi cao. Mô tả chùm sáng của nó cứng hay mềm, nơi bóng mũi và má rơi xuống và mức độ chiếu sáng giảm nhanh trên khung cảnh. Phím vonfram ấm áp tương phản với bóng xung quanh mát hơn tạo ra sự tách màu dễ đọc. Giữ mọi nguồn thứ cấp đủ mờ để chìa khóa duy trì quyền kiểm soát hình thức và tâm trạng.",
    "commonMistakes": [
      "Gọi nhiều nguồn là chìa khóa, điều này phá hủy hướng thống trị duy nhất cần thiết để điêu khắc khung cảnh một cách mạch lạc.",
      "Chỉ định độ sáng không có góc hoặc chất lượng, khiến bóng mặt và kết cấu vật liệu hoàn toàn không được kiểm soát.",
      "Cho phép ánh sáng xung quanh lấn át phím, làm cho nguồn chính đã nêu không liên quan về mặt trực quan."
    ]
  },
  {
    "id": "high-key-lighting",
    "name": "High-Key Lighting",
    "definition": "A bright, even lighting style with minimal shadows that creates an optimistic, clean, or ethereal atmosphere, common in comedies, commercials, and dream sequences. The classic Hollywood musical relied on high-key lighting — Vincente Minnelli's \"An American in Paris\" and \"The Band Wagon\" glow with uniform brightness. Kubrick used clinical high-key lighting in the space station sequences of \"2001\" to create sterile futurism, and Sofia Coppola bathes \"Marie Antoinette\" in high-key pastel light to capture the candy-colored excess of Versailles. The technique is also fundamental to the visual language of romantic comedies from Nora Ephron to Nancy Meyers.",
    "category": "lighting",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "/img/cinematique/high-key-lighting.webp",
    "promptTemplate": "High-key lighting flooding [Subject] in bright even illumination with barely a shadow to be found, the overall exposure pushed a third of a stop hot to create an airy blown-out feeling, shot on Alexa at 1280 ISO with Cooke S7 glass for gentle halation around the highlights, the dreamy overlit aesthetic of warmth without shadows, optimism without darkness",
    "whenToUse": "Chọn ánh sáng cường độ cao để mang lại sự lạc quan, sạch sẽ, quyến rũ, lãng mạn thoải mái, chủ nghĩa tương lai lâm sàng hoặc thiếu bóng tối như mơ. Nó hoạt động trong hài kịch, quảng cáo, nhạc kịch, công việc làm đẹp và nội thất vô trùng có chủ ý. Khung phải được giữ nguyên hình dạng ngay cả khi có bóng tối thiểu. Cố ý sử dụng độ tương phản thấp; chỉ cần phơi sáng quá mức trong thiết lập thông thường sẽ làm mất đi lớp da, vải và chi tiết sản xuất thay vì tạo ra khả năng kiểm soát độ sáng.",
    "bestPractices": "Bao quanh đối tượng bằng ánh sáng khuếch tán rộng và giữ mức lấp đầy gần với điểm chính để bóng vẫn nhạt và dịu. Nâng mức phơi sáng tổng thể lên một chút đồng thời bảo vệ các điểm nổi bật trên khuôn mặt và vải khỏi bị cắt. Sử dụng nền sáng, quầng sáng nhẹ nhàng, da dạng kem và màu pastel nhẹ nhàng. Duy trì sự tách biệt các cạnh tinh tế thông qua những khác biệt nhỏ về tông màu thay vì vành cứng. Đối với video, hãy duy trì độ sáng ổn định khi chuyển động để chủ thể không vô tình rơi vào vùng tương phản.",
    "commonMistakes": [
      "Độ sáng cao khó hiểu với các điểm sáng bị cháy sáng, xóa đi kết cấu da và bề mặt trắng thay vì kiểm soát độ tương phản.",
      "Loại bỏ mọi dấu vết về hướng, khiến đối tượng trông có vẻ phẳng thay vì được tạo hình mềm mại và đồng đều.",
      "Đặt các thành phần nền tối phía sau chủ thể trái ngược với trường thị giác sáng, có độ tương phản thấp dự kiến."
    ]
  },
  {
    "id": "low-key-lighting",
    "name": "Low-Key Lighting",
    "definition": "A dramatic lighting style dominated by deep shadows and high contrast where only select areas are illuminated, creating mystery, tension, and a noir-like atmosphere. John Alton literally wrote the book — \"Painting with Light\" — and defined low-key noir cinematography in films like \"The Big Combo\" and \"T-Men.\" Gordon Willis pushed low-key to its extreme in \"The Godfather,\" with Marlon Brando's eyes often invisible in shadow. Bradford Young's low-key work in \"Arrival\" and \"Selma\" brought a moody, naturalistic darkness to modern cinema, and Robert Richardson uses low-key lighting in Tarantino's \"The Hateful Eight\" to make a single-room Western feel like a horror film.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "/img/cinematique/low-key-lighting.webp",
    "promptTemplate": "Low-key lighting on [Subject] with deep impenetrable shadows claiming eighty percent of the frame, only a single source illuminating a small area, the contrast ratio pushed to 8:1 between highlights and shadows, shot on Kodak Double-X black and white stock with a 40mm Baltar lens, the inky blacks and silver highlights of classic film noir, John Alton-level mastery of darkness as an active compositional element",
    "whenToUse": "Sử dụng ánh sáng yếu khi bóng tối chiếm giữ khung hình như một lực tác động mạnh mẽ. Nó phù hợp với những điều bí ẩn, tội phạm, kinh dị, bí mật, sự mơ hồ về đạo đức và những cảnh thân mật mà chỉ những thông tin được chọn mới được tiết lộ. Độ tương phản mạnh có thể hướng sự chú ý với độ chính xác vượt trội. Mục tiêu không chỉ đơn thuần là làm cho mọi thứ trở nên mờ nhạt; giữ lại cấu trúc đánh dấu dễ đọc để khuôn mặt, vật thể và hình bóng xuất hiện chính xác ở nơi câu chuyện cần chúng.",
    "bestPractices": "Để khoảng 80% khung hình rơi vào bóng tối sâu và gán một nguồn được kiểm soát cho khuôn mặt, bàn tay hoặc vật thể chính. Đẩy độ tương phản lên tương quan 8:1 trong khi vẫn giữ được kết cấu ở những điểm nổi bật đã chọn và cho phép các khu vực khác biến mất. Sử dụng màu đen như mực, màu bạc hoặc điểm sáng ấm áp và màu nền âm bản để ngăn hiện tượng tràn ra môi trường xung quanh. Giữ cho chùm tia có động lực và có hình dạng hẹp. Đối với chuyển động, hãy đảm bảo đối tượng đi qua các hòn đảo ánh sáng theo kế hoạch.",
    "commonMistakes": [
      "Thiếu sáng một cách đồng đều toàn bộ hình ảnh, điều này tạo ra bóng tối đục mà không có cấu trúc vùng sáng chọn lọc ở mức thấp yêu cầu.",
      "Mở bóng với độ lấp đầy quá mức, làm yếu đi sự bí ẩn và biến thiết lập thành ánh sáng cân bằng thông thường.",
      "Loại bỏ mọi vùng màu đen giống hệt nhau, không để lại sự tách biệt giữa chủ thể, tủ quần áo và nền ở những nơi dễ đọc."
    ]
  },
  {
    "id": "chiaroscuro",
    "name": "Chiaroscuro",
    "definition": "An extreme contrast between light and dark, inspired by Renaissance painting, creating deeply sculpted, painterly images with rich shadows and selective illumination. Directly descended from Caravaggio's revolutionary use of tenebrism in paintings like \"The Calling of Saint Matthew,\" chiaroscuro entered cinema through German Expressionism and was perfected by Gordon Willis in \"The Godfather\" — his overhead toplight leaving Brando's eye sockets in impenetrable shadow became one of the most imitated looks in film history. Vittorio Storaro brought painterly chiaroscuro to \"Apocalypse Now,\" and Barry Jenkins' cinematographer James Laxton uses it to sculpt Black skin with luminous beauty in \"Moonlight.\"",
    "category": "lighting",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "/img/cinematique/chiaroscuro.webp",
    "promptTemplate": "Chiaroscuro lighting on [Subject] with a single candle or flame as the only source, warm amber light painting face and hands while everything beyond arm's reach vanishes into absolute blackness, the contrast ratio approaching infinity, shot to emulate oil painting with a fast 50mm lens wide open, the Caravaggio-meets-Gordon Willis treatment of light as a moral force that reveals and conceals in equal measure",
    "whenToUse": "Chọn chiaroscuro khi ánh sáng và bóng tối mang lại cảm giác tượng trưng cũng như mang tính mô tả. Một khuôn mặt hiện ra từ bóng tối có thể thể hiện những động cơ khác nhau, bí mật, sức nặng tinh thần, nguy hiểm hoặc sự mặc khải. Sự tương phản mang tính hội họa có tác dụng đối với những bức chân dung thân mật, nội thất lịch sử, tội ác và kịch trang trọng. Nó đòi hỏi sự kiểm soát có chọn lọc: nếu mọi bề mặt đều nhận được ánh sáng ấn tượng, khung hình sẽ mất đi độ căng giữa những gì được phơi bày và những gì bị ẩn đi.",
    "bestPractices": "Sử dụng một ngọn nến, ngọn lửa hoặc nguồn ấm hẹp để vẽ khuôn mặt và bàn tay của đối tượng trong khi mọi thứ ngoài tầm với ngay lập tức chuyển sang màu đen tuyệt đối. Định hình ánh sáng trên các mặt phẳng thay vì chiếu sáng toàn bộ cơ thể. Hãy để một mắt hoặc một bên khuôn mặt biến mất nếu ý tưởng cảm xúc ủng hộ việc che giấu. Bảo quản sự chuyển màu hổ phách phong phú trên da và vải sáng. Giữ các nguồn thứ cấp vắng mặt hoặc cực kỳ yếu để bóng tối vẫn là một khối cấu thành.",
    "commonMistakes": [
      "Chiếu sáng nền để thu hút sự chú ý về mặt thị giác, giảm trường màu đen mang lại sức mạnh hội họa cho ánh sáng có chọn lọc.",
      "Sử dụng ánh sáng phân chia bằng nhau mà không có sự chuyển tông màu, tạo ra một bức chân dung nửa sáng đơn giản thay vì chiaroscuro điêu khắc.",
      "Thêm một số nguồn màu làm phân mảnh sự rõ ràng về mặt đạo đức của một mối quan hệ chủ đạo giữa ánh sáng và bóng tối."
    ]
  },
  {
    "id": "rembrandt-lighting",
    "name": "Rembrandt Lighting",
    "definition": "Named after the Dutch painter — light positioned to create a small triangle of light on the shadow side of the face, a classic portrait technique conveying depth and character. Rembrandt van Rijn developed this lighting naturally in his self-portraits, and Hollywood cinematographers adopted it as the gold standard for dramatic portraiture. Sven Nykvist, Ingmar Bergman's longtime cinematographer, used Rembrandt lighting extensively in \"Fanny and Alexander\" and \"Cries and Whispers.\" Conrad Hall employed it throughout \"Road to Perdition,\" and it remains the go-to lighting pattern for dramatic headshots and interview setups worldwide.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/rembrandt-lighting.webp",
    "promptTemplate": "Rembrandt lighting portrait of [Subject], the key light positioned high and at 45 degrees creating the signature triangle of light on the shadow-side cheek, warm amber tones on the illuminated side transitioning to rich umber shadow on the other, shot on a 105mm portrait lens at f/2, the painterly quality that made Rembrandt's work immortal translated to photographic light",
    "whenToUse": "Sử dụng ánh sáng Rembrandt khi bức chân dung cần có chiều sâu, sự kiềm chế và sức nặng tâm lý. Tam giác ánh sáng nhỏ ở má bên bóng giúp khuôn mặt dễ đọc trong khi vẫn giữ được độ tương phản, giúp mẫu này hữu ích khi chụp chân dung nhân vật, cuộc thẩm vấn, cảnh thời kỳ và cận cảnh thân mật đầy kịch tính.",
    "bestPractices": "Đặt tên cho mẫu, sau đó mô tả cơ chế: một đèn chính chiếu sáng khoảng 45 độ sang một bên và cao hơn mắt, bóng mũi nối về phía má và một hình tam giác ngược nhỏ bên dưới phần bóng của mắt. Kiểm soát điền riêng biệt. Nếu không có những tín hiệu vật lý đó, người mẫu thường trả về ánh sáng phân chia chung chung hoặc một bức chân dung mơ hồ “có tính họa sĩ”.",
    "commonMistakes": [
      "Gọi bất kỳ khuôn mặt nửa sáng nào là ánh sáng Rembrandt mà không có hình tam giác xác định trên má bên bóng.",
      "Thêm một số đèn phím có cường độ tương đương để xóa mô hình định hướng.",
      "Sử dụng “Rembrandt”, “ánh sáng làm đẹp dịu nhẹ”, “ánh sáng phẳng” và “chiếu sáng cao” cùng nhau mà không giải quyết được mâu thuẫn."
    ]
  },
  {
    "id": "silhouette",
    "name": "Silhouette",
    "definition": "Subject appears as a dark shape against a bright background, with all surface detail eliminated, reducing characters to pure form and creating iconic, mythic, or anonymous images. David Lean created one of cinema's most recognizable silhouettes with Peter O'Toole against the desert sun in \"Lawrence of Arabia.\" Steven Spielberg's E.T. bicycle silhouette against the moon became one of the most iconic images in film history. Terrence Malick uses human silhouettes against twilight skies throughout \"The Thin Red Line\" and \"Days of Heaven\" to reduce characters to archetypal figures against an indifferent natural world.",
    "category": "lighting",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/silhouette.webp",
    "promptTemplate": "[Subject] reduced to a pure dark silhouette against an intensely bright backlight source, all surface detail eliminated leaving only iconic form and outline, strong rim light tracing edges, high contrast, Kodak Double-X black and white stock",
    "whenToUse": "Sử dụng hình bóng khi danh tính phải nhường chỗ cho hình dạng, cử chỉ hoặc nguyên mẫu. Nó có thể khiến một nhân vật trở nên huyền thoại, ẩn danh, lãng mạn, đầy đe dọa hoặc nhỏ bé trước một thế giới tươi sáng. Phác thảo phải truyền đạt hành động vì chi tiết bên trong biến mất. Chọn hồ sơ đặc biệt và các chi tách biệt. Tránh bóng trong những khoảnh khắc phụ thuộc vào nét mặt, kết cấu trang phục hoặc thông tin tinh tế bên trong đối tượng.",
    "bestPractices": "Đặt nguồn sáng mạnh nhất ngay phía sau đối tượng và phơi sáng bầu trời, ô cửa, mặt trăng hoặc màn hình sáng. Giảm hình xuống gần như đen mà không nhìn thấy được chi tiết khuôn mặt hoặc bề mặt. Tách riêng cánh tay, chân, giá đỡ và hình dáng để đường viền được đọc ngay lập tức, sau đó chỉ thêm một đường viền mỏng nếu cần. Giữ nền đơn giản và sáng. Trong video, hãy biên đạo chuyển động theo chiều ngang để giữ nguyên hình bóng thay vì hợp nhất các bộ phận cơ thể lại với nhau.",
    "commonMistakes": [
      "Nâng chi tiết bóng bên trong hình, làm yếu tính năng giảm đồ họa khiến hình bóng có thể được nhận ra ngay lập tức.",
      "Các chi và đạo cụ chồng lên nhau, tạo ra một khối tối không thể đọc được thay vì đường nét biểu cảm.",
      "Sử dụng nền sáng lộn xộn có hình dạng cạnh tranh với cạnh của đối tượng và làm mất đi độ rõ nét của hình ảnh."
    ]
  },
  {
    "id": "golden-hour",
    "name": "Golden Hour",
    "definition": "The warm, soft, directional light that occurs shortly after sunrise or before sunset, casting long shadows and bathing everything in a warm amber glow that flatters skin and landscapes. Terrence Malick is the supreme poet of golden hour — \"Days of Heaven,\" shot almost entirely in magic hour by Néstor Almendros and Haskell Wexler, remains the gold standard. Emmanuel Lubezki captured breathtaking golden hour light in \"The Revenant\" and \"The New World\" using only natural illumination. Ridley Scott's golden hour battle sequences in \"Gladiator\" lend warmth to violence, and Sofia Coppola bathes \"The Virgin Suicides\" in nostalgic golden light.",
    "category": "lighting",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "/img/cinematique/golden-hour.webp",
    "promptTemplate": "Golden hour light thirty minutes before sunset bathing [Subject] in warm amber backlight, impossibly long shadows, lens flares streaking horizontally, the entire world turned to liquid gold and honey, shot on Kodak Vision3 50D for maximum color saturation in daylight, an 85mm lens compressing the background into a dense golden tapestry, the fleeting magic that Malick and Lubezki lived for",
    "whenToUse": "Chọn giờ vàng khi sự ấm áp, dịu dàng, nỗi nhớ, sự tự do hoặc sự hùng vĩ của thiên nhiên sẽ định hình nên khung cảnh. Mặt trời lặn làm phẳng các khuôn mặt, trải dài bóng tối và mang lại màu sắc đa chiều cho phong cảnh. Nó phù hợp với những đoạn văn lãng mạn, những cuộc hành trình, ký ức và bạo lực được thể hiện trái ngược về mặt thị giác bởi ánh sáng đẹp đẽ. Cửa sổ có tính chất cụ thể, vì vậy hãy giữ hướng mặt trời nhất quán trong các bức ảnh và tránh trộn lẫn hướng đó với bầu trời giữa trưa cao.",
    "bestPractices": "Đặt bối cảnh khoảng ba mươi phút trước khi mặt trời lặn hoặc ngay sau khi mặt trời mọc, với mặt trời lặn ở phía sau hoặc bên cạnh đối tượng. Sử dụng đèn nền màu hổ phách ấm áp, bóng định hướng dài, sương mù nhẹ và hạn chế ánh sáng ngang. Để phối cảnh 85mm nén nền phát sáng trong khi vẫn giữ được các cạnh da có thể đọc được. Giữ bầu trời và phía bóng mát hơn để tạo độ tương phản. Đối với video, hãy duy trì một vị trí mặt trời và để chuyển động đi qua các trục ổn định thay vì thay đổi thời gian ở giữa cảnh quay.",
    "commonMistakes": [
      "Ghép nối bóng hoàng hôn dài với mặt trời đặt trên cao, tạo ra hình dạng ánh sáng trái ngược nhau.",
      "Làm ngập mọi bề mặt với màu cam đồng nhất, làm mất đi những bóng mát hơn khiến ánh sáng ấm áp có cảm giác chân thực.",
      "Thêm ánh sáng lóa của ống kính trên các khuôn mặt và các chi tiết tiêu điểm, biến hơi ấm của không khí thành vật cản quang học."
    ]
  },
  {
    "id": "blue-hour",
    "name": "Blue Hour",
    "definition": "The cool, diffused light just before sunrise or after sunset when the sky turns deep blue, creating a melancholic, contemplative, or mysterious atmosphere. Michael Mann is the master of blue hour photography, using the transitional twilight extensively in \"Heat,\" \"Collateral,\" and \"Miami Vice\" to create his signature cool urban melancholy. Janusz Kamiński shot the D-Day sequence in \"Saving Private Ryan\" during overcast blue-hour conditions for authenticity, and Wong Kar-wai's \"Fallen Angels\" uses Hong Kong's blue hour as an emotional blanket over its lonely characters.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Nostalgic",
    "image": "/img/cinematique/blue-hour.webp",
    "promptTemplate": "Blue hour twilight twenty minutes after sunset enveloping [Subject], the sky a luminous deep cobalt blue glowing from within, warm amber artificial light sources contrasting with the pervasive blue atmosphere, shot on Alexa at high ISO with Cooke S4 glass rendering practical lights as soft warm glows, the contemplative melancholy of Michael Mann's visual language",
    "whenToUse": "Sử dụng giờ xanh lam cho những cảnh chuyển tiếp cần sự yên tĩnh mát mẻ, sự cô đơn, sự mong chờ hoặc sự bí ẩn mà không có bóng tối hoàn toàn. Bầu trời sáng giúp nhìn rõ các chi tiết bên ngoài trong khi cửa sổ, đèn đường và xe cộ bắt đầu tỏa sáng ấm áp. Nó phù hợp với những chuyến đi đến thành phố, những chuyến khởi hành, những bức chân dung phản chiếu và sự hồi hộp yên tĩnh. Giữ nó khác biệt với ban đêm bằng cách duy trì ánh sáng xung quanh màu coban và khỏi hoàng hôn bằng cách loại bỏ ánh nắng vàng trực tiếp.",
    "bestPractices": "Đặt thời điểm khoảng 20 phút sau khi mặt trời lặn hoặc trước khi mặt trời mọc, khi bầu trời có màu xanh coban đậm nhưng vẫn sáng. Hãy để ánh sáng xung quanh mát mẻ bao bọc các tòa nhà và khuôn mặt trong khi các vật dụng màu hổ phách ấm áp làm nổi bật các cửa sổ, bảng hiệu hoặc xe cộ. Sử dụng độ nhạy cao với quầng sáng mềm xung quanh các nguồn đó, bảo toàn chi tiết cả bầu trời và bóng tối. Đối với video, hãy duy trì trạng thái chạng vạng hẹp một cách nhất quán; đừng để bầu trời nhấp nháy giữa ánh sáng ban ngày, màu cam hoàng hôn và đêm đen.",
    "commonMistakes": [
      "Làm cho bầu trời trở nên đen hoàn toàn, biến khung cảnh thành màn đêm và loại bỏ quá trình chuyển đổi ánh sáng của giờ xanh lam.",
      "Thêm ánh sáng mặt trời trực tiếp màu cam mặc dù mặt trời đã lặn xuống dưới đường chân trời trong thiết lập dự định.",
      "Tô màu da và mọi đồ vật bằng một màu xanh lam đồng nhất, thay vì cân bằng bầu không khí mát mẻ bằng các nguồn thực tế ấm áp có chọn lọc."
    ]
  },
  {
    "id": "practical-lighting",
    "name": "Practical Lighting",
    "definition": "Using visible light sources within the scene — lamps, candles, neon signs, TV screens — as the actual illumination, creating naturalistic, motivated lighting with rich atmosphere. Stanley Kubrick famously lit \"Barry Lyndon\" using only candles and natural window light, requiring specially modified NASA lenses. Wong Kar-wai and Christopher Doyle use neon signs and fluorescent tubes as practical sources in \"Chungking Express\" and \"In the Mood for Love,\" turning Hong Kong's light pollution into visual poetry. Roger Deakins uses practicals masterfully in \"Blade Runner 2049,\" letting in-scene holographic advertisements and industrial lights do the work of sculpting the frame.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/practical-lighting.webp",
    "promptTemplate": "Practical lighting on [Subject] illuminated only by visible sources within the frame, each practical creating its own color world, the interplay of multiple color temperatures producing a rich layered chromatic atmosphere, no hidden movie lights, shot wide open at T1.3 on a Zeiss Super Speed to drink in every photon, the visual language of Christopher Doyle",
    "whenToUse": "Chọn ánh sáng thực tế khi các nguồn sáng phải thuộc về thế giới của cảnh một cách rõ ràng. Đèn, nến, tivi, đèn huỳnh quang và bảng hiệu đèn neon có thể thúc đẩy màu sắc, phương hướng và bầu không khí đồng thời tạo cảm giác sống động cho nội thất. Nó phù hợp với chủ nghĩa tự nhiên và sự cách điệu. Các thiết bị cố định có thể nhìn thấy được phải thực sự ảnh hưởng đến các bề mặt gần đó; bóng đèn trang trí không phát ra ánh sáng tương ứng sẽ phá vỡ ảo ảnh ngay lập tức.",
    "bestPractices": "Đặt tên cho mọi nguồn có thể nhìn thấy và gán cho nó một nhóm chiếu sáng cục bộ, nhiệt độ màu, độ suy giảm và các bề mặt bị ảnh hưởng. Một chiếc đèn ấm áp có thể định hình một khuôn mặt trong khi một chiếc tivi mát mẻ tô màu cho mặt tối và đèn neon ở xa tạo thêm một lớp khác. Giữ độ sáng hợp lý về mặt vật lý và để các khu vực giữa các nguồn vẫn tối hơn. Sử dụng giao diện ống kính nhanh để giữ lại kết cấu trong điều kiện ánh sáng yếu. Đối với video, hãy giữ nguyên vị trí của từng thiết bị và ảnh hưởng màu sắc khi các nhân vật di chuyển trong phòng.",
    "commonMistakes": [
      "Hiển thị những chiếc đèn có thể nhìn thấy nhưng không tạo ra ánh sáng hoặc bóng tối phù hợp, khiến chúng trông giống như những đạo cụ trang trí.",
      "Cung cấp độ sáng và phạm vi tiếp cận bằng nhau trong thực tế, làm phẳng các hồ bơi nhiều lớp tạo ra bầu không khí đáng tin cậy.",
      "Thêm đèn làm đẹp phía trước không giải thích được mâu thuẫn với tuyên bố rằng các nguồn có thể nhìn thấy trong cảnh cung cấp ánh sáng."
    ]
  },
  {
    "id": "hard-light",
    "name": "Hard Light",
    "definition": "Light from a small or distant source that creates sharp, well-defined shadows, adding texture, drama, and graphic quality that can be harsh and unflattering or strikingly bold. Film noir cinematographers like John Alton and Nicholas Musuraca built entire visual worlds from hard light, creating the razor-sharp shadows of venetian blinds and fedora brims. David Fincher and Darius Khondji used hard light sources in \"Se7en\" to create the grimy, punishing atmosphere of a city drowning in sin. The direct sunlight in Sergio Leone's Westerns functions as nature's hard light, carving faces into dramatic relief.",
    "category": "lighting",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/hard-light.webp",
    "promptTemplate": "Hard light from a bare overhead source casting razor-sharp shadows on [Subject], defined shadow edges so crisp they look cut with a knife, every surface texture amplified by the raking illumination, shot on Kodak Double-X black and white stock for maximum contrast, a 35mm Zeiss Planar lens, the graphic severity of film noir where light itself becomes an instrument of pressure",
    "whenToUse": "Sử dụng ánh sáng mạnh khi bóng sắc nét và kết cấu lộ ra ngoài sẽ tạo ra áp lực, sức nóng, mức độ nghiêm trọng hoặc phong cách đồ họa. Một nguồn nhỏ có thể chạm khắc các khuôn mặt, chiếu các mẫu cửa sổ, xác định bụi hoặc khiến kiến ​​trúc có cảm giác không thể tha thứ. Nó phù hợp với phim noir, phương Tây, thẩm vấn và ánh sáng ban ngày khắc nghiệt. Bởi vì nó bộc lộ mọi bất thường trên bề mặt, hãy chọn nó một cách có chủ ý cho làn da và sản phẩm thay vì cho rằng độ tương phản mạnh hơn luôn trông mang tính điện ảnh hơn.",
    "bestPractices": "Đặt một nguồn trần nhỏ hoặc ở xa ở một góc xác định và yêu cầu các cạnh bóng có hình dạng rõ ràng, sắc nét. Để ánh sáng quét làm lộ ra các lỗ chân lông, vải, bụi, tường và kim loại trong khi vẫn giữ được độ tương phản mạnh. Một bảng màu đơn sắc hoặc hạn chế có thể làm cho hình học trở nên mạnh mẽ hơn. Đặt tên cho bất kỳ hình dạng được chiếu nào, chẳng hạn như rèm và căn chỉnh nó với nguồn. Tránh khuếch tán rộng, lấp đầy xung quanh hoặc một số hướng cạnh tranh có thể làm mềm kết quả đồ họa.",
    "commonMistakes": [
      "Thêm sự khuếch tán lớn vào nguồn, làm mềm các cạnh cho đến khi chất lượng bóng cứng xác định biến mất.",
      "Sử dụng nhiều ánh sáng cứng từ các góc không liên quan, tạo ra các bóng chéo làm cho cảnh trở nên thiếu mạch lạc về mặt thị giác.",
      "Bỏ qua cách ánh sáng quét làm lộ ra các khuyết điểm trên da và bề mặt, tạo ra các chi tiết thô ở những nơi đối tượng cần hạn chế."
    ]
  },
  {
    "id": "soft-light",
    "name": "Soft Light",
    "definition": "Diffused light from a large source that wraps around the subject, creating gentle shadow transitions that are flattering for skin and create a dreamy or intimate quality. Sven Nykvist, Ingmar Bergman's cinematographer, was legendary for his soft, natural light in films like \"Cries and Whispers\" and \"Fanny and Alexander,\" often bouncing light off white walls and ceilings. Emmanuel Lubezki creates ethereal soft light in Terrence Malick's \"The Tree of Life\" using large diffusion frames and natural overcast skies. Robert Richardson's soft light work in \"The Aviator\" recreated the luminous quality of Golden Age Hollywood glamour photography.",
    "category": "lighting",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "/img/cinematique/soft-light.webp",
    "promptTemplate": "Soft diffused light wrapping around [Subject] with barely perceptible shadow transitions, a massive window or diffusion source bending light gently around face and shoulders, skin rendered with luminous porcelain quality, shot on Cooke S7 lenses known for gentle rendering and subtle halation on highlights, Fujifilm Eterna color science with delicate pastel tonality, the Vermeer-like quality of undirected daylight",
    "whenToUse": "Chọn ánh sáng dịu khi khuôn mặt và chất liệu cần tạo hình nhẹ nhàng, thân mật, lãng mạn hoặc tĩnh lặng tự nhiên trong u ám. Một nguồn lớn bao quanh các đối tượng địa lý và tạo ra các chuyển tiếp bóng dần dần đẹp mắt mà không loại bỏ bất kỳ hình dạng nào. Nó phù hợp với những bức chân dung cận cảnh, cảnh gia đình, vẻ đẹp và kịch tính phản chiếu. Mềm mại không có nghĩa là phẳng: giữ nguyên hướng và độ tương phản được kiểm soát để đối tượng vẫn giữ được chiều và nguồn có cảm giác được định vị.",
    "bestPractices": "Mô tả một cửa sổ rất lớn, nguồn phản xạ hoặc khung khuếch tán gần đối tượng, được đặt hơi lệch sang một bên. Yêu cầu ánh sáng bao quanh má và vai với những vùng sáng rộng và khó có thể nhận thấy được viền bóng. Giữ cho làn da sáng, màu pastel tinh tế và làm nổi bật quầng sáng một cách tinh tế. Sử dụng màu tô âm ở phía xa nếu cần thêm hình dạng. Tránh các đường viền cứng và đèn chiếu sáng nhỏ có thể mâu thuẫn với kích thước rõ ràng của nguồn rộng.",
    "commonMistakes": [
      "Đổ đầy cả hai mặt cho đến khi mặt mất hướng, âm lượng và bất kỳ cảm giác nào về nguồn định vị.",
      "Thêm bóng mũi hoặc quai hàm sắc nét trái ngược với độ khuếch tán rộng được yêu cầu và chuyển tiếp nhẹ nhàng.",
      "Làm mịn kết cấu trên da nhựa, nhầm lẫn ánh sáng mềm mại với quá trình xử lý hậu kỳ thẩm mỹ mạnh mẽ."
    ]
  },
  {
    "id": "uplighting",
    "name": "Uplighting",
    "definition": "Light cast upward from below the subject, unnatural to human experience, creating eerie, sinister, or supernatural effects — the classic \"flashlight under the chin\" horror look. James Whale used uplighting to terrifying effect in \"Frankenstein\" (1931) and \"Bride of Frankenstein,\" casting Boris Karloff's face into monstrous relief. F.W. Murnau's \"Nosferatu\" employed underlighting to transform Max Schreck into a figure of pure dread. Modern horror directors like Ari Aster use subtle uplighting in \"Hereditary\" during the séance sequences, and Jordan Peele employs it in \"Us\" when the tethered versions of characters emerge from below.",
    "category": "lighting",
    "difficulty": "Basic",
    "mood": "Horror",
    "image": "/img/cinematique/uplighting.webp",
    "promptTemplate": "Uplighting from below illuminating [Subject], the unnatural upward-casting light reversing every shadow humans instinctively expect, shadows falling upward from the brow ridge creating deep black pools where the eyes should be, orange flickering firelight causing the shadows to dance, shot on a 50mm lens with the warm 2000K color temperature of open flame, the deep biological wrongness of light coming from below",
    "whenToUse": "Sử dụng ánh sáng ngược khi ánh sáng có vẻ sai theo bản năng. Một nguồn bên dưới khuôn mặt đảo ngược các hình bóng quen thuộc, biến các đặc điểm bình thường trở nên nham hiểm, siêu nhiên, sân khấu hoặc ma quái trẻ con. Nó phù hợp với thể loại kinh dị, ảo thuật, đe dọa bằng lửa và các nhân vật xuất hiện từ bên dưới không gian. Giữ động lực rõ ràng hoặc hợp lý. Việc chiếu sáng liên tục bên ngoài những bối cảnh đó có thể tạo cảm giác khó chịu và làm phẳng cảnh thành một tín hiệu thể loại duy nhất.",
    "bestPractices": "Đặt nguồn chính bên dưới cằm của đối tượng hoặc bên dưới khung và hướng nó lên trên. Bóng sẽ lan từ trán, mũi và xương gò má, với hốc mắt trở thành vực tối phía trên mặt phẳng được chiếu sáng. Sử dụng ánh lửa nhấp nháy ấm áp khoảng 2000K khi ngọn lửa thúc đẩy hiệu ứng hoặc nguồn lạnh hơn để tạo cảm giác sợ hãi không tự nhiên. Giữ phần lấp đầy ở mức tối thiểu để hướng bóng bình thường không quay trở lại. Trong video, hãy thay đổi độ nhấp nháy một cách tinh tế mà không thay đổi vị trí nguồn.",
    "commonMistakes": [
      "Thêm phím trên cao mạnh hơn, giúp khôi phục bóng mặt thông thường và hủy bỏ sự đảo ngược đáng lo ngại.",
      "Chiếu sáng khuôn mặt một cách đồng đều từ bên dưới, thiếu các bóng đổ sâu hướng lên trên khiến cho thiết lập trở nên kỳ lạ về mặt sinh học.",
      "Sử dụng ánh sáng ngược trong một cảnh đối thoại trung tính mà không có động lực, khiến tông màu hình ảnh vô tình có cảm giác sân khấu."
    ]
  },
  {
    "id": "side-lighting",
    "name": "Side Lighting",
    "definition": "Light striking the subject from a 90-degree angle, illuminating one half while leaving the other in shadow, splitting the face or figure to create strong dimensionality and visual tension. Vittorio Storaro used dramatic side lighting throughout \"Apocalypse Now\" to bisect characters between light and darkness, mirroring the moral duality at the film's core. Roger Deakins employs precise side lighting in \"Prisoners\" and \"Sicario\" to create sculptural depth. The technique is central to Conrad Hall's Oscar-winning cinematography in \"American Beauty,\" where side light from venetian blinds creates the film's signature visual motif.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "/img/cinematique/side-lighting.webp",
    "promptTemplate": "Side lighting from a single source striking [Subject] at exactly 90 degrees, one half brilliantly illuminated while the other half vanishes into complete shadow creating a perfect vertical division, every texture on the lit side rendered in crystalline detail while the shadow side reveals nothing, shot on large format with an 80mm lens, the extreme dimensionality of single-source side light, the duality made visible",
    "whenToUse": "Sử dụng ánh sáng bên khi khuôn mặt hoặc hình dáng cần có chiều sâu mạnh mẽ, căng thẳng về mặt đạo đức hoặc sự phân chia rõ ràng giữa các trạng thái cạnh tranh. Nó phù hợp với những cuộc đối đầu, những bức chân dung bí mật và những khoảnh khắc mà một mặt của nhân vật vẫn không thể đọc được. Kỹ thuật này cũng giúp các đối tượng có kết cấu trở nên nhẹ nhõm hơn vì ánh sáng truyền qua bề mặt thay vì làm phẳng nó. Hãy tránh nó khi cảnh cần sự cởi mở, mềm mại hoặc cách diễn đạt dễ đọc đều.",
    "bestPractices": "Đặt một nguồn chính xác 90 độ so với chủ thể. Giữ cho sự phân chia đối diện với máy ảnh rõ ràng: một nửa nhận được ánh sáng rõ nét trong khi nửa đối diện chìm trong bóng tối sâu. Mô tả mặt phẳng khuôn mặt, cạnh vật thể hoặc đường viền cơ thể nào bắt ánh sáng và bảo vệ chi tiết ở phía đó. Giữ màu tô ở mức tối thiểu để phần phân chia vẫn giữ nguyên hình ảnh. Đối với video, hãy giữ vị trí nguồn và chủ thể nhất quán khi chúng di chuyển hoặc để sự phân chia có chủ ý dịch chuyển trên khuôn mặt.",
    "commonMistakes": [
      "Việc thêm màu tô phía trước cho đến khi cả hai mặt đều có thể đọc được như nhau, giúp loại bỏ sự căng thẳng và sự phân chia mang tính điêu khắc mà nhu cầu thiết lập cần có.",
      "Đặt nguồn quá xa về phía trước, biến kết quả thành ánh sáng chân dung ba phần tư thông thường thay vì ánh sáng bên thực sự.",
      "Để lại phần được chiếu sáng không có nét đặc biệt hoặc bị cắt bớt, do đó khung hình sẽ mất đi kết cấu vốn mang chi tiết về chiều của nó."
    ]
  },
  {
    "id": "lens-flare",
    "name": "Lens Flare",
    "definition": "Light scattering through lens elements when a bright source hits the glass — once considered a flaw, now deliberately used to add energy, realism, or a dreamy sci-fi quality. J.J. Abrams made lens flare his polarizing signature, filling \"Star Trek\" (2009) with so many anamorphic flares that the technique became a meme. Before that, Janusz Kamiński used flares expressively in \"Saving Private Ryan\" and \"Minority Report\" as a visual language for memory and futurity. Michael Bay embraces flares for action energy, while cinematographer Hoyte van Hoytema uses controlled flares in Christopher Nolan's \"Interstellar\" to suggest cosmic light bleeding into human vision.",
    "category": "lighting",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/lens-flare.webp",
    "promptTemplate": "Dramatic lens flare across [Subject], horizontal anamorphic flare streaks in cyan and magenta stretching across the entire frame, secondary ghost flares bouncing between lens elements in geometric chains, shot on vintage anamorphic Panavision C-series lenses known for their aggressive but beautiful flare characteristics, the warm amber of sunrise fighting through cool blue coating artifacts",
    "whenToUse": "Chọn hiệu ứng lóa của ống kính khi nguồn sáng có cảm giác hiện diện thực tế bên trong hệ thống quang học thay vì chỉ chiếu sáng trường quay. Nó có thể tiếp thêm sinh lực cho hành động, khiến ánh sáng mặt trời có cảm giác ngay lập tức hoặc đẩy cảnh quay trở thành khoa học viễn tưởng mộng mơ. Sử dụng nó như một sự kiện gắn liền với góc máy và vị trí nguồn chứ không phải để trang trí bề mặt. Kỹ thuật này hoạt động hiệu quả nhất khi ngọn lửa tăng cường sức nóng, quy mô, trí nhớ, ánh sáng chói hoặc một khoảnh khắc thị giác quá tải.",
    "bestPractices": "Đặt nguồn sáng ở rìa khung hình hoặc hướng về phía ống kính, sau đó xác định đường đi của tia sáng trên ảnh. Chỉ định một vệt màu nằm ngang, một chuỗi bóng ma hình học bị hạn chế và nguồn ấm áp chống lại các tạo tác lớp phủ mát hơn. Giữ cho khuôn mặt hoặc hành động chính có thể đọc được bên dưới hiệu ứng. Đối với video, làm cho tia sáng phản ứng với chuyển động của camera và biến mất khi nguồn bị chặn; nó sẽ trượt, nở ra và co lại khi thay đổi căn chỉnh thay vì vẫn dán tại chỗ.",
    "commonMistakes": [
      "Bao phủ mọi khung hình bằng các hiện vật ánh sáng lóa giống hệt nhau, khiến hiệu ứng có cảm giác được tổng hợp chứ không phải do nguồn sáng chuyển động gây ra.",
      "Để các vệt sáng xuyên qua mắt đối tượng hoặc hành động thiết yếu mà không có lý do tường thuật, sẽ phá hủy sự rõ ràng ở tiêu điểm.",
      "Trộn một số hình dạng và màu sắc ánh sáng không liên quan cho đến khi quang học dường như không còn thuộc về một thấu kính mạch lạc."
    ]
  },
  {
    "id": "fill-light",
    "name": "Fill Light",
    "definition": "A secondary light used to soften or fill in shadows created by the key light, controlling the contrast ratio of the scene — more fill means softer, less fill means more dramatic. The fill light ratio is one of the most consequential creative decisions in cinematography. Gordon Willis deliberately withheld fill in \"The Godfather,\" letting shadows go black, while Robert Richardson uses generous fill in Scorsese's \"Hugo\" to create a warm, inviting visual world. Roger Deakins is known for using minimal, precisely placed fill — often just a white card or bounce — to retain naturalism while keeping shadow detail alive in films like \"No Country for Old Men.\"",
    "category": "lighting",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/fill-light.webp",
    "promptTemplate": "Fill light softening the shadows on [Subject], a gentle secondary source creating a 4:1 contrast ratio, the shadow side retaining detail and color rather than falling to black, the fill large and diffused so it wraps without creating competing shadows, shot on 35mm Kodak Vision3 with a 65mm lens, the nuanced lighting ratio that separates professional from amateur cinematography",
    "whenToUse": "Mang lại ánh sáng lấp đầy khi phím tạo đúng hướng nhưng bóng tối che giấu quá nhiều thông tin câu chuyện. Nó rất hữu ích cho đối thoại, chân dung, tác phẩm sản phẩm và bất kỳ cảnh nào mà khuôn mặt phải giữ nguyên kích thước nhưng vẫn có thể đọc được. Đổ đầy nhiều hơn sẽ tạo ra hình ảnh nhẹ nhàng, cởi mở; ít điền hơn bảo tồn nguy hiểm và bí ẩn. Hãy coi mức lấp đầy là một quyết định mang tính cảm tính, đặc biệt khi kết hợp nhiều cảnh quay trong cùng một cuộc trò chuyện hoặc trình tự.",
    "bestPractices": "Trước tiên hãy thiết lập đèn chính, sau đó thêm nguồn phụ khuếch tán rộng, gần phía máy ảnh. Yêu cầu phục hồi bóng mềm mà không có bóng hiển thị thứ hai hoặc vùng sáng cạnh tranh. Xác định rõ ràng độ tương phản mong muốn: mặt tối phải giữ lại màu sắc, chi tiết mắt và cấu trúc khuôn mặt trong khi vẫn tối hơn mặt chính. Giữ màu trung tính trừ khi môi trường thúc đẩy tông màu. Trên các cảnh quay video, hãy duy trì mối quan hệ key-to-fill giống nhau để độ tương phản không bị dao động giữa các lần cắt.",
    "commonMistakes": [
      "Tăng màu tô cho đến khi bề mặt trở nên phẳng và không có hướng, xóa đi thứ bậc thị giác do key light thiết lập.",
      "Sử dụng một nguồn lấp đầy cứng nhỏ tạo ra bóng sắc nét của riêng nó và hiển thị cách thiết lập ánh sáng nhân tạo.",
      "Thay đổi tỷ lệ lấp đầy giữa các ảnh liền kề, khiến độ tương phản của da và chi tiết bóng tăng vọt trong quá trình chỉnh sửa."
    ]
  },
  {
    "id": "backlight",
    "name": "Backlight",
    "definition": "Light positioned behind the subject, creating a rim of light around their edges that separates the subject from the background and adds a halo-like, ethereal quality. Emmanuel Lubezki is the modern master of backlighting, using natural backlight in \"The Revenant\" and \"The Tree of Life\" to create an almost divine luminosity around his subjects. Vittorio Storaro's backlighting in \"The Last Emperor\" gives Pu Yi a godlike glow, and Janusz Kamiński's aggressive backlighting in \"Schindler's List\" and \"Saving Private Ryan\" — sometimes called the \"Kamiński look\" — adds an otherworldly haze to traumatic events.",
    "category": "lighting",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/backlight.webp",
    "promptTemplate": "Backlit [Subject] with brilliant rim of white-gold light tracing every contour, hair transformed into a luminous halo of individually backlit strands, atmospheric dust and particles lit up like a galaxy of floating stars, god rays streaming past the figure, shot on a Cooke S4 with gentle halation on the overexposed highlights, the ethereal separation of backlight turning form into something divine",
    "whenToUse": "Ngược sáng phù hợp khi chủ thể phải tách khỏi nền tối hoặc hậu cảnh phức tạp về mặt thị giác hoặc khi cảnh cần một vầng hào quang thanh tao. Nó hoạt động đặc biệt tốt với tóc, khói, bụi, mưa, vải mờ và sương mù trong khí quyển. Sử dụng nó cho những người đến, những đoạn ký ức, hình ảnh tâm linh hoặc những hình bóng có viền có thể đọc được. Vì nguồn đối diện với ống kính nên hãy quyết định xem mặt trước có còn tối hay nhận đủ ánh sáng để biểu đạt hay không.",
    "bestPractices": "Đặt nguồn mạnh nhất phía sau đối tượng và cao hơn khung hình một chút. Mô tả một đường viền màu vàng trắng chạy dọc theo vai, tóc và hình dáng trong khi các hạt trong không khí bắt được những chùm tia hẹp. Hãy để những điểm sáng nở nhẹ nhàng nhưng vẫn giữ nguyên hình dạng của các cạnh thay vì làm mờ toàn bộ khung. Cho biết khuôn mặt vẫn bị bóng hay bị hạn chế chi tiết phía trước. Trong chuyển động, hãy duy trì độ che phủ thuyết phục: vành phải biến mất trên các cạnh bị chặn khỏi nguồn và sáng lên khi đối tượng quay về phía nó.",
    "commonMistakes": [
      "Áp dụng đường viền phát sáng đồng đều xung quanh mọi cạnh, bao gồm cả các bề mặt mà nguồn phía sau không thể chạm tới.",
      "Phơi sáng quá mức nền và viền cùng nhau cho đến khi đối tượng mất đi hình bóng thay vì có được sự tách biệt rõ ràng.",
      "Bỏ qua phản ứng của bầu không khí và bề mặt, biến ánh sáng có khả năng phát sáng thành một nét vẽ kỹ thuật số mỏng xung quanh hình."
    ]
  },
  {
    "id": "bounce-light",
    "name": "Bounce Light",
    "definition": "Light reflected off a surface — wall, ceiling, or reflector — before hitting the subject, creating a soft, indirect illumination with a natural quality. Sven Nykvist perfected bounce lighting for Ingmar Bergman, often bouncing light off white ceilings and walls in \"Cries and Whispers\" to create his celebrated naturalistic look. Roger Deakins frequently bounces light off muslin and bead board to create his subtle, invisible lighting in films like \"Fargo\" and \"A Beautiful Mind.\" The technique is fundamental to modern naturalistic cinematography, where visible movie lights would break the illusion of reality.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/bounce-light.webp",
    "promptTemplate": "Bounce light wrapping gently around [Subject], light reflected off a nearby surface creating soft warm illumination with no discernible directional shadow, the walls themselves becoming luminous secondary sources, shot on Alexa with Cooke S7 lenses for gentle roll-off into highlights, the naturalistic invisible lighting that Sven Nykvist spent a lifetime perfecting, light that serves the subject without announcing itself",
    "whenToUse": "Sử dụng ánh sáng phản xạ cho nội thất và ảnh chân dung để có cảm giác được chiếu sáng tự nhiên mà không cần nguồn phim rõ ràng. Đó là lý tưởng khi ánh sáng trực tiếp có vẻ khắc nghiệt, tạo ra bóng không mong muốn hoặc phá vỡ tính chân thực của địa điểm. Việc nảy có thể biến bức tường, trần nhà hoặc tấm phản xạ thành một nguồn lớn bao bọc các khuôn mặt và đồ vật. Chọn bề mặt phản chiếu cẩn thận vì vị trí, màu sắc và kích thước của nó sẽ định hình hướng, sắc thái và độ dịu của ánh sáng phản xạ.",
    "bestPractices": "Đặt tên cho nguồn ban đầu và bề mặt nó chạm tới trước khi tiếp cận chủ đề. Yêu cầu một sự trở lại rộng rãi từ bức tường hoặc trần nhà nhợt nhạt gần đó, được bao bọc nhẹ nhàng và không có bóng định hướng cứng. Độ nảy phải kế thừa độ ấm hoặc màu sắc tinh tế từ bề mặt đó, không xuất hiện hoàn toàn trung tính theo mặc định. Giữ lại một lượng bụi đáng tin cậy trong phòng. Đối với các cảnh chuyển động, hãy giữ nguồn gián tiếp cố định vào kiến ​​trúc để các khuôn mặt sáng và mờ tùy theo khoảng cách của chúng với nó.",
    "commonMistakes": [
      "Mô tả ánh sáng dịu mà không xác định bề mặt phản chiếu, để lại hướng chiếu sáng tùy tiện và không thuyết phục về mặt không gian.",
      "Bật lên từ một bức tường có màu sắc mạnh mẽ đồng thời yêu cầu làn da trung tính, tạo ra sự mâu thuẫn trong hành vi ánh sáng của khung cảnh.",
      "Làm cho mọi góc đều sáng như nhau, giúp loại bỏ ánh sáng yếu tự nhiên mang lại độ sâu không gian đáng tin cậy cho ánh sáng gián tiếp."
    ]
  },
  {
    "id": "cross-lighting",
    "name": "Cross Lighting",
    "definition": "Two light sources positioned on opposite sides of the subject, creating a complex interplay of highlights and shadows that sculpt form from multiple directions. Ridley Scott used cross-lighting extensively in \"Blade Runner\" to create the layered, multi-source atmosphere of a neon-drenched dystopia. Michael Mann employs cross-lighting in his nighttime cityscapes, with competing sources from streetlights, car headlights, and building illumination. The technique is also central to fashion and music video cinematography, where Bradford Young and Linus Sandgren create rich, multi-dimensional looks by playing sources against each other.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "/img/cinematique/cross-lighting.webp",
    "promptTemplate": "Cross-lighting from two opposing sources on [Subject], a warm tungsten source from one side casting amber highlights while a cool blue-white source from the other paints steel tones, the two competing colors meeting in a narrow strip of mixed light, each surface independently sculpted by the dual sources, shot on 35mm Kodak Vision3 500T to handle the mixed color temperatures with richness, a 50mm lens capturing the sculptural dimensionality",
    "whenToUse": "Chọn ánh sáng chéo khi một nguồn không thể giải thích được năng lượng phân lớp của ngoại thất ban đêm, sân khấu, khung thời trang hoặc nội thất đèn neon. Các nguồn đối lập có thể khắc các bề mặt khác nhau và tách một đối tượng khỏi nhiều hướng cùng một lúc. Kỹ thuật này đặc biệt hữu ích khi môi trường ấm áp và mát mẻ va chạm nhau. Nó đòi hỏi sự kiểm soát: mỗi nguồn cần có nguồn gốc đáng tin cậy và sự chồng chéo của chúng sẽ tạo ra sự phức tạp mà không biến da, trang phục hoặc đạo cụ thành các mảng màu ngẫu nhiên.",
    "bestPractices": "Đặt hai nguồn ở hai phía đối diện của chủ thể. Tạo cho một cái màu hổ phách ấm áp và cái còn lại có tông màu trắng xanh mát hơn, sau đó chỉ định những mặt phẳng mà mỗi nguồn bắt được. Giữ một khoảng chuyển tiếp hẹp nơi các màu gặp nhau thay vì trộn mọi thứ thành màu tím đồng nhất. Hãy để các nguồn đổ bóng ra khỏi hướng riêng của chúng mà không hoạt động giống như lấp đầy phía trước. Trong video, khóa cả hai đèn ở các vị trí có động lực và theo dõi mức độ ảnh hưởng của chúng thay đổi như thế nào khi đối tượng đi qua giữa chúng.",
    "commonMistakes": [
      "Pha trộn các màu đối lập trên toàn bộ chủ thể, tạo ra vệt mờ thay vì hai nguồn được định hướng rõ ràng.",
      "Cung cấp cho cả hai đèn độ che phủ phía trước bằng nhau, làm phẳng hình thức và phá hủy mục đích điêu khắc của ánh sáng chéo.",
      "Bỏ qua các hướng bóng riêng biệt, làm cho các điểm nhấn ấm áp và mát mẻ mang lại cảm giác trang trí hơn là hiện diện vật lý trong không gian."
    ]
  },
  {
    "id": "kicker-light",
    "name": "Kicker Light",
    "definition": "A light placed behind and to the side of a subject, adding an accent edge of light that is more targeted than a backlight, providing a touch of separation and dimensionality. The kicker light is a staple of professional cinematography that often goes unnoticed by audiences despite being visible in nearly every well-lit film. Darius Khondji uses precise kicker lights in David Fincher's \"Se7en\" to trace characters against dark backgrounds without revealing the full backlight. Robert Elswit employs subtle kickers in Paul Thomas Anderson's \"There Will Be Blood\" to add depth to candlelit and oil-lamp scenes where full backlighting would be unmotivated.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/kicker-light.webp",
    "promptTemplate": "Kicker light accent on [Subject], a focused beam from behind and to the side catching just the edge of a cheekbone, the rim of an ear, and the curve of a shoulder in a thin bright line against darkness, the subtlety of the kicker creating depth and three-dimensionality, shot with a 135mm telephoto at T2, warm 3000K color temperature suggesting a tungsten practical source",
    "whenToUse": "Sử dụng đèn trợ sáng khi chủ thể gần như tách biệt khỏi hậu cảnh nhưng ngược sáng hoàn toàn sẽ tạo cảm giác quá mức hoặc không có động lực. Điểm nhấn hẹp có thể xác định một xương gò má, tai, vai hoặc mép trang phục trong khi vẫn giữ được hình ảnh tổng thể tối. Nó hoạt động trong các bức chân dung hạn chế, những căn phòng dưới ánh nến, phim kinh dị và cảnh đêm. Người khởi động phải được chú ý thông qua độ sâu được cải thiện chứ không phải qua quầng sáng rộng thông báo cách thiết lập ánh sáng.",
    "bestPractices": "Đặt nguồn lấy nét ở phía sau và sang một bên của đối tượng, hướng ngang thay vì hướng thẳng vào máy ảnh. Giới hạn phạm vi tiếp cận của nó ở một điểm nhấn mỏng ở gần xương gò má, vành tai, mép tóc hoặc đường cong vai. Hãy kết hợp màu sắc của nó với ngọn đèn, ngọn lửa hoặc nguồn thực tế trong hiện trường. Giữ độ phơi sáng phía trước của khuôn mặt không thay đổi. Trong quá trình di chuyển, hãy để điểm nhấn xuất hiện và biến mất một cách tự nhiên khi các đường viền xoay quanh chùm tia thay vì bám vào cùng một cạnh không gian màn hình.",
    "commonMistakes": [
      "Mở rộng điểm nhấn xung quanh toàn bộ hình bóng, biến cầu thủ được nhắm mục tiêu thành đèn nền bừa bãi.",
      "Làm sáng vùng sáng phía ngoài các nguồn thực tế của cảnh, làm cho phần rìa có cảm giác tách rời khỏi độ phơi sáng xung quanh.",
      "Giữ cố định điểm nhấn trên một cạnh màn hình trong khi chủ thể quay, phá vỡ hướng vật lý của ánh sáng."
    ]
  },
  {
    "id": "motivated-lighting",
    "name": "Motivated Lighting",
    "definition": "Lighting that appears to come from a logical source within the story — a window, a fireplace, a streetlamp — even if augmented with movie lights, the effect looks naturally justified. Roger Deakins is the modern master of motivated lighting, meticulously justifying every light source in films like \"Skyfall\" and \"1917.\" His work on the Coen Brothers' \"No Country for Old Men\" features exclusively motivated lighting — every source can be traced to a window, lamp, or headlight in the scene. Kubrick's candlelit rooms in \"Barry Lyndon\" and Storaro's fire-motivated interiors in \"Apocalypse Now\" are landmark achievements in motivated practical lighting.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/motivated-lighting.webp",
    "promptTemplate": "Motivated lighting on [Subject] with every light source logically justified within the scene, the shadows all pointing logically away from their respective visible sources, hidden augmentation maintaining the illusion of purely natural illumination, shot on 35mm with Panavision Primo lenses, the invisible craft of making elaborate lighting look like nature, Roger Deakins-level motivational rigor",
    "whenToUse": "Ánh sáng động lực cần có trong bất kỳ cảnh nào mà sự kiểm soát điện ảnh phải được ẩn đi. Sử dụng nó khi cửa sổ, đèn, ngọn lửa, đèn đường hoặc đèn pha có thể điều chỉnh hướng và màu sắc của mọi nguồn chính. Nó đặc biệt hiệu quả đối với kịch hiện thực, nội thất cổ điển và công việc ở địa điểm nơi vẻ đẹp không thể giải thích được sẽ khiến cả thế giới phải kinh ngạc. Phương pháp này cũng giúp duy trì tính liên tục vì mỗi quyết định chiếu sáng có thể được truy nguyên từ các vật thể ổn định trong môi trường.",
    "bestPractices": "Xác định mọi nguồn rõ ràng hoặc ngụ ý trước khi mô tả chủ đề. Cửa sổ phải tạo ra ánh sáng ban ngày có hướng và bóng đổ ra xa cửa sổ; đèn phải tạo ra ánh sáng ấm hơn, cục bộ với lượng ánh sáng giảm đáng tin cậy. Chỉ thêm phần mở rộng ẩn dưới dạng phần mở rộng của các nguồn đó, không bao giờ là một hướng mâu thuẫn. Giữ sự phản chiếu, viền và điểm sáng của mắt nhất quán theo cùng một logic. Trong video, hãy bảo toàn các vị trí nguồn trong phạm vi phủ sóng và để các ký tự chuyển động đi qua các vùng ánh sáng hợp lý riêng biệt.",
    "commonMistakes": [
      "Thêm một vành xe đẹp từ sai hướng khi không có cửa sổ, đèn hoặc bề mặt phản chiếu nào có thể biện minh được.",
      "Tạo ra một số đèn thực tế có tầm ảnh hưởng như nhau khắp phòng, bỏ qua khoảng cách, độ mờ và vật cản giữa nguồn và chủ thể.",
      "Thay đổi hướng bóng giữa các cảnh quay trong khi các nguồn nhìn thấy vẫn cố định, làm lộ ra công trình phía sau được cho là ánh sáng tự nhiên."
    ]
  },
  {
    "id": "ambient-light",
    "name": "Ambient Light",
    "definition": "The existing, non-directional light present in an environment before any additional lighting is added, the base layer of illumination that sets the overall brightness and mood. Frederick Wiseman's documentaries like \"Titicut Follies\" and \"High School\" rely entirely on ambient light to maintain observational authenticity. The Dardenne brothers shoot their fiction films in ambient conditions to preserve documentary realism. Understanding and working with ambient light — the blue fill of an overcast sky, the warm glow of an office space, the green tint of a forest canopy — is the foundation upon which all other lighting decisions are built.",
    "category": "lighting",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "/img/cinematique/ambient-light.webp",
    "promptTemplate": "Ambient light only on [Subject], the existing institutional or natural illumination providing the sole source, no dramatic shadows or cinematic enhancement, the honest unmanipulated light of a real place at a real time, shot on a fast lens wide open to handle the lower light levels, documentary naturalism where the space itself determines the visual mood",
    "whenToUse": "Chọn ánh sáng xung quanh khi độ sáng và màu sắc hiện tại của địa điểm sẽ xác định khung cảnh trước bất kỳ sự can thiệp mạnh mẽ nào. Nó phù hợp với việc quan sát tài liệu, không gian tổ chức, ngoại thất u ám, văn phòng, rừng và các môi trường khác với khả năng chiếu sáng không định hướng rộng. Ánh sáng xung quanh có thể làm cho khung hình có cảm giác ngay lập tức và không hiệu quả, nhưng nó cũng làm lộ ra sắc thái tự nhiên và sự không đồng đều của không gian. Sử dụng nó khi tính xác thực quan trọng hơn khuôn mặt được điêu khắc hoặc sự tách biệt bóng bẩy.",
    "bestPractices": "Mô tả môi trường như là nguồn: bầu trời u ám mát mẻ, ánh sáng ấm áp trên trần văn phòng hoặc ánh sáng xanh được lọc qua tán cây. Giữ ánh sáng rộng và có tính định hướng thấp, hạn chế độ tương phản và không có vành hoặc điểm sáng không giải thích được. Cho phép ô nhiễm màu nhẹ và phơi sáng không đồng đều ở nơi không gian thực sẽ tạo ra nó. Duy trì chi tiết có thể đọc được mà không làm cho khung cảnh trở nên bóng loáng. Đối với video, hãy để đối tượng di chuyển qua kiểu độ sáng hiện có thay vì mang theo đèn chân dung có hình dạng hoàn hảo bên mình.",
    "commonMistakes": [
      "Thêm đèn viền và phím ấn tượng trong khi gọi kết quả là môi trường xung quanh, điều này mâu thuẫn với lớp cơ sở môi trường của kỹ thuật.",
      "Trung hòa mọi tông màu ở vị trí, loại bỏ sắc xanh lam, xanh lục hoặc ấm làm cho ánh sáng hiện có trở nên cụ thể.",
      "Làm cho ánh sáng xung quanh đồng đều một cách hoàn hảo, ngay cả ở những nơi tường, trần nhà, cửa sổ hoặc tán lá sẽ tạo ra sự khác biệt rõ ràng."
    ]
  },
  {
    "id": "available-light",
    "name": "Available Light",
    "definition": "Shooting with only the light naturally present in the location — no artificial movie lights added — creating an authentic, documentary quality that requires careful exposure management. Kubrick's \"Barry Lyndon\" is the most famous example, shot entirely by candlelight and window light using a modified NASA f/0.7 Zeiss lens. Emmanuel Lubezki committed to available light for Terrence Malick's \"The New World\" and \"The Tree of Life,\" as well as Iñárritu's \"The Revenant,\" winning three consecutive Oscars for his mastery of natural illumination. Bradford Young's available-light work in \"Arrival\" created an intimate, naturalistic atmosphere within science fiction.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Documentary",
    "image": "/img/cinematique/available-light.webp",
    "promptTemplate": "Available light on [Subject] with no additional movie lighting, illuminated purely by existing natural or practical sources, the honest imperfection of real light creating slightly uneven exposure, shot on an extremely fast lens at f/0.95 to capture the low ambient levels, the discipline of working with only what nature and architecture provide, Barry Lyndon austerity",
    "whenToUse": "Ánh sáng sẵn có là sự lựa chọn có tính kỷ luật khi ánh sáng chiếu phim được thêm vào sẽ làm ảnh hưởng đến tính chân thực, hiệu suất hoặc nhịp điệu tự nhiên của địa điểm. Sử dụng nó cho chủ nghĩa hiện thực tài liệu, những căn phòng dưới ánh nến, nội thất có cửa sổ chiếu sáng và cảnh bên ngoài gắn liền với một thời điểm cụ thể trong ngày. Giao diện phải giữ lại sự mất cân bằng phơi sáng nhẹ và những hạn chế thực tế. Phương pháp này không tập trung vào việc làm cho mọi thứ hiển thị mà là chọn vị trí máy ảnh, vị trí của chủ thể và thời gian xung quanh những gì thiên nhiên và kiến ​​trúc đã cung cấp.",
    "bestPractices": "Chỉ liệt kê các nguồn tồn tại thực tế ở vị trí đó, chẳng hạn như cửa sổ, nến, vật cố định trên trần hoặc bầu trời rộng mở. Đặt đối tượng ở nơi những nguồn đó có thể tiếp cận họ và chấp nhận bóng tối được kiểm soát ở nơi khác. Yêu cầu cảm giác ống kính nhanh, cuộn sáng nhẹ nhàng và độ phơi sáng nhỏ không hoàn hảo thay vì cân bằng studio bóng bẩy. Không giới thiệu điền vô hình. Trong video, hãy giữ những thay đổi về độ sáng gắn liền với chuyển động thực, đám mây bay qua, ngọn lửa nhấp nháy hoặc sự dịch chuyển giữa các vùng ánh sáng thực tế.",
    "commonMistakes": [
      "Lén lút lấp đầy mặt trước hoặc vành hoàn hảo mà không có nguồn hiện có, làm suy yếu hạn chế về ánh sáng sẵn có.",
      "Yêu cầu độ phơi sáng rõ ràng ở mọi góc, điều này loại bỏ những hạn chế trung thực và thứ bậc về độ chiếu sáng của địa điểm.",
      "Bỏ qua vị trí của đối tượng so với cửa sổ hoặc không gian thực tế, sau đó bù lại bằng ánh sáng không thể có theo sau chúng."
    ]
  },
  {
    "id": "broad-lighting",
    "name": "Broad Lighting",
    "definition": "The side of the face turned toward the camera receives the key light, widening the apparent face shape and creating a brighter, more open look. Broad lighting is commonly used in comedy and romantic genres where an open, welcoming quality is desired. Classic Hollywood glamour photographers like Clarence Sinclair Bull used broad lighting for approachable star portraits. In cinema, broad lighting is the default for high-key comedic scenes and sitcom-style dialogue. It works against the conventional wisdom of dramatic lighting, deliberately choosing the wider, flatter option for warmth and accessibility.",
    "category": "lighting",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/broad-lighting.webp",
    "promptTemplate": "Broad lighting on [Subject] with the key illuminating the wider camera-facing side, creating an open and warm appearance with minimal shadow visible, the widening effect making the face appear fuller and more inviting, a soft box key with matching soft fill creating low contrast, shot on an 85mm lens at f/4, the even clean illumination of a romantic comedy close-up, Kodak Portra-inspired warm skin rendition",
    "whenToUse": "Sử dụng ánh sáng rộng khi bức chân dung cần có cảm giác cởi mở, ấm áp, dễ tiếp cận hoặc tôn lên vẻ nhẹ nhàng thay vì bí mật. Nó hoạt động tốt cho hài kịch, lãng mạn, phỏng vấn và đối thoại trong đó thông tin khuôn mặt cần được truyền đến mà không gặp trở ngại. Vì phía camera rộng hơn sẽ nhận được key nên khuôn mặt trông đầy đặn và sáng hơn. Hãy chọn nó một cách có chủ ý để tạo sự thoải mái về mặt cảm xúc và tránh nó khi nhân vật cần một đường nét mảnh mai hơn, biểu cảm bị che giấu hoặc sự căng thẳng kiểu đen tối.",
    "bestPractices": "Xoay đối tượng ra xa máy ảnh một chút, sau đó đặt phím để nó chiếu sáng mặt phẳng khuôn mặt rộng hơn mà người xem vẫn nhìn thấy được. Sử dụng nguồn mềm lớn và tô màu hạn chế, chỉ giữ bóng hẹp ở phía xa. Duy trì làn da ấm áp và đôi mắt mở to mà không làm phẳng mọi đường viền. Má hướng về phía máy ảnh phải có vùng sáng nhất. Trên toàn bộ phạm vi phủ sóng của video, hãy bảo toàn hướng đi và hướng chính của đối tượng; đảo ngược một trong hai cái vô tình làm thay đổi bức chân dung thành ánh sáng ngắn.",
    "commonMistakes": [
      "Chiếu sáng vùng má hẹp phía xa thay vì mặt phẳng rộng hướng về phía máy ảnh, vô tình tạo ra kiểu chân dung đối diện.",
      "Làm đầy mọi bóng trên khuôn mặt với cùng một giá trị, biến cái nhìn cởi mở thành ánh sáng phẳng, không định hướng.",
      "Sử dụng ánh sáng rộng cho một cảnh được xây dựng dựa trên sự che giấu, trong đó sự rõ ràng dễ chịu của nó có tác dụng chống lại sự căng thẳng dự kiến."
    ]
  },
  {
    "id": "short-lighting",
    "name": "Short Lighting",
    "definition": "The side of the face turned away from the camera receives the key light, putting the broader visible area in shadow, creating a slimming, more dramatic and moody portrait. Short lighting is preferred for dramatic and thriller genres where mystery and tension serve the story. Gordon Willis frequently used short lighting patterns in his collaborations with Woody Allen and Francis Ford Coppola. Film noir cinematographers defaulted to short lighting to create the shadowy, secretive faces of morally ambiguous characters. Roger Deakins uses short lighting in \"Prisoners\" to maintain a persistent sense of concealment and dread.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "/img/cinematique/short-lighting.webp",
    "promptTemplate": "Short lighting on [Subject] with the key hitting the narrow far side, putting the broader camera-facing side in shadow, the small bright area creating an accent surrounded by darkness, shot on a fast 85mm lens at T1.4 with the background falling to black, film noir portrait psychology where what is hidden matters more than what is shown",
    "whenToUse": "Ánh sáng ngắn phù hợp với những bức chân dung cần sự huyền bí, căng thẳng, hình dáng khuôn mặt thon gọn hơn hoặc cảm giác nhân vật đang che giấu thông tin. Nó hoạt động một cách tự nhiên trong phim kinh dị, phim noir, thẩm vấn và đối thoại kịch tính. Điểm sáng nhỏ ở phía xa trở thành điểm nhấn được bao quanh bởi vùng bóng lớn hơn. Sử dụng nó khi việc che giấu mang ý nghĩa, nhưng bảo vệ đủ chi tiết về mắt và da để giữ được cảm xúc có chủ đích thay vì chỉ đơn giản là thiếu sáng.",
    "bestPractices": "Xoay đối tượng ra xa máy ảnh và đặt phím trên mặt phẳng khuôn mặt hẹp quay xa ống kính hơn. Giữ phần má rộng hướng về phía máy ảnh trong bóng tối, với phần má sáng ở phía xa đóng vai trò là điểm nhấn được kiểm soát. Sử dụng màu tô tối thiểu và để nền tối hơn nếu cảnh hỗ trợ nó. Giữ lại ánh sáng bắt mắt hoặc chi tiết nhỏ về mắt khi cần thiết. Trong quá trình di chuyển, hãy làm cho kiểu ánh sáng phản ứng với việc xoay đầu thay vì giữ nguyên trạng thái cố định trên cùng một vùng trên khuôn mặt.",
    "commonMistakes": [
      "Chiếu sáng vùng má rộng gần, đảo ngược khuôn mẫu dự định và loại bỏ vùng bóng mờ.",
      "Làm toàn bộ mặt đối diện với máy ảnh thành màu đen vô nghĩa, làm mất đi chi tiết được kiểm soát giúp bức chân dung có thể đọc được.",
      "Để điểm sáng hẹp trải dài khắp mũi và mặt trước, làm yếu đi điểm nhấn tập trung."
    ]
  },
  {
    "id": "color-temperature",
    "name": "Color Temperature",
    "definition": "The warmth or coolness of light measured in Kelvin — warm light (orange/amber) suggests comfort and intimacy while cool light (blue) suggests detachment, technology, or night. Steven Soderbergh is a master of deliberate color temperature manipulation, using amber for Mexico and blue-green for the US in \"Traffic\" to distinguish storylines. Emmanuel Lubezki plays warm and cool temperatures against each other in nearly every frame of \"The Revenant.\" The contrast between warm practicals and cool ambient light is a fundamental tool of modern cinematography, used by Hoyte van Hoytema in \"Interstellar\" and Bradford Young in \"Solo: A Star Wars Story.\"",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/color-temperature.webp",
    "promptTemplate": "Mixed color temperatures on [Subject], the tension between warm 2700K tungsten sources casting golden light and cool 6500K daylight-balanced sources washing in cold sterile tones, the two color worlds meeting on the subject's form, shot on Kodak Vision3 500T balanced for tungsten so warm sources read neutral while daylight goes intensely blue, the visual poetry of mixed color temperatures that maps emotional geography",
    "whenToUse": "Làm việc với nhiệt độ màu khi địa lý cảm xúc cũng quan trọng như độ sáng. Những vật dụng ấm áp có thể mang lại cảm giác thoải mái, ký ức hoặc sự thân mật trong khi ánh sáng xung quanh mát mẻ gợi nhớ về đêm, khoảng cách hoặc công nghệ. Nhiệt độ hỗn hợp rất hữu ích ở các ô cửa, xe cộ, nội thất thành phố và những cảnh nơi hai thế giới gặp nhau trên một chủ đề. Trước tiên, hãy thiết lập vai trò tường thuật của từng nguồn; nếu không thì màu hổ phách và màu xanh lam sẽ trở thành một bảng màu điện ảnh tự động không có mối liên hệ nào với địa điểm hoặc cảm giác.",
    "bestPractices": "Xác định ít nhất hai nguồn theo vị trí và đặc điểm màu sắc: một ngọn đèn giống như đèn vonfram ấm áp ở gần đối tượng và không khí ban ngày hoặc ban đêm mát mẻ hơn chiếu vào từ nơi khác. Nêu rõ mặt nào của khuôn mặt, trang phục và môi trường mà mỗi người ảnh hưởng. Giữ sự chuyển tiếp rõ ràng giữa các vùng màu thay vì làm mờ khung một cách đồng đều. Các vật thể trung tính sẽ bộc lộ sự tương phản rõ ràng. Đối với video, hãy duy trì logic màu sắc ổn định khi camera quay và để các đối tượng di chuyển một cách tự nhiên giữa vùng nước ấm và vùng nước mát.",
    "commonMistakes": [
      "Áp dụng màu cam cho da và màu xanh mòng két cho mọi nền theo thói quen mà không chỉ định màu nào cho nguồn thực.",
      "Pha trộn ánh sáng ấm áp và mát mẻ thành một màu trung tính đồng nhất, loại bỏ sự tách biệt về mặt cảm xúc giữa hai khu vực.",
      "Thay đổi hướng màu trên các ảnh liền kề, do đó, cùng một cửa sổ hoặc đèn dường như di chuyển xung quanh cảnh."
    ]
  },
  {
    "id": "dappled-light",
    "name": "Dappled Light",
    "definition": "Light filtered through trees, blinds, or other semi-transparent objects, creating a pattern of light and shadow across the subject that evokes natural environments and contemplation. Terrence Malick and Emmanuel Lubezki use dappled forest light as an almost religious motif throughout \"The New World\" and \"The Tree of Life,\" where sunlight through leaves becomes a visual metaphor for divine presence. Akira Kurosawa used dappled light filtering through the forest canopy in \"Rashomon\" to create the famous unreliable visual atmosphere. Guillermo del Toro employs dappled light in \"Pan's Labyrinth\" to mark the boundary between the real and fantastical worlds.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "/img/cinematique/dappled-light.webp",
    "promptTemplate": "Dappled light filtering through a canopy onto [Subject], dozens of small bright spots and larger soft patches scattered across them in an ever-shifting mosaic, the interplay creating a natural pointillist painting on the surface, the overall light warm and green-shifted from passing through foliage, an 85mm lens at T1.4 turning the background into luminous green bokeh, Kodak Vision3 50D saturated daylight stock, the Malick-Lubezki prayer of natural light",
    "whenToUse": "Ánh sáng lốm đốm hoạt động khi môi trường để lại hoa văn sống động trên đối tượng. Sử dụng nó bên dưới tán lá, gần rèm, đằng sau những tấm bình phong có hoa văn hoặc bất cứ nơi nào mà nguồn bị hỏng có thể gợi ý sự trầm ngâm, lãng mạn, bất ổn hoặc biên giới giữa các thế giới. Khảm dịch chuyển thêm kết cấu mà không cần thêm vật thể vào khung. Nó mạnh nhất khi bộ lọc có sự hiện diện vật lý rõ ràng và hoa văn bao bọc một cách thuyết phục trên khuôn mặt, quần áo, tường và mặt đất.",
    "bestPractices": "Đặt một nguồn có độ tập trung cao hoặc vừa phải đằng sau một bộ lọc cụ thể, chẳng hạn như những chiếc lá hoặc màn che. Yêu cầu các mảng sáng không đều và các vùng bóng mềm hơn có thể thay đổi kích thước khi chúng đi qua các bề mặt ba chiều. Nếu tán lá là bộ lọc, hãy để ánh sáng mang hơi ấm và xanh lục. Giữ độ phơi sáng tổng thể nhất quán bên dưới mẫu. Đối với video, hãy tạo hiệu ứng sinh động cho các mảng một cách tinh tế bằng chuyển động của gió hoặc chủ thể; tránh làm cho mọi điểm phát xung độc lập hoặc trượt trên kiến ​​trúc cố định.",
    "commonMistakes": [
      "Vẽ các điểm tròn giống hệt nhau trên toàn bộ khung, bỏ qua hình dạng, khoảng cách và độ sâu của vật liệu lọc.",
      "Giữ cho mẫu hình chiếu phẳng trên các mặt cong và vải, thay vì để nó quấn và làm biến dạng hình dạng.",
      "Di chuyển bóng nhanh chóng mà không di chuyển lá, rèm, ánh sáng hoặc chủ thể, làm cho ánh sáng của cảnh trở nên không mạch lạc về mặt vật lý."
    ]
  },
  {
    "id": "edge-light",
    "name": "Edge Light",
    "definition": "A thin line of light that traces the outline of a subject, separating them from the background and creating a refined, cinematic look that adds depth and visual polish. Ridley Scott and his frequent cinematographer John Mathieson use edge lighting extensively in \"Gladiator\" and \"Kingdom of Heaven\" to make armored warriors pop against dark battle backgrounds. Roger Deakins uses hairline edge lights in \"Blade Runner 2049\" where characters are often defined more by their luminous outlines than their illuminated faces. The technique is also fundamental to music video and commercial cinematography where separation and visual polish are paramount.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/edge-light.webp",
    "promptTemplate": "Edge light tracing the complete outline of [Subject] against darkness, a thin bright line following every contour from crown to fingertips, the face and front in complete shadow with no fill, only the bright edge visible, individual hair strands creating a fiber-optic halo effect, shot on a 135mm lens at T2 to compress the background into a seamless void, the cinematic elegance of defining a form by outline alone",
    "whenToUse": "Chọn ánh sáng cạnh khi hình dạng quan trọng hơn chi tiết phía trước hoặc khi chủ thể tối cần tách biệt tinh tế khỏi nền tối. Nó có hiệu quả đối với hồ sơ, áo giáp, thời trang, biểu diễn âm nhạc, khói và hình ảnh khoa học viễn tưởng hạn chế. Một đường viền mỏng có thể tạo cảm giác bóng bẩy cho khung hình mà không để lộ khuôn mặt. Sử dụng nó để làm nổi bật hình bóng và ranh giới bề mặt, không phải như một ánh sáng phổ quát; dòng chỉ nên tuân theo đường viền hướng về phía nguồn.",
    "bestPractices": "Đặt một nguồn hẹp phía sau đối tượng sao cho nó sượt qua đường viền bên ngoài. Chỉ định các cạnh nào bắt sáng, từ vương miện và sợi tóc đến vai, cánh tay hoặc viền vật thể, trong khi mặt trước vẫn tối hoặc được lấp đầy tối thiểu. Giữ đường kẻ mỏng và sáng nhất ở nơi góc phản chiếu về phía máy ảnh. Tránh cường độ bằng nhau trên toàn bộ cơ thể. Trong video, hãy để đường viền được chiếu sáng di chuyển bằng cách xoay, để lộ các cạnh khác nhau khi hình học thay đổi so với nguồn cố định.",
    "commonMistakes": [
      "Vẽ một đường viền thống nhất hoàn chỉnh xung quanh chủ thể, bao gồm các cạnh bị ẩn hoặc quay mặt ra khỏi nguồn.",
      "Mở rộng cạnh cho đến khi tràn khắp mặt và thân, thay thế sự ngăn cách trang nhã bằng đèn nền rộng.",
      "Sử dụng nền sáng tương đương với viền, giúp loại bỏ độ tương phản cần thiết để tạo đường nét rõ ràng."
    ]
  },
  {
    "id": "eye-light",
    "name": "Eye Light",
    "definition": "A small, dedicated light source positioned to create a catchlight — a bright reflection in the subject's eyes — that brings eyes to life and creates a vital connection with the viewer. The eye light has been an essential tool since Hollywood's Golden Age, when cinematographers like Lee Garmes used tiny \"inky\" lights to add sparkle to Marlene Dietrich's eyes. Eyes without catchlights appear dead on screen — a fact horror filmmakers exploit deliberately. Steven Spielberg's cinematographers are known for precise eye lights; Janusz Kamiński's eye lights in \"Schindler's List\" are often the only bright element in otherwise dark compositions.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/eye-light.webp",
    "promptTemplate": "Eye light close-up of [Subject] with brilliant catchlights sparkling in the irises, a dedicated small source just above the camera creating twin points of reflected light that bring the entire face to life, the subtle difference between eyes with and without this light is the difference between a living portrait and a death mask, shot in close-up on a 100mm macro lens at T2.8, warm golden skin tones, the tiny technical detail that separates professional cinematography from amateur work",
    "whenToUse": "Ánh sáng mắt đóng vai trò quan trọng trong những bức chân dung cận cảnh nơi khán giả phải kết nối với ánh nhìn của nhân vật. Sử dụng nó khi ánh sáng rộng hơn khiến mắt bị mờ, tối hoặc thiếu cảm xúc, đặc biệt là trong những bức ảnh cận cảnh và phản ứng ấn tượng. Một chiếc đèn chiếu sáng nhỏ có thể khôi phục lại sự hiện diện mà không làm thay đổi phần còn lại của khuôn mặt. Chỉ loại bỏ nó một cách có chủ ý khi mục đích là vô hồn, che giấu hoặc kinh dị; nếu không, sự phản chiếu bị thiếu có thể làm cho một bức chân dung đúng kỹ thuật trở nên chết chóc một cách kỳ lạ.",
    "bestPractices": "Đặt một nguồn chuyên dụng nhỏ ngay phía trên và gần trục camera. Yêu cầu đèn phản quang nhỏ gọn, phù hợp ở cả hai tròng mắt nhìn thấy được, được định vị nhất quán với nguồn và được định hình theo khẩu độ của nó. Giữ cho hình ảnh phản chiếu sáng nhưng không lớn hơn con ngươi và giữ nguyên kết cấu mống mắt tự nhiên xung quanh chúng. Ánh sáng mắt không nên nâng toàn bộ khuôn mặt. Đối với video, khóa phản chiếu vào đôi mắt cong khi đầu quay; chúng phải dịch chuyển một cách tinh tế, không bao giờ nổi hoặc cố định trong không gian màn hình.",
    "commonMistakes": [
      "Làm cho đèn chiếu sáng thật lớn hoặc mang tính trang trí hoàn hảo để đôi mắt giống với hình minh họa bóng loáng hơn là phản chiếu từ một nguồn nhỏ.",
      "Đặt các hình dạng hoặc hướng ánh sáng phản chiếu khác nhau vào mỗi mắt, phá vỡ hình dạng chung của thiết lập ánh sáng.",
      "Làm sáng toàn bộ khuôn mặt để tạo ánh sáng lấp lánh cho mắt, làm thay đổi khung cảnh thay vì thêm một hình ảnh phản chiếu chính xác."
    ]
  },
  {
    "id": "gobo-lighting",
    "name": "Gobo Lighting",
    "definition": "Light shaped by a template (gobo) placed in front of the source, casting patterned shadows — window frames, venetian blinds, branches — adding narrative texture without physical set pieces. Film noir cinematography relied heavily on gobo lighting; John Alton's venetian blind shadows in \"The Big Combo\" became the genre's visual shorthand. Dean Cundey used gobo patterns in John Carpenter's \"Halloween\" to cast ominous branch shadows across interiors. Roger Deakins uses subtle gobo patterns in \"Skyfall\" to create the impression of light filtering through unseen architectural elements, adding visual complexity without visible source.",
    "category": "lighting",
    "difficulty": "Advanced",
    "mood": "Dramatic",
    "image": "/img/cinematique/gobo-lighting.webp",
    "promptTemplate": "Gobo lighting casting patterned shadows across [Subject], horizontal bars of light and dark striping across the form at an angle, the shadow pattern breaking and wrapping as it crosses three-dimensional contours, projected by a single hard source through a template, Kodak Double-X black and white stock for maximum contrast between the light bars and shadow bars, the quintessential film noir visual texture",
    "whenToUse": "Hệ thống chiếu sáng Gobo rất hữu ích khi một bức tường đơn giản hoặc khung cảnh đơn giản cần kết cấu tường thuật mà không cần thêm cấu trúc vật lý. Màn chiếu có thể gợi ý sự giam giữ hoặc bí mật; các nhánh có thể tạo cảm giác bên trong tiếp xúc với thế giới bên ngoài. Kỹ thuật này thuộc về thể loại phim noir, hồi hộp, kinh dị và cách điệu. Sử dụng một mẫu dễ nhận biết và nguồn cứng có động cơ. Hoa văn phải làm rõ hình học cảm xúc của khung cảnh, không lấp đầy khoảng trống bằng các sọc tùy ý.",
    "bestPractices": "Đặt một mẫu có hình dạng giữa một nguồn cứng và chủ thể. Xác định chính xác mẫu, chẳng hạn như các thanh ngang góc cạnh hoặc bóng nhánh bị gãy và nêu rõ vị trí của nó. Để hình chiếu bao bọc, mở rộng và xuyên qua mặt, quần áo, đồ nội thất và tường theo độ sâu của chúng. Giữ các thanh ánh sáng và thanh bóng tách biệt rõ ràng. Trong video, hãy giữ mẫu ổn định về mặt không gian trừ khi chuyển động của mù, nhánh, nguồn hoặc camera đáng tin cậy khiến mẫu bị dịch chuyển.",
    "commonMistakes": [
      "Xếp chồng một mẫu phẳng trên mọi bề mặt ở tỷ lệ giống hệt nhau, bỏ qua khoảng cách và hành vi chiếu ba chiều.",
      "Sử dụng nhiều mẫu không liên quan cùng nhau, biến kết cấu tường thuật tập trung thành nhiễu hình ảnh mà không có nguồn đọc được.",
      "Làm mềm nguồn cho đến khi các thanh hoặc nhánh chiếu mất đi nét và không còn chức năng như ánh sáng định hình."
    ]
  },
  {
    "id": "rule-of-thirds",
    "name": "Rule of Thirds",
    "definition": "Dividing the frame into a 3x3 grid and placing key elements along the lines or at their intersections, creating naturally balanced, dynamic compositions that feel more alive than dead-center framing. While most directors use the rule instinctively, Roger Deakins and the Coen Brothers apply it with mathematical precision in films like \"Fargo\" and \"No Country for Old Men.\" Emmanuel Lubezki frequently places subjects at the right-third intersection in Terrence Malick's films, leaving vast spaces of sky or landscape to fill the remaining two-thirds. The rule derives from classical painting composition and remains the most fundamental principle taught in both cinematography and photography.",
    "category": "composition",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/rule-of-thirds.webp",
    "promptTemplate": "Rule of thirds composition with [Subject] positioned at the upper-right power point intersection, eyes precisely on the top horizontal third line, the remaining two-thirds of the frame filled with negative space creating natural visual flow, the composition dynamically balanced despite being asymmetrical, shot on a 50mm lens at T2.8, overcast daylight providing even naturalistic illumination",
    "whenToUse": "Sử dụng quy tắc một phần ba khi khung hình ở giữa có cảm giác tĩnh nhưng bố cục vẫn cần độ rõ ràng ngay lập tức. Nó phù hợp với ảnh chân dung, phong cảnh, phỏng vấn và chủ thể chuyển động vì nó tạo ra không gian cho ánh nhìn, phương hướng hoặc môi trường. Đặt tâm điểm tại giao lộ và sử dụng phần diện tích còn lại một cách có chủ ý. Lưới là cấu trúc khởi đầu, không phải là vật trang trí; phá vỡ nó khi sự đối đầu, tính đối xứng hoặc sự khó chịu có chủ ý sẽ phục vụ cảnh quay tốt hơn.",
    "bestPractices": "Hãy tưởng tượng chia khung hình thành một lưới 3 x 3. Đặt tiêu điểm chính của đối tượng, thường là mắt hoặc khuôn mặt, trên một điểm giao nhau và căn chỉnh đường chân trời hoặc kiến ​​trúc chủ đạo với đường thứ ba. Cung cấp cho hai phần ba khoảng trống một mục đích thông qua phong cảnh, hướng nhìn hoặc hành động tiếp cận. Giữ các yếu tố phụ không cạnh tranh với tiêu điểm. Đối với video, hãy duy trì khoảng trống hữu ích khi chủ thể di chuyển thay vì buộc chúng một cách máy móc vào một điểm lưới trong mỗi khung hình.",
    "commonMistakes": [
      "Đặt chủ đề gần dòng thứ ba trong khi để trống khoảng trống còn lại về ý nghĩa hoặc mục đích định hướng.",
      "Căn chỉnh mọi đối tượng vào lưới, tạo ra một khung được tính toán rõ ràng thay vì bố cục cân bằng tự nhiên.",
      "Sử dụng quy tắc trong quá trình đối đầu trực tiếp hoặc đối xứng chính thức, trong đó vị trí lệch tâm sẽ làm suy yếu lực tâm lý dự định."
    ]
  },
  {
    "id": "symmetry",
    "name": "Symmetry",
    "definition": "A composition where both halves of the frame mirror each other, creating a sense of order, formality, perfection, or unsettling precision. Stanley Kubrick made symmetry his defining visual signature — the one-point-perspective corridor shots of \"The Shining\" and \"A Clockwork Orange\" remain the technique's most analyzed examples. Wes Anderson took symmetry to its whimsical extreme, making it the entire visual language of \"The Grand Budapest Hotel\" and \"The French Dispatch.\" Denis Villeneuve uses cold, imposing symmetry in \"Blade Runner 2049\" and \"Arrival\" to convey alien or corporate power structures.",
    "category": "composition",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "/img/cinematique/symmetry.webp",
    "promptTemplate": "Perfect bilateral symmetry with [Subject] standing at the exact center of the vanishing point, matching elements receding into infinity on both sides, the symmetry so absolute it becomes psychologically oppressive rather than beautiful, shot on a wide 24mm lens from a locked-off tripod at exact center height, Kubrick one-point-perspective severity",
    "whenToUse": "Sự đối xứng mạnh mẽ nhất khi bản thân trật tự mang theo cảm xúc. Sử dụng nó cho nghi lễ, quyền lực, kiểm soát, sự hoàn hảo giả tạo, hài kịch vô cảm hoặc cảm giác đáng lo ngại rằng thế giới đã được sắp xếp quá chính xác. Hành lang, mặt tiền, bảng và các ký tự được nhóm lại cung cấp cấu trúc phản chiếu tự nhiên. Hiệu ứng phụ thuộc vào vị trí chính xác của máy ảnh và các yếu tố thiết lập cân bằng. Tránh sự gần như đối xứng thông thường; những lỗi nhỏ trông có vẻ ngẫu nhiên trừ khi một sự cố ý phá vỡ khuôn mẫu là chủ đề.",
    "bestPractices": "Khóa máy ảnh vào trục trung tâm chính xác của không gian và đặt đối tượng ở điểm biến mất trung tâm. Phản ánh các hình thức kiến ​​trúc chính, đạo cụ, khoảng cách và mức độ ánh sáng trên đường phân chia dọc. Giữ độ cao của ống kính để các đường không bị trôi. Quyết định xem tính đối xứng có mang lại cảm giác vui tươi, trang trọng hay ngột ngạt hay không thông qua tỷ lệ và sự lặp lại. Trong video, sử dụng chuyển động ổn định trực tiếp dọc theo trục trung tâm; sự trôi dạt bên sẽ không xảy ra hoặc trở thành một sự đứt gãy rõ ràng của khung có trật tự.",
    "commonMistakes": [
      "Đặt máy ảnh hơi lệch trục, khiến các ô cửa, đường trần và các điểm biến mất không đồng đều trên khung hình.",
      "Phản chiếu các hình dạng rộng nhưng bỏ qua ánh sáng, màu sắc và khoảng cách, khiến bố cục chỉ thoạt nhìn mới được cân bằng.",
      "Phá vỡ tính đối xứng bằng một số đối tượng không liên quan, do đó, không có sự gián đoạn đơn lẻ nào thu được sự chú ý hoặc sức nặng của câu chuyện mà nó xứng đáng có được."
    ]
  },
  {
    "id": "leading-lines",
    "name": "Leading Lines",
    "definition": "Using natural or architectural lines within the scene — roads, fences, corridors, shadows — to guide the viewer's eye toward the subject or deep into the frame. Kubrick's one-point-perspective corridors are pure leading-line compositions, while Vilmos Zsigmond used railroad tracks and highways as leading lines in \"The Deer Hunter.\" Roger Deakins uses architectural lines in \"Skyfall\" — particularly in the Shanghai skyscraper sequence — to pull the eye through complex compositions. Christopher Doyle exploits the narrow corridors and alleyways of Hong Kong as natural leading lines in Wong Kar-wai's \"In the Mood for Love.\"",
    "category": "composition",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/leading-lines.webp",
    "promptTemplate": "Leading lines composition converging toward [Subject] at a distant vanishing point, every element in the frame designed to pull the eye irresistibly toward the focal point, morning fog softening the background and enhancing atmospheric perspective, shot on a 135mm telephoto to compress the distance and intensify convergence, desaturated cool palette, the visual magnetism of lines that refuse to let the eye wander",
    "whenToUse": "Chọn các đường dẫn khi mắt cần một lộ trình rõ ràng xuyên qua một môi trường phức tạp. Đường, hàng rào, hành lang, dầm, bóng và hàng vật thể có thể thu hút sự chú ý về phía chủ thể ở xa hoặc sâu hơn vào khung hình. Kỹ thuật này rất hữu ích cho các cuộc hành trình, khám phá, kiến ​​trúc và quy mô. Các dòng phải dẫn đến một nơi nào đó có liên quan; nếu chúng kết thúc ở không gian trống hoặc cạnh tranh với một số tiêu điểm, chúng sẽ trở nên lộn xộn hơn là định hướng trực quan.",
    "bestPractices": "Chọn một họ đường trong môi trường và hướng sự hội tụ của chúng về phía chủ thể hoặc điểm biến mất dự định. Sử dụng chiều cao máy ảnh và phối cảnh ống kính để tăng cường lực kéo mà không làm cong mọi cấu trúc một cách không tự nhiên. Hãy để sương mù, khoảng cách hoặc hiện tượng giảm âm đơn giản hóa phần cuối của khung hình. Giữ chủ đề khác biệt ở nơi các đường giao nhau. Đối với video, hãy bộc lộ hoặc tăng cường sự hội tụ thông qua chuyển động về phía trước, đồng thời duy trì điểm đến ổn định cho mắt người xem.",
    "commonMistakes": [
      "Sử dụng các đường hội tụ mạnh hướng ra xa chủ thể, hướng sự chú ý tới một góc không liên quan hoặc góc trống.",
      "Kết hợp một số hệ thống đường xung đột, khiến con mắt bị mắc kẹt giữa kiến ​​trúc, bóng tối và đường chân trời mà không có điểm đến.",
      "Làm cong các cấu trúc thẳng quá mức để tạo ra sự hội tụ, làm cho thiết kế không gian có cảm giác tổng hợp hơn là được quan sát."
    ]
  },
  {
    "id": "framing-within-frame",
    "name": "Framing Within Frame",
    "definition": "Using elements within the scene — doorways, windows, arches, branches — to create a secondary frame around the subject, adding depth, drawing focus, and suggesting entrapment or voyeurism. John Ford used doorway framing iconically in \"The Searchers\" — the final shot of John Wayne framed in a cabin door is one of cinema's most analyzed compositions. Hitchcock used frame-within-frame throughout \"Rear Window\" with the apartment windows functioning as individual movie screens. Wes Anderson frequently frames characters through windows, doors, and proscenium arches to create his dollhouse aesthetic, while Park Chan-wook uses frames-within-frames to suggest surveillance and control in \"Oldboy.\"",
    "category": "composition",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/framing-within-frame.webp",
    "promptTemplate": "Frame within a frame with [Subject] seen through a dark silhouette of an architectural opening, the framing device adding layers of depth and the voyeuristic feeling of observing from a hidden vantage, shot on a 35mm lens with exposure balanced for the subject making the surrounding frame go completely dark, the John Ford doorway composition that transforms a simple element into a metaphor for belonging and exclusion",
    "whenToUse": "Sử dụng việc đóng khung trong khung khi môi trường sẽ kiểm soát cách khán giả nhìn thấy chủ đề. Một ô cửa có thể gợi ý sự loại trừ, một cửa sổ có thể tạo ra sự mãn nhãn và một mái vòm có thể tạo thêm chiều sâu trang trọng. Kỹ thuật này có giá trị cho công việc giám sát, cách ly, khám phá và định vị theo lớp. Chọn một đối tượng đóng khung thuộc về cảnh và giữ nó ở cấp độ phụ. Nếu khung bên trong mang tính trang trí nhiều hơn con người hoặc hành động bên trong nó, tiêu điểm sẽ bị sụp đổ.",
    "bestPractices": "Đặt máy ảnh phía sau hoặc xa hơn khoảng mở thực sự ở tiền cảnh, sau đó đặt đối tượng vào trong ranh giới của nó. Hãy để khung bên ngoài tối hơn, mềm hơn hoặc bóng một phần để sự chú ý chuyển qua nó vào khung cảnh. Giữ đủ sự bất thường để duy trì chiều sâu vật lý thay vì tạo đường viền đồ họa. Căn chỉnh lỗ mở bên trong với hành động hoặc sự cô lập của chủ thể. Trong video, cho phép khung hình lộ ra, che giấu hoặc thắt chặt thông qua chuyển động của máy ảnh mà không vô tình cắt bớt hành động lấy nét.",
    "commonMistakes": [
      "Thêm đường viền trang trí không có mối quan hệ vật lý với vị trí, được hiểu là thiết kế đồ họa chứ không phải dàn dựng.",
      "Để ô cửa, cửa sổ hoặc cành cây cắt ngang khuôn mặt của đối tượng và che khuất biểu hiện cốt yếu mà không có mục đích.",
      "Phơi sáng tiền cảnh và chủ thể bằng nhau, làm phẳng các lớp chiều sâu giúp khung hình phụ trở nên hữu ích về mặt hình ảnh."
    ]
  },
  {
    "id": "negative-space",
    "name": "Negative Space",
    "definition": "Leaving large areas of the frame empty, with the subject occupying a small portion, creating breathing room, isolation, contemplation, or emphasizing the weight of absence. Michelangelo Antonioni was the master of negative space in films like \"L'Avventura\" and \"Red Desert,\" where vast empty landscapes and blank walls dwarf his characters. Sofia Coppola uses negative space in \"Lost in Translation\" to visualize loneliness in Tokyo hotel rooms. Robert Bresson's austere compositions feature deliberate emptiness, and Chloé Zhao's \"Nomadland\" places Frances McDormand as a small figure against enormous Western skies to communicate the vastness of both landscape and solitude.",
    "category": "composition",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/negative-space.webp",
    "promptTemplate": "Negative space composition with [Subject] occupying the extreme lower corner of the frame, the remaining ninety percent a vast expanse of emptiness, the scale relationship between the tiny figure and the overwhelming void creating a visceral feeling of isolation, shot on medium format with a 55mm lens at f/8 for clinical sharpness across the entire frame, the minimalist language of Antonioni where emptiness speaks louder than dialogue",
    "whenToUse": "Không gian âm phát huy tác dụng khi những gì xung quanh chủ thể cũng quan trọng như chính chủ thể đó. Sử dụng nó cho sự yên tĩnh, chờ đợi, khoảng cách cảm xúc, kiến ​​trúc ngột ngạt, phong cảnh rộng lớn hoặc không gian cho văn bản và chuyển động. Một hình dáng nhỏ bé đối lập với sự trống rỗng có thể mang trọng lượng khổng lồ, nhưng sự trống rỗng vẫn cần có hình dạng, tông màu và phương hướng. Khoảng trống không phải là khoảng trống còn sót lại; nó sẽ làm sắc nét hơn ý tưởng về sự vắng mặt, quy mô hoặc điều gì đó dự kiến ​​​​sẽ đến.",
    "bestPractices": "Đẩy đối tượng về phía một góc hoặc rìa và dành phần lớn khung hình cho bầu trời, bức tường, bóng tối hoặc phong cảnh được kiểm soát. Giữ trường trống đơn giản nhưng không chết chóc, sử dụng kết cấu, độ dốc hoặc độ sâu khí quyển tinh tế. Làm cho độ tương phản tỷ lệ không thể nhầm lẫn và ngăn các vật thể nền nhỏ lấp đầy khoảng trống. Đối với video, hãy giữ khoảng trống đủ lâu để ghi lại hoặc để chuyển động đi vào đó một cách có chủ ý thay vì liên tục lấy lại chủ đề.",
    "commonMistakes": [
      "Để lại một khoảng không gian ngẫu nhiên chưa được sử dụng xung quanh một chủ thể thường được đóng khung, điều này mang lại cảm giác ngẫu nhiên hơn là mang tính cảm xúc hoặc bố cục.",
      "Lấp đầy khoảng trống được cho là bằng các đạo cụ, kết cấu và hình ảnh phụ chi tiết cho đến khi nó không còn được coi là vắng mặt nữa.",
      "Căn giữa đối tượng trong khi chuyển động, loại bỏ sự bất đối xứng và kỳ vọng do trường mở rộng lớn tạo ra."
    ]
  },
  {
    "id": "shallow-focus",
    "name": "Shallow Focus",
    "definition": "Using a very narrow depth of field so only the subject is sharp while everything else melts into soft blur, isolating the subject and creating an intimate, dreamy quality. Wong Kar-wai and Christopher Doyle use extremely shallow focus in \"In the Mood for Love\" and \"Chungking Express\" to create their signature romantic, ephemeral atmosphere. Terrence Malick's work with Emmanuel Lubezki frequently employs razor-thin focus planes in natural light. The rise of large-sensor digital cameras and fast cine lenses has made shallow focus more accessible than ever, but master cinematographers like Hoyte van Hoytema control it with surgical precision in films like \"Her\" and \"Dunkirk.\"",
    "category": "composition",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "/img/cinematique/shallow-focus.webp",
    "promptTemplate": "Shallow focus portrait of [Subject] with only the face in razor-sharp focus while everything else dissolves into a tapestry of luminous color and bokeh, the depth of field so narrow that even the near ear goes soft, shot on a Zeiss Master Prime 85mm at T1.4 wide open, the large format sensor transforming the background into abstract painting, the Wong Kar-wai visual poetry of focus as desire",
    "whenToUse": "Lấy nét nông rất hữu ích khi một khuôn mặt, mắt, bàn tay hoặc vật thể phải chiếm ưu thế trong khung hình đông đúc hoặc thân mật. Nó có thể biến môi trường theo nghĩa đen thành màu sắc và ánh sáng, mang lại cho những bức chân dung vẻ lãng mạn, mong manh hoặc chủ quan. Kỹ thuật này cũng giúp che giấu hậu cảnh gây mất tập trung. Sử dụng nó một cách kỷ luật: quyết định mặt phẳng lấy nét chính xác và lý do cảm tính để loại trừ thông tin, đặc biệt khi chuyển động của đối tượng có thể khiến vùng sắc nét bị trôi đi một cách khó lường.",
    "bestPractices": "Chọn một mặt phẳng tiêu điểm hẹp duy nhất và đặt tên cho những gì phải giữ được độ sắc nét, chẳng hạn như mắt ở gần hơn hoặc một vật cầm tay. Hãy để phần tai gần, tiền cảnh và hậu cảnh dần dần dịu đi thay vì áp dụng một lớp mờ đồng nhất. Chỉ mô tả những hình dạng mờ lớn, mềm mại ở những nơi có điểm nhấn thực sự. Giữ các cạnh sạch sẽ ở mặt phẳng tiêu cự. Trong video, hãy tập trung vào chi tiết đã chọn thông qua chuyển động tinh tế hoặc chỉ định giá đỡ có chủ ý; đừng để độ sắc nét nhảy giữa các bề mặt không liên quan.",
    "commonMistakes": [
      "Làm mờ hậu cảnh một cách đồng nhất giống như một mặt nạ cắt rời, không có sự chuyển đổi dần dần qua tiền cảnh, độ sâu chủ thể và khoảng cách.",
      "Để cả hai mắt đều sắc nét như nhau khi chụp cận cảnh góc dốc mặc dù yêu cầu mặt phẳng tiêu điểm cực kỳ hẹp.",
      "Sử dụng tiêu điểm nông khi có một số mối quan hệ không gian quan trọng, che giấu thông tin câu chuyện mà khán giả cần so sánh."
    ]
  },
  {
    "id": "deep-focus",
    "name": "Deep Focus",
    "definition": "Everything in the frame — foreground, middle ground, and background — is in sharp focus simultaneously, allowing the viewer to explore the entire image and discover relationships between planes. Orson Welles and Gregg Toland made deep focus the defining visual innovation of \"Citizen Kane\" (1941), composing shots where action in the foreground, middle ground, and background all demanded simultaneous attention. William Wyler used deep focus in \"The Best Years of Our Lives\" to create some of cinema's most layered compositions. Jean Renoir's deep-focus staging in \"Rules of the Game\" lets multiple storylines play out in a single frame. The technique gives audiences agency — André Bazin argued it was more democratic than montage.",
    "category": "composition",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/deep-focus.webp",
    "promptTemplate": "Deep focus composition with [Subject] visible across multiple planes simultaneously, all razor-sharp from two feet to thirty feet, the viewer free to explore any layer, requiring a small aperture of f/11 and powerful invisible lighting, shot on a 21mm wide lens to maximize depth of field, the Citizen Kane democratic composition where every inch of the frame rewards examination",
    "whenToUse": "Lấy nét sâu thuộc về những cảnh có nhiều mặt phẳng mang thông tin câu chuyện đồng thời. Sử dụng nó để dàn dựng tổng thể, kiến ​​trúc, mối quan hệ quyền lực, tiết lộ trong một cảnh quay hoặc những khoảnh khắc mà khán giả nên chọn nơi để xem. Hành động tiền cảnh và hậu cảnh sắc nét có thể tạo ra sự căng thẳng mà không cần cắt. Kỹ thuật này đòi hỏi sự sắp xếp có chủ ý theo chiều sâu; nếu mọi mặt phẳng đều chi tiết như nhau nhưng lại trống rỗng về mặt tường thuật thì kết quả sẽ trở nên bận rộn hơn là xếp lớp.",
    "bestPractices": "Sắp xếp các yếu tố riêng biệt ở tiền cảnh, trung cảnh và hậu cảnh, sau đó giữ cho cả ba mặt phẳng đều sắc nét ở mức chấp nhận được. Sử dụng phối cảnh rộng hơn, tín hiệu có chiều sâu mạnh và đủ ánh sáng để duy trì kết cấu trong toàn bộ không gian. Cung cấp cho mỗi mặt phẳng một chức năng tường thuật khác nhau và ngăn không cho các hình bóng chồng chéo hợp nhất. Duy trì phối cảnh khí quyển mà không làm giảm khoảng cách. Đối với video, hãy phối hợp hành động giữa các lớp để sự chú ý có thể chuyển đổi thông qua chuyển động và thời gian chứ không phải thông qua thay đổi mờ ảo nhân tạo.",
    "commonMistakes": [
      "Giữ mọi thứ sắc nét mà không dàn dựng các mối quan hệ có ý nghĩa theo chiều sâu, tạo ra mật độ chi tiết thay vì độ phức tạp đáng kể.",
      "Xếp chồng các hình ngay phía sau nhau, khiến các hình bóng hợp nhất mặc dù mọi mặt phẳng vẫn tập trung vào mặt kỹ thuật.",
      "Thêm sương mù hoặc mờ hậu cảnh nặng nề mâu thuẫn với yêu cầu về thông tin không gian và hành động ở xa có thể đọc được."
    ]
  },
  {
    "id": "mise-en-scene",
    "name": "Mise-en-Scène",
    "definition": "The total arrangement of everything visible in the frame — set design, props, costumes, lighting, actor positioning — where every element is a deliberate storytelling choice. The concept originates from French theater and was elevated to an art form by directors like Max Ophüls in \"The Earrings of Madame de...\" and Jean Renoir in \"The Rules of the Game.\" Kubrick's obsessive mise-en-scène in \"2001\" and \"Eyes Wide Shut\" treats every prop and color as narrative text. Wes Anderson's mise-en-scène is so controlled it becomes the primary vehicle of storytelling, while Bong Joon-ho's \"Parasite\" uses the physical layout of the house as a map of class structure.",
    "category": "composition",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "/img/cinematique/mise-en-scene.webp",
    "promptTemplate": "Meticulously arranged mise-en-scene with [Subject] positioned within an environment where every element tells a story, every prop researched and placed with production designer precision, the apparent normalcy concealing visible fault lines, shot on 35mm with a 32mm lens to capture the full space as a narrative environment, the Sirkian melodrama of a world where set design is psychology",
    "whenToUse": "Mise-en-scène là lăng kính phù hợp khi toàn bộ thế giới hữu hình phải truyền đạt tính cách, giai cấp, lịch sử hoặc xung đột trước khi bất kỳ ai lên tiếng. Sử dụng nó cho nội thất được kiểm soát, môi trường mang tính biểu tượng, khối tổng thể và các khung nơi đạo cụ hoặc kiến ​​trúc mang cốt truyện. Nó đặc biệt có giá trị khi xây dựng một thế giới hình ảnh có thể lặp lại giữa các cảnh. Mọi đồ vật đều cần một lý do để tồn tại, nhưng sự sắp xếp vẫn phải mang lại cảm giác có người ở thay vì được trình bày như một danh mục manh mối.",
    "bestPractices": "Xác định môi trường, tín hiệu thời kỳ, bảng màu, trang phục, đạo cụ, logic ánh sáng và vị trí diễn viên như một hệ thống được kết nối. Gán cho mỗi đối tượng chính một mối quan hệ với chủ đề hoặc câu chuyện, sau đó loại bỏ bất kỳ thứ gì không hỗ trợ mối quan hệ đó. Sử dụng chiều sâu và sự chặn để bộc lộ trạng thái hoặc sự căng thẳng. Giữ độ mòn, khoảng cách và chi tiết vật liệu phù hợp với cài đặt. Đối với video, hãy giữ nguyên vị trí của đồ vật và tính liên tục của trang phục đồng thời cho phép người biểu diễn tương tác một cách tự nhiên với không gian được thiết kế.",
    "commonMistakes": [
      "Liệt kê các đạo cụ hấp dẫn mà không kết nối chúng với nhân vật, xung đột hoặc bối cảnh, tạo ra sự trang trí thay vì kể chuyện bằng hình ảnh.",
      "Làm quá tải mọi bề mặt với những đồ vật mang tính biểu tượng, khiến khán giả không có thứ bậc và người biểu diễn không có không gian sống đáng tin cậy.",
      "Thay đổi đồ nội thất, chi tiết trang phục hoặc vị trí ánh sáng thực tế trong các cảnh quay, phá vỡ sự mạch lạc của thế giới được thiết kế."
    ]
  },
  {
    "id": "golden-ratio",
    "name": "Golden Ratio",
    "definition": "Composing using the mathematical golden spiral (1.618:1) to place key elements along a naturally occurring logarithmic curve, creating compositions that feel organically harmonious. While debate exists about whether filmmakers consciously employ the golden ratio, analysis of work by Akira Kurosawa, Kubrick, and Spielberg reveals compositions that consistently align with the spiral. Vittorio Storaro has explicitly discussed using the golden ratio in his compositions for \"Apocalypse Now\" and \"The Last Emperor.\" Renaissance painters from Leonardo to Vermeer used the proportion extensively, and its presence in cinema connects film composition to centuries of visual art tradition.",
    "category": "composition",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "/img/cinematique/golden-ratio.webp",
    "promptTemplate": "Golden ratio spiral composition with [Subject] placed along the logarithmic curve, every major element sitting naturally along the mathematical spiral, the proportional harmony creating organic rightness that the eye follows without conscious awareness, shot on a 24mm wide-angle lens, the mathematical beauty that connects Fibonacci sequences to Renaissance painting to cinematic composition",
    "whenToUse": "Sử dụng tỷ lệ vàng khi bố cục cần dòng chảy hữu cơ thay vì lưới một phần ba có thể nhìn thấy hoặc hình thức đối xứng. Nó phù hợp với phong cảnh, chân dung trong môi trường phức tạp, tĩnh vật và hành động nhiều lớp với đường thị giác cong. Hình xoắn ốc có thể kết nối hình dạng rộng bên ngoài với một tiêu điểm chặt chẽ. Hãy coi nó như một hướng dẫn lập kế hoạch chứ không phải bằng chứng thần bí về chất lượng; hệ thống phân cấp chủ đề và dàn dựng có thể đọc được vẫn quan trọng hơn việc hiển thị toán học.",
    "bestPractices": "Đặt một đường xoắn ốc logarit trên khung và đặt đối tượng chính gần phần cong chặt nhất của nó. Sắp xếp các hình dạng môi trường lớn hơn, hình phụ hoặc đường dọc theo vòng cung mở rộng để mắt di chuyển vào trong một cách tự nhiên. Tránh vẽ một đường xoắn ốc theo nghĩa đen vào trong bối cảnh trừ khi câu chuyện yêu cầu như vậy. Giữ tiêu điểm mạnh nhất thông qua độ tương phản và chi tiết. Đối với video, hãy để chuyển động của máy ảnh hoặc chủ thể theo đường cong trong khi vẫn giữ được điểm đích hình ảnh cuối cùng.",
    "commonMistakes": [
      "Buộc mọi chỗ dựa vào một hình xoắn ốc có thể nhìn thấy được, làm cho bố cục có cảm giác như được sơ đồ hóa thay vì được sắp xếp một cách tự nhiên xung quanh sự chú ý.",
      "Sử dụng tỷ lệ vàng để thay thế cho độ tương phản, độ sâu và phân cấp chủ thể, khiến tiêu điểm trở nên yếu.",
      "Gây nhầm lẫn kỹ thuật này với tính đối xứng ở giữa, loại bỏ đường cong mở rộng sẽ hướng dẫn người xem."
    ]
  },
  {
    "id": "depth-of-field",
    "name": "Depth of Field",
    "definition": "The range of distance in a scene that appears acceptably sharp — manipulating depth of field controls what the viewer focuses on and how they perceive spatial depth. The creative use of depth of field defines entirely different cinematic schools: Gregg Toland's infinite depth in \"Citizen Kane\" versus the paper-thin focus of Wong Kar-wai's films. Robert Richardson uses depth of field as an emotional instrument in Oliver Stone's \"JFK\" and Tarantino's \"The Hateful Eight.\" Modern large-format sensors on cameras like the ARRI Alexa 65 have given cinematographers like Hoyte van Hoytema and Linus Sandgren even more control over focus separation.",
    "category": "composition",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/depth-of-field.webp",
    "promptTemplate": "Selective depth of field isolating [Subject] in a narrow focused slice, everything in front and behind melting into graduated blur, the cinematic depth of field that modern anamorphic and large-format cinematography has made the visual signature of prestige filmmaking, shot on a large format sensor with an 85mm lens at T1.3",
    "whenToUse": "Độ sâu trường ảnh là lựa chọn cốt lõi bất cứ khi nào khán giả cần hướng dẫn về nơi cần nhìn và mức độ quan trọng của không gian. Tiêu điểm hẹp cô lập cảm xúc hoặc chi tiết; tiêu điểm rộng cho thấy các mối quan hệ trên toàn khung hình. Sử dụng nó để kiểm soát sự thân mật, hồi hộp, thông tin và chiều sâu không gian. Quyết định trước khi nhắc xem bối cảnh là bối cảnh, sự phân tâm hay câu chuyện tích cực. Quyết định đó sẽ xác định phạm vi lấy nét chứ không phải tùy chọn mặc định cho độ mờ điện ảnh.",
    "bestPractices": "Nêu rõ khoảng cách gần nhất và xa nhất trông sắc nét, sau đó xác định chính xác đối tượng tiêu điểm. Để có độ sâu chọn lọc, hãy yêu cầu độ mờ tăng dần trước và sau mặt phẳng đó; để có chiều sâu rộng, giữ nguyên chi tiết có thể đọc được thông qua tiền cảnh, trung cảnh và hậu cảnh. Kết hợp hành vi lấy nét rõ ràng với phối cảnh và khoảng cách. Trong video, hãy chỉ định xem tiêu điểm có bị khóa, bám theo chủ thể hay chuyển có chủ ý giữa các mặt phẳng hay không. Giữ cho quá trình chuyển đổi diễn ra suôn sẻ và được thúc đẩy bởi sự chú ý.",
    "commonMistakes": [
      "Yêu cầu độ sâu trường ảnh đậm chất điện ảnh mà không đặt tên mặt phẳng tiêu điểm, khiến độ sắc nét tùy ý và không ổn định trên toàn ảnh.",
      "Áp dụng độ mờ bằng nhau cho các vật thể ở các khoảng cách khác nhau, điều này sẽ phá hủy các tín hiệu không gian dần dần được tạo ra bởi tiêu điểm quang học.",
      "Giữ nền mềm mại khi hành động của nó mang thông tin cốt yếu về câu chuyện mà người xem vẫn có thể tiếp cận được."
    ]
  },
  {
    "id": "foreground-interest",
    "name": "Foreground Interest",
    "definition": "Placing objects or elements in the immediate foreground to add depth and dimension, creating a layered image that draws the viewer through multiple planes of the composition. Steven Spielberg consistently uses foreground objects — a glass of water in \"Jurassic Park,\" toys in \"E.T.\" — to add depth and narrative context. Roger Deakins layers his compositions with foreground elements in \"Skyfall\" and \"Blade Runner 2049\" to create immersive three-dimensionality. Emmanuel Lubezki places branches, grass, and natural elements in the immediate foreground of nearly every exterior shot in Malick's films to create the feeling of being inside the environment rather than observing it.",
    "category": "composition",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/foreground-interest.webp",
    "promptTemplate": "Foreground interest composition with [Subject] in the mid-ground and blurred elements dominating the immediate foreground, three distinct depth planes creating immersive physical space, the foreground elements partially obscuring the subject adding voyeuristic tension, shot on a 40mm lens at T2 creating visible focus separation between planes, Kodak 5219 500T with desaturated earth tones, the Spielberg technique of putting the viewer inside the world",
    "whenToUse": "Sự quan tâm đến tiền cảnh sẽ hữu ích khi một cảnh có cảm giác bằng phẳng, được quan sát từ bên ngoài hoặc thiếu sức căng về không gian. Sử dụng các cành cây, kính, đồ nội thất, đạo cụ, kiến ​​trúc hoặc một phần hình ảnh gần đó để đặt người xem vào trong môi trường. Nó có thể thêm bối cảnh, sự che giấu, quy mô hoặc khía cạnh mãn nhãn trong khi hướng sự chú ý đến hành động ở giữa mặt đất. Đối tượng tiền cảnh phải thuộc về vị trí và hỗ trợ cảnh; làm mờ ngẫu nhiên ở rìa khung hình là không đủ.",
    "bestPractices": "Đặt một vật thể lớn rất gần máy ảnh, đi vào một phần khung hình, với chủ thể chính ở giữa và hậu cảnh có thể đọc được ở phía sau. Quyết định xem tiền cảnh vẫn mềm mại, sắc nét, phản chiếu hay đổ bóng dựa trên vai trò của nó. Sử dụng sự chồng chéo để tạo chiều sâu mà không che khuất hành động thiết yếu của chủ thể. Đối với video, hãy để thị sai phân tách các mặt phẳng trong quá trình chuyển động của camera; các phần tử ở gần sẽ di chuyển nhanh hơn trong khung hình so với các phần tử ở xa.",
    "commonMistakes": [
      "Thêm các đốm màu mờ ẩn danh ở các góc, không có kết nối dễ nhận biết với vị trí hoặc ý nghĩa của cảnh.",
      "Che khuôn mặt hoặc hành động của đối tượng bằng các vật thể ở tiền cảnh tạo ra vật cản mà không gây căng thẳng, bối cảnh hoặc lộ liễu.",
      "Di chuyển tất cả các mặt phẳng độ sâu ở cùng tốc độ màn hình, loại bỏ thị sai khiến việc phân lớp tiền cảnh trở nên thuyết phục về mặt vật lý."
    ]
  },
  {
    "id": "balancing-elements",
    "name": "Balancing Elements",
    "definition": "Distributing visual weight across the frame so no single area feels too heavy or empty — a large subject on one side can be balanced by a smaller but visually striking element on the other. Akira Kurosawa was a master of compositional balance, carefully arranging actors and set pieces to create harmonious frames in \"Ran\" and \"Kagemusha.\" Emmanuel Lubezki balances Malick's human subjects against natural elements — a face balanced by a cloud formation, a body balanced by a tree. The principle derives from classical painting composition and is instinctive for experienced cinematographers like Roger Deakins, who balances frames intuitively in every setup.",
    "category": "composition",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/balancing-elements.webp",
    "promptTemplate": "Balanced composition with [Subject] on one third of the frame counterweighted by a visually striking element on the opposite side, the balance not symmetrical but felt, the eye moving comfortably between the two anchoring elements, shot on medium format with a 65mm lens at f/5.6, the compositional harmony of a frame where every element has been weighed and placed with the precision of a balance scale",
    "whenToUse": "Các yếu tố cân bằng rất hữu ích khi khung hình không đối xứng có cảm giác bị lệch ngay cả khi đối tượng nằm ở đúng vị trí. Một hình lớn bị tắt tiếng có thể được đối trọng bằng một vật sáng nhỏ hơn, đường nét đậm hoặc mảng tương phản tập trung. Sử dụng phương pháp này trong đối thoại, phong cảnh, tĩnh vật và chân dung môi trường. Sự cân bằng không đòi hỏi kích thước hoặc sự đối xứng bằng nhau; nó đòi hỏi mắt phải cảm nhận được áp lực thị giác được phân bổ có chủ ý.",
    "bestPractices": "Đặt chủ thể chính ở một bên, sau đó chọn thành phần phụ ở phía đối diện với đủ độ tương phản, màu sắc, sự tách biệt hoặc hình dạng để đối lập với chủ thể đó. Giữ cho yếu tố phụ rõ ràng ít quan trọng hơn trong khi vẫn tạo cho nó đủ khối lượng hình ảnh. Kiểm tra khoảng cách giữa cả neo và các cạnh khung. Trong video, hãy duy trì sự cân bằng khi các hình di chuyển bằng cách thay đổi vị trí camera, chặn hoặc nhấn mạnh vào hậu cảnh thay vì thêm các đối tượng tùy ý.",
    "commonMistakes": [
      "Chỉ khớp cả hai mặt theo kích thước, bỏ qua mức độ thay đổi của độ sáng, màu sắc, kết cấu và sự tách biệt đối với khối lượng thị giác được cảm nhận.",
      "Làm cho đối trọng nổi bật như chủ thể, phân chia sự chú ý giữa hai tiêu điểm đòi hỏi khắt khe như nhau.",
      "Khắc phục sự mất cân bằng bằng một chỗ dựa không liên quan, không có chỗ trong môi trường hoặc kết nối với hiện trường."
    ]
  },
  {
    "id": "diagonal-lines",
    "name": "Diagonal Lines",
    "definition": "Using diagonal elements in composition to create dynamic energy and movement, as diagonals feel inherently unstable and active compared to horizontal or vertical lines. Carol Reed filled \"The Third Man\" with diagonal compositions — tilted streets, canted angles, shadow lines cutting diagonally across walls — to visualize post-war Vienna's moral instability. Michael Bay uses aggressive diagonal compositions in his action sequences to maximize kinetic energy. Christopher Nolan employs diagonal lines in \"Inception\" during the dream sequences where architecture literally tilts, and Ridley Scott uses diagonal rain and light shafts throughout \"Blade Runner\" to keep the frame perpetually in motion.",
    "category": "composition",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/diagonal-lines.webp",
    "promptTemplate": "Diagonal line composition with [Subject] surrounded by aggressive 45-degree angles, nothing horizontal or vertical in the entire composition, every line tilted and active, the deliberate absence of any stable reference creating dynamic instability and forward momentum, shot on a 24mm wide-angle with slight barrel distortion enhancing angular dynamism",
    "whenToUse": "Các đường chéo phù hợp với hành động, sự theo đuổi, sự mất cân bằng, xung đột và những cảnh chống lại trật tự theo chiều ngang hoặc chiều dọc yên tĩnh. Đường phố, bóng tối, mưa, kiến ​​trúc, cơ thể và góc máy ảnh đều có thể tạo ra các góc nghiêng chủ động xuyên qua khung hình. Sử dụng chúng để hướng mắt về phía trước hoặc khiến thế giới trở nên bất ổn. Kỹ thuật mất lực khi mỗi đường nghiêng ngẫu nhiên; chọn hướng chủ đạo và để các đường chéo đối lập chỉ xuất hiện khi va chạm hoặc lực cản quan trọng.",
    "bestPractices": "Xây dựng bố cục xung quanh một đường chéo mạnh, gần như cắt ngang từ góc dưới lên khu vực phía trên đối diện. Căn chỉnh kiến ​​trúc, bóng tối, mưa hoặc chuyển động cơ thể theo hướng đó, sau đó đặt đối tượng ở nơi đường nét gây chú ý. Giảm thiểu các tham chiếu ngang ổn định nếu mục tiêu là sự không ổn định. Chỉ sử dụng đường chéo đối diện thứ hai để tạo ra sự va chạm có chủ ý. Đối với video, hãy thực hiện chuyển động dọc theo góc nghiêng đã chọn hoặc hiển thị thông qua độ nghiêng của camera được kiểm soát chứ không phải rung chuyển khung hình tùy ý.",
    "commonMistakes": [
      "Nghiêng mọi vật thể theo một hướng khác nhau, tạo ra sự nhầm lẫn về mặt thị giác thay vì một nguồn năng lượng động có thể đọc được.",
      "Để lại một đường chân trời thống trị hoàn toàn ổn định trong khi các đạo cụ phụ nghiêng một cách ngẫu nhiên, làm suy yếu cảm giác bất ổn dự kiến.",
      "Sử dụng các đường chéo trong một khung cảnh trang trọng yên tĩnh, nơi áp lực động học của chúng mâu thuẫn với nhịp độ và dàn dựng cảm xúc."
    ]
  },
  {
    "id": "triangular-composition",
    "name": "Triangular Composition",
    "definition": "Arranging key elements to form a triangle within the frame, creating a stable, hierarchical structure that naturally guides the eye between three points of interest. Renaissance painters like Leonardo da Vinci used triangular composition as a foundation — the Mona Lisa and The Last Supper are both built on triangular structures. Akira Kurosawa arranges his samurai in triangular formations for stability and power in \"Seven Samurai.\" Steven Spielberg uses triangular staging in his group dialogue scenes, and Kubrick's symmetrical compositions often embed triangular sub-structures that give the frame its sense of architectural solidity.",
    "category": "composition",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/triangular-composition.webp",
    "promptTemplate": "Triangular composition with [Subject] arranged to form a triangle within the frame, the apex drawing the eye first then naturally guiding it down along the diagonal lines to the base, shot on a 50mm lens at eye level, the classical compositional structure that Da Vinci and Kurosawa both understood as the geometry of power and stability",
    "whenToUse": "Bố cục hình tam giác có tác dụng khi ba người, đồ vật hoặc điểm neo trực quan cần có mối quan hệ ổn định và thứ bậc rõ ràng. Nó phù hợp với cuộc đối thoại nhóm, bối cảnh lãnh đạo, cảnh gia đình và những khoảnh khắc mà đỉnh cao sẽ thống trị hai điểm hỗ trợ. Mắt di chuyển tự nhiên xung quanh hình tam giác, làm cho các khối dày đặc dễ đọc hơn. Sử dụng sự thay đổi về chiều cao và khoảng cách; một sự sắp xếp hoàn toàn bằng nhau có thể mang lại cảm giác trang trọng, trong khi một hình tam giác không bằng phẳng sẽ tạo ra sự căng thẳng hơn mà không làm mất đi cấu trúc.",
    "bestPractices": "Chọn chủ thể nổi bật làm đỉnh và đặt hai điểm neo phụ thấp hơn và xa nhau hơn để tạo thành chân đế. Sử dụng ánh nhìn, vai, đồ nội thất hoặc đường nét kiến ​​trúc để củng cố hình tam giác mà không vẽ nó theo nghĩa đen. Giữ mỗi điểm khác biệt về mặt trực quan và tránh các đầu chồng chéo. Điều chỉnh chiều cao và chiều rộng để kiểm soát độ ổn định: phần đế rộng có cảm giác vững chắc, trong khi hình dạng dốc hẹp có cảm giác phân cấp hơn. Trong video, hãy duy trì mối quan hệ bằng cách chặn khi người nói chuyển sự chú ý.",
    "commonMistakes": [
      "Việc đặt ba hình trên một đường ngang sẽ loại bỏ đỉnh và thu gọn hệ thống phân cấp dự kiến.",
      "Vẽ các đạo cụ hình tam giác rõ ràng xung quanh nhóm, làm cho cấu trúc bố cục cơ bản có cảm giác theo nghĩa đen và gượng ép.",
      "Chồng chéo các điểm neo phía dưới phía sau chủ thể chiếm ưu thế, do đó ba điểm không thể được đọc dưới dạng các vị trí riêng biệt."
    ]
  },
  {
    "id": "centered-composition",
    "name": "Centered Composition",
    "definition": "Placing the subject dead center in the frame — when done deliberately, it creates a powerful, confrontational, or hypnotically ordered effect that requires confidence and intentionality. Wes Anderson builds his entire visual identity around centered subjects, creating his trademark \"planimetric\" compositions. Kubrick's centered one-point-perspective shots in \"The Shining\" and \"Full Metal Jacket\" use the center position for maximum psychological impact. Jonathan Demme's centered close-ups in \"Silence of the Lambs\" break the conventional off-center framing of dialogue scenes to create confrontational direct address.",
    "category": "composition",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "/img/cinematique/centered-composition.webp",
    "promptTemplate": "Centered composition with [Subject] at the exact mathematical center, the space arranged in perfect bilateral symmetry around them, the deliberate center placement creating ritual importance and confrontational directness, shot on a 28mm lens from a locked tripod at center height, deep focus rendering every detail sharp, Wes Anderson planimetric aesthetic meets Kubrick one-point-perspective severity",
    "whenToUse": "Bố cục tập trung có tác dụng mạnh mẽ khi chủ đề phải đối mặt với người xem, ra lệnh cho tầm quan trọng của nghi lễ hoặc trở thành trục cố định của một thế giới có trật tự. Sử dụng nó cho lời nói trực tiếp, chân dung trang trọng, góc nhìn một điểm, hài kịch cụ thể và không gian cứng nhắc về mặt tâm lý. Nó đòi hỏi sự tự tin vì mắt có thể nhận thấy mọi sự mất cân bằng xung quanh trung tâm. Tránh căn giữa mặc định để thuận tiện; khung hình phải đạt được áp lực, sự rõ ràng hoặc trật tự thôi miên từ quyết định.",
    "bestPractices": "Đặt trục trung tâm của đối tượng vào điểm giữa chính xác của khung và căn chỉnh máy ảnh với điểm biến mất của môi trường. Sắp xếp các hình khối xung quanh để củng cố vị trí đó thông qua tính đối xứng, các đường hội tụ hoặc không gian âm cân bằng. Giữ độ cao của ống kính và cố ý thực hiện bất kỳ sự bất đối xứng nào. Đối tượng có thể nhìn thẳng vào camera để đối đầu hoặc đứng yên trong không gian được chỉ định. Đối với video, hãy sử dụng khung hình bị khóa hoặc chuyển động thẳng về phía trục trung tâm mà không bị trôi sang bên.",
    "commonMistakes": [
      "Việc căn giữa đối tượng trong khi kiến ​​trúc và các đường nét biến mất nằm ngoài trục, làm cho bố cục có cảm giác bị lệch một cách bất cẩn.",
      "Sử dụng vị trí trung tâm trong mỗi cảnh quay, giảm bớt sự lựa chọn bắt buộc thành thói quen thị giác không được kiểm tra mà không cần leo thang.",
      "Việc thêm một số yếu tố bên có độ sáng bằng nhau sẽ kéo sự chú ý ra khỏi trục chính xác mà bố cục thiết lập."
    ]
  },
  {
    "id": "headroom",
    "name": "Headroom",
    "definition": "The space between the top of a subject's head and the top of the frame — too much feels disconnected, too little feels cramped, and proper headroom creates a natural, comfortable framing. Deliberately violating headroom conventions can be powerful: the Coen Brothers frequently cut off the top of heads or leave excessive headroom for comedic or unsettling effect in \"A Serious Man\" and \"No Country for Old Men.\" Spike Jonze uses unconventional headroom in \"Her\" to create a feeling of emotional imbalance. Proper headroom is one of the first technical disciplines taught to camera operators and cinematographers.",
    "category": "composition",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/headroom.webp",
    "promptTemplate": "Proper headroom in a medium close-up of [Subject], eyes positioned along the upper-third line with a comfortable gap between the crown and the top of the frame, enough space to feel natural without wasting frame real estate, shot on a 85mm lens at T2.8, the invisible grammar of good camera operation",
    "whenToUse": "Khoảng không gian xung quanh rất quan trọng bất cứ khi nào một người chiếm giữ khung hình, đặc biệt là trong các cuộc phỏng vấn, đối thoại, chân dung và đưa tin chuyển động. Khoảng cách đo được phía trên núm vặn giúp bố cục luôn thoải mái; quá ít áp lực sẽ tạo cảm giác chật chội, trong khi quá nhiều không gian sẽ khiến khuôn mặt bị ngắt kết nối với khung. Chỉ phá vỡ quy ước khi cần phải ghi nhận sự khó chịu, hài kịch hoặc mất cân bằng cảm xúc. Số lượng chính xác cũng thay đổi theo kích thước ảnh, tư thế và liệu đối tượng đang đứng, ngồi hay di chuyển.",
    "bestPractices": "Đặt mắt của đối tượng gần một phần ba phía trên và chừa một khoảng trống có kiểm soát giữa đỉnh và cạnh trên. Điều chỉnh khoảng cách đó theo kích thước cảnh quay: cận cảnh chặt hơn có thể cắt tóc một cách có chủ ý, trong khi những cảnh quay trung bình cần nhiều khoảng trống hơn. Giữ cằm và vai cân bằng với không gian phía trên. Đối với video, hãy duy trì khoảng không khi đối tượng đứng, ngồi hoặc đi ngang qua khung hình bằng cách điều chỉnh độ nghiêng camera một cách trơn tru; đừng để cạnh trên đập vào đầu.",
    "commonMistakes": [
      "Để lại một vùng trống lớn phía trên đầu trong một bức chân dung cận cảnh, làm cho đối tượng có vẻ chìm vào trong khung hình.",
      "Việc vô tình cắt phần vương miện thay vì sử dụng chế độ cắt cận cảnh tự tin, nhất quán với mục đích trực quan rõ ràng.",
      "Cho phép khoảng không trên đầu thay đổi đột ngột trong khi di chuyển, khiến máy ảnh có cảm giác phản ứng thay vì được kiểm soát."
    ]
  },
  {
    "id": "lead-room",
    "name": "Lead Room",
    "definition": "Empty space in front of a moving subject or in the direction they're looking, giving the subject visual breathing room and implying destination or intent. Lead room is one of the fundamental principles of shot composition — violating it deliberately creates tension and unease, as the Coen Brothers and David Fincher sometimes do in thriller sequences. Denis Villeneuve uses generous lead room in \"Arrival\" to suggest the vastness of the unknown that Amy Adams's character faces. Breaking the convention — placing a character at the leading edge of the frame with nothing ahead — immediately signals to the audience that something is wrong.",
    "category": "composition",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/lead-room.webp",
    "promptTemplate": "Lead room composition with [Subject] positioned on one side of the frame with generous empty space in the direction of their gaze or movement, the open space suggesting possibility and destination, the satisfying rightness of proper lead room creating visual momentum, shot on a 50mm lens, the composition feeling natural and kinetically forward",
    "whenToUse": "Khoảng không gian dẫn là cần thiết khi đối tượng nhìn, bước đi, lái xe hoặc di chuyển về một phía của khung hình. Không gian phía trước giúp hành động đó có thể đi đến một nơi nào đó và cho phép khán giả dự đoán điểm đến, con người hoặc mối đe dọa. Sử dụng không gian rộng rãi để có khả năng và động lực tiến về phía trước. Cố tình loại bỏ nó khi nhân vật cảm thấy bị chặn, bị truy đuổi hoặc bị mắc kẹt ở rìa. Kỹ thuật này phải tuân theo ánh nhìn và chuyển động thực tế chứ không chỉ đơn thuần là hướng cơ thể hướng về phía trước.",
    "bestPractices": "Đặt đối tượng chuyển động hoặc đang nhìn ở phía đối diện với hướng của chúng, để lại một trường mở lớn hơn phía trước mắt hoặc chuyển động. Giữ cho điểm đến có thể đọc được thông qua môi trường, ánh sáng hoặc khung hình, ngay cả khi chưa có gì được đưa vào. Giảm khoảng trống ở phía sau đối tượng mà không làm chúng bị dồn lại. Đối với video, hãy xoay hoặc theo dõi ở tốc độ bảo toàn vùng mở. Nếu căng thẳng đòi hỏi phải phá vỡ quy tắc, hãy ghim chủ thể gần mép trên và làm cho việc thiếu không gian trở nên rõ ràng.",
    "commonMistakes": [
      "Để lại không gian trống phía sau đối tượng chuyển động trong khi nén khu vực phía trước, làm cho khung hình có cảm giác lùi về mặt thị giác.",
      "Đi theo hướng cơ thể thay vì hướng mắt, điều này có thể tạo ra khoảng trống khi nhìn nhầm.",
      "Định vị lại đối tượng liên tục trong khi chụp ảnh theo dõi, xóa khoảng trống phía trước để truyền đạt điểm đến và động lượng."
    ]
  },
  {
    "id": "visual-weight",
    "name": "Visual Weight",
    "definition": "The perceived heaviness of elements in a composition based on size, color, contrast, texture, and isolation — understanding visual weight is key to creating balanced or deliberately unbalanced frames. Akira Kurosawa demonstrated extraordinary sensitivity to visual weight in \"Ran,\" balancing armies against landscapes with painterly precision. Wes Anderson manipulates visual weight through color — a single bright element against a muted background carries enormous visual mass. Roger Deakins understands that a small bright area in deep shadow can outweigh a large dark area, using this principle to control attention throughout the Coen Brothers' filmography.",
    "category": "composition",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/visual-weight.webp",
    "promptTemplate": "Visual weight study with [Subject] as a small but vivid element carrying visual mass disproportionate to its physical size through isolation, color saturation, and tonal contrast, the composition deliberately exploring how chromatic density creates perceived heaviness independent of actual size, shot on a 35mm lens at f/5.6 with clinical sharpness throughout",
    "whenToUse": "Hãy suy nghĩ về trọng lượng hình ảnh khi bố cục có vẻ không ổn mặc dù khoảng cách hoặc vị trí lưới chính xác. Độ sáng, màu sắc bão hòa, chi tiết sắc nét, sự tách biệt và khuôn mặt có thể làm cho một yếu tố nhỏ có trọng lượng lớn hơn một hình thức yên tĩnh lớn hơn nhiều. Nguyên tắc này giúp cân bằng các khung hình bất đối xứng hoặc tạo ra sự khó chịu có chủ ý. Sử dụng nó khi chụp chân dung môi trường, dàn dựng quần thể và bố cục đồ họa. Đánh giá xem mắt nhìn thấy gì đầu tiên và nó ở đó trong bao lâu, không chỉ mỗi phần tử chiếm bao nhiêu diện tích vật lý.",
    "bestPractices": "Xác định khối lượng hình ảnh chính, sau đó kiểm soát kích thước, độ sáng, độ bão hòa màu, kết cấu và sự cô lập của nó. Chống lại nó bằng một yếu tố khác có phẩm chất kết hợp tạo ra sự cân bằng mong muốn, ngay cả khi kích thước vật lý của nó khác nhau. Giữ các khu vực có mức độ ưu tiên thấp yên tĩnh hơn thông qua việc giảm độ tương phản và chi tiết. Kiểm tra đường đi của mắt từ cái nhìn đầu tiên đến điểm neo thứ cấp. Đối với video, hãy tính đến trọng lượng chuyển động: một hình sáng nhỏ băng qua trường tối có thể chiếm ưu thế trong khung hình hơn là kiến ​​trúc tĩnh.",
    "commonMistakes": [
      "Chỉ cân bằng các đối tượng theo kích thước vật lý trong khi bỏ qua lực kéo không cân xứng của các khuôn mặt, các điểm sáng và màu sắc bão hòa.",
      "Cung cấp cho mọi khu vực độ tương phản và kết cấu như nhau, khiến khung hình không có hệ thống phân cấp rõ ràng về tầm quan trọng được nhận thấy.",
      "Thêm một đối trọng sống động ở gần rìa, vô tình kéo người xem ra khỏi khung hình thay vì ngang qua khung hình."
    ]
  },
  {
    "id": "repetition-and-pattern",
    "name": "Repetition and Pattern",
    "definition": "Using recurring visual elements — shapes, colors, objects — to create rhythm and unity in the frame, where breaking a pattern draws immediate attention to the disruption. Kubrick's symmetrical corridors in \"The Shining\" use pattern repetition to create hypnotic unease, and any break in the pattern (the twins at the end of a hallway) becomes terrifying. Wes Anderson builds frames from repeated elements — rows of identical doors, matching uniforms, symmetrical windows. Zhang Yimou uses massive pattern compositions of soldiers, lanterns, and fabric in \"Hero\" and \"House of Flying Daggers\" where a single disruption in the array carries narrative weight.",
    "category": "composition",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/repetition-and-pattern.webp",
    "promptTemplate": "Repetition and pattern composition with [Subject] as the single disruption in an otherwise uniform array, hundreds of repeated elements creating mesmerizing regularity with one anomaly immediately drawing the eye, the visual principle that the human eye is hardwired to detect anomalies in regular patterns, shot on a 50mm lens at f/4 with the full pattern sharp edge to edge, warm ambient lighting",
    "whenToUse": "Sự lặp lại và khuôn mẫu phát huy tác dụng khi trật tự, quy mô, thói quen, sự tuân thủ hoặc nỗi ám ảnh chiếm ưu thế trong khung hình. Các dãy cửa sổ, đồng phục, cửa ra vào, đèn chiếu sáng hay cơ thể tạo nên nhịp điệu khiến mắt đọc nhanh. Một điều bất thường sau đó sẽ có được sức mạnh tường thuật ngay lập tức. Sử dụng kỹ thuật này cho kiến ​​trúc, đám đông, nghi lễ, hài kịch hoặc cảm giác khó chịu. Các đơn vị lặp lại cần có hình dạng và khoảng cách nhất quán; nếu sự biến đổi đã có ở khắp mọi nơi, thì sự gián đoạn dự định sẽ không thể tách rời khỏi tiếng ồn thông thường.",
    "bestPractices": "Xây dựng một dãy rõ ràng các hình dạng, màu sắc, đối tượng hoặc hình ảnh định kỳ với khoảng cách và hướng nhất quán. Chọn một chủ đề làm điểm đột phá có ý nghĩa duy nhất thông qua màu sắc, tư thế, sự vắng mặt hoặc phương hướng. Giữ cho toàn bộ mẫu có thể đọc được trên khung hình và tạo ra độ tương phản đủ bất thường để ghi nhận mà không trở nên không liên quan. Đối với video, hãy thiết lập nhịp điệu đều đặn trước khi tạo ra sự gián đoạn, sau đó duy trì tính liên tục trong các đơn vị lặp lại khi máy ảnh di chuyển qua hoặc xuyên qua chúng.",
    "commonMistakes": [
      "Thay đổi màu sắc, kích thước và khoảng cách trên mỗi đơn vị lặp lại, không để lại hình mẫu ổn định nào cho khán giả nhận ra.",
      "Đưa ra nhiều điểm bất thường cùng một lúc, điều này sẽ phân tán sự chú ý và làm suy yếu sức thuyết phục của sự gián đoạn có chủ ý.",
      "Cắt mảng quá chặt đến mức sự lặp lại không thể tích lũy thành nhịp điệu hoặc truyền đạt một hệ thống có trật tự lớn hơn."
    ]
  },
  {
    "id": "figure-ground",
    "name": "Figure-Ground Relationship",
    "definition": "The perceptual relationship between a subject (figure) and its background (ground) — strong figure-ground separation makes subjects pop, while ambiguous relationships create artistic tension. Film noir deliberately plays with figure-ground by merging characters into shadows, while Spielberg ensures crisp separation for visual clarity. Kubrick uses monochromatic figure-ground merging in \"Full Metal Jacket\" to show soldiers losing individuality. Roger Deakins creates separation through subtle lighting rather than color contrast, and cinematographer James Laxton uses luminous skin against dark backgrounds in \"Moonlight\" and \"If Beale Street Could Talk\" to celebrate Black skin tones.",
    "category": "composition",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/figure-ground.webp",
    "promptTemplate": "Strong figure-ground relationship with [Subject] separated from the background by extreme tonal and color contrast creating instant three-dimensional pop, the form isolated as cleanly as a paper cutout, shot on medium format with a 110mm lens at f/2.8 creating slight background softening that adds optical separation to the tonal separation, the fundamental perceptual principle that makes cinema readable",
    "whenToUse": "Việc kiểm soát hình ảnh mặt đất trở nên quan trọng bất cứ khi nào đối tượng có nguy cơ biến mất vào hậu cảnh hoặc cố tình hòa nhập với nó. Sự tách biệt mạnh mẽ hỗ trợ sự rõ ràng, hiện diện giống như biểu tượng và đọc trực quan nhanh chóng; sự mơ hồ có thể tạo ra sự ngụy trang, mất danh tính hoặc hồi hộp. Sử dụng sự khác biệt về tông màu, màu sắc, tiêu điểm, góc cạnh và ánh sáng để quyết định mối quan hệ. Mục tiêu không phải lúc nào cũng là pop tối đa. Chọn xem khán giả nên tìm thấy hình ảnh đó ngay lập tức hay cố gắng tìm ra nó.",
    "bestPractices": "Xác định hình và nền dưới dạng các trường âm và màu riêng biệt, sau đó quyết định cường độ ranh giới của chúng. Để tách biệt rõ ràng, hãy sử dụng giá trị tương phản, hạn chế ánh sáng ở cạnh hoặc làm mềm nền nhẹ. Để tránh sự mơ hồ, hãy kết hợp các đường nét và tông màu đã chọn trong khi vẫn giữ lại một manh mối tiết lộ chủ đề. Tránh các tiếp tuyến ngẫu nhiên nơi các cạnh hợp nhất không thể đoán trước. Trong video, hãy giữ logic phân tách mạch lạc khi hình di chuyển trên các nền thay đổi hoặc để việc hợp nhất xảy ra tại thời điểm tường thuật đã lên kế hoạch.",
    "commonMistakes": [
      "Sự trùng khớp giữa chủ thể và giá trị nền một cách tình cờ, khiến các khuôn mặt hoặc cử chỉ quan trọng biến mất mà không có mục đích tường thuật.",
      "Phác thảo toàn bộ hình ảnh bằng độ sáng nhân tạo, tạo ra sự tách biệt mà bỏ qua hướng ánh sáng thực tế của khung cảnh.",
      "Sử dụng độ tương phản tối đa trên mọi cạnh, làm cho đối tượng trông như được dán vào môi trường thay vì nhúng vào trong đó."
    ]
  },
  {
    "id": "contrast-composition",
    "name": "Contrast",
    "definition": "Using opposing visual elements — light vs dark, large vs small, warm vs cool, sharp vs soft — to create visual interest, hierarchy, and dramatic tension within the frame. Akira Kurosawa was perhaps cinema's greatest practitioner of compositional contrast, pitting tiny samurai against massive rainstorms in \"Seven Samurai\" and fragile humans against erupting volcanoes of color in \"Ran.\" David Lean used scale contrast — small figures against enormous landscapes — as his signature in \"Lawrence of Arabia\" and \"Doctor Zhivago.\" Christopher Nolan employs contrast between warm intimate interiors and cold vast exteriors throughout \"Interstellar\" to visualize the tension between human connection and cosmic indifference.",
    "category": "composition",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/contrast-composition.webp",
    "promptTemplate": "High contrast composition with [Subject] as a tiny warm-colored element against a vast cool-toned environment, every type of visual contrast at work simultaneously — warm against cool, small organic shape against massive geometry, soft texture against hard surface, movement against stillness, shot on large format 65mm with a 100mm telephoto compressing the background, Kodak Vision3 50D saturated daylight stock",
    "whenToUse": "Sự tương phản rất hữu ích khi một khung cần có hệ thống phân cấp ngay lập tức hoặc khi hai lực lượng cảm thấy đối lập nhau về mặt cảm xúc. Kết hợp ấm áp với mát mẻ, nhỏ với lớn, mềm mại với cứng, hữu cơ với hình học hoặc chuyển động với tĩnh lặng. Nó có thể làm rõ chủ đề hoặc biến toàn bộ bố cục thành xung đột. Chọn một phe đối lập chính và ủng hộ nó với những người khác một cách cẩn thận. Nếu mọi thuộc tính chiến đấu cùng một lúc, hình ảnh sẽ trở nên ồn ào thay vì mạnh mẽ.",
    "bestPractices": "Trước tiên, hãy chọn độ tương phản chủ đạo, chẳng hạn như một hình ảnh nhỏ ấm áp trên nền một cấu trúc rộng lớn và mát mẻ. Chỉ củng cố nó thông qua quy mô, kết cấu và sự tĩnh lặng khi những khác biệt đó hỗ trợ cho cùng một ý tưởng. Giữ cho chủ đề có thể đọc được và ngăn chặn các màu hoặc đối tượng thứ cấp tạo ra xung đột đối thủ. Hãy mô tả cụ thể cả hai phe đối lập. Đối với video, hãy để độ tương phản tồn tại thông qua chuyển động và cắt xén hoặc bộc lộ hết bên này đến bên kia để sự va chạm diễn ra có chủ đích.",
    "commonMistakes": [
      "Xếp chồng các đối lập không liên quan về màu sắc, tỷ lệ, kết cấu và chuyển động cho đến khi khung hình mất đi một đối số hình ảnh nổi bật.",
      "Sử dụng độ tương phản tông màu mạnh mà không kiểm soát vùng sáng nhất, cho phép làm nổi bật hậu cảnh để đánh cắp thứ bậc của đối tượng.",
      "Việc chọn các màu đối lập làm vật trang trí trong khi kích thước, ánh sáng và cách dàn dựng không tạo ra sự căng thẳng thực sự giữa các yếu tố."
    ]
  },
  {
    "id": "cross-cutting",
    "name": "Cross-Cutting",
    "definition": "Alternating between two or more scenes happening simultaneously in different locations, building tension by implying convergence and creating dramatic parallels between storylines. D.W. Griffith pioneered cross-cutting in \"Intolerance\" (1916), intercutting between four historical periods. Christopher Nolan elevated cross-cutting to structural principle in \"Inception\" and \"Dunkirk,\" weaving three timelines with different tempos. Francis Ford Coppola's baptism sequence in \"The Godfather\" — cross-cutting between the church ceremony and the simultaneous murders — remains one of cinema's most powerful uses of the technique.",
    "category": "editing",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "/img/cinematique/cross-cutting.webp",
    "promptTemplate": "Cross-cutting between two simultaneous scenes involving [Subject], the alternation between warm and cold tones accelerating in rhythm as both events build toward climax, the visual contrast intensifying the irony, each cut creating a collision of meaning that neither scene could generate alone, warm Kodak tones on one side against cold pushed processing on the other",
    "whenToUse": "Xuyên suốt là cấu trúc phù hợp khi các sự kiện riêng biệt xảy ra cùng lúc và có được sức mạnh bằng cách so sánh. Sử dụng nó để giải cứu, truy đuổi, nghi lễ chống lại bạo lực, các quyết định song song hoặc cốt truyện dẫn đến va chạm. Mỗi lần trở về nên bổ sung thêm thông tin hoặc thắt chặt mối quan hệ thời gian. Kỹ thuật này thất bại khi các cảnh chỉ xen kẽ nhau mà không có sự leo thang, độ tương phản theo chủ đề hoặc cảm giác đáng tin cậy rằng nhịp điệu của chúng thuộc về một chiếc đồng hồ kịch tính.",
    "bestPractices": "Xác định hai vị trí riêng biệt, bảng màu trực quan và hành động xảy ra đồng thời. Bắt đầu với các phần dài hơn trong mỗi cảnh, sau đó rút ngắn phần xen kẽ khi áp lực tăng lên. Ghép các cử chỉ, âm thanh, hình dạng hoặc nhịp điệu cảm xúc giữa các đoạn cắt mà sự xung đột ý nghĩa sẽ giúp ích. Duy trì tủ quần áo, địa lý và tính liên tục của hành động trong cả hai lĩnh vực. Kết thúc ở một cao trào chung, hội tụ trực tiếp hoặc sự chia ly có mục đích. Đừng để một cốt truyện tiến triển kịp thời trong khi cốt truyện kia xuất hiện bị đóng băng giữa các lần quay lại.",
    "commonMistakes": [
      "Thay thế các địa điểm ở một tốc độ cố định mà không tăng mức đặt cược, rút ​​ngắn khoảng thời gian hoặc tiết lộ kết nối thời gian mạnh mẽ hơn.",
      "Mất tính liên tục bên trong một chuỗi, do đó các đối tượng, vị trí hoặc hành động sẽ được đặt lại mỗi lần chỉnh sửa quay lại đó.",
      "Ghép nối các cảnh không có mối quan hệ chủ đề hoặc nhân quả, khiến cấu trúc có cảm giác tùy tiện hơn là tăng cường lẫn nhau."
    ]
  },
  {
    "id": "jump-cut",
    "name": "Jump Cut",
    "definition": "A cut between two sequential shots of the same subject from a similar angle, creating a jarring jump in time — once considered a mistake, now used intentionally for energy, anxiety, or time compression. Jean-Luc Godard made the jump cut famous in \"Breathless\" (1960), using it partly out of necessity to trim a too-long film and partly as a deliberate rejection of smooth Hollywood continuity. The technique became a signature of the French New Wave and has since been adopted by filmmakers from Guy Ritchie to Gus Van Sant. Darren Aronofsky uses rapid-fire jump cuts in \"Requiem for a Dream\" to convey the fragmented consciousness of addiction.",
    "category": "editing",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "/img/cinematique/jump-cut.webp",
    "promptTemplate": "Jump cut sequence of [Subject] with the background and position shifting abruptly between cuts while the camera angle remains essentially the same, the jarring temporal discontinuity making time feel broken and reassembled, each cut a tiny violence against smooth continuity, shot on handheld 16mm with rough grain and blown-out highlights, the French New Wave rebellion against invisible editing",
    "whenToUse": "Sử dụng đoạn cắt nối khi tính liên tục mượt mà sẽ che giấu sự lo lắng, tốc độ, sự nhàm chán hoặc sự rời rạc trong một khoảnh khắc. Nó có thể nén các hành động lặp đi lặp lại, làm lộ ra thời gian bị thiếu hoặc khiến màn trình diễn có cảm giác không ổn định. Giữ góc máy ảnh và chủ thể đủ giống nhau để có thể đọc rõ bước nhảy tạm thời. Việc cắt giảm sẽ mang lại cảm giác đột ngột có chủ ý chứ không giống như việc đưa tin thất bại. Nó hoạt động đặc biệt hiệu quả trong các bức chân dung không ngừng nghỉ, thói quen, du lịch, diễn tập và các chuỗi chủ quan.",
    "bestPractices": "Khóa một góc máy ảnh tương tự và lấy khung hình qua nhiều khoảnh khắc liên tiếp, sau đó loại bỏ chuyển động kết nối giữa chúng. Hãy để tư thế, vị trí hậu cảnh hoặc trạng thái đối tượng của chủ thể nhảy về phía trước trong khi thiết lập vẫn được giữ nguyên. Giữ mỗi điểm gián đoạn sắc nét, không bị hòa tan hoặc làm mịn. Thay đổi độ dài quãng để định hình nhịp điệu mà không làm mất khuôn mẫu. Duy trì các chi tiết về danh tính, tủ quần áo và địa điểm để khán giả đọc được thời gian bị hỏng thay vì các cảnh quay thay thế không liên quan.",
    "commonMistakes": [
      "Thay đổi góc, ống kính và vị trí cùng nhau, được coi là một vết cắt thông thường thay vì bước nhảy tạm thời.",
      "Làm mịn sự gián đoạn bằng phép nội suy hoặc hòa tan chuyển động, loại bỏ lực giật mang lại đặc tính cho kỹ thuật này.",
      "Cho phép danh tính hoặc tủ quần áo của chủ thể trôi đi giữa các lần cắt, biến sự phân mảnh có chủ ý thành sự thất bại liên tục."
    ]
  },
  {
    "id": "dissolve",
    "name": "Dissolve",
    "definition": "One image gradually fades out as the next fades in, both visible simultaneously during the transition, suggesting the passage of time, a dream state, or a thematic connection. Ingmar Bergman used dissolves as emotional bridges in \"Wild Strawberries,\" where the overlap between present and memory becomes the film's central visual metaphor. Terrence Malick uses extended dissolves in \"The Tree of Life\" to blend cosmic and domestic imagery. Stanley Kubrick's dissolve from the star gate sequence to the neoclassical bedroom in \"2001\" is one of cinema's most disorienting transitions. Wong Kar-wai layers dissolves in \"In the Mood for Love\" to make time itself feel fluid and unreliable.",
    "category": "editing",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/dissolve.webp",
    "promptTemplate": "Dissolve transition with two overlapping images of [Subject], both simultaneously visible for a long four-second overlap, the soft double-exposure quality of two temporalities occupying one image, warm sepia tones mixing with saturated color, the nostalgic ache of time-dissolving cinema",
    "whenToUse": "Hòa tan phù hợp với quá trình chuyển đổi trong đó hai hình ảnh sẽ cùng tồn tại trước khi hình ảnh này thay thế hình ảnh kia. Sử dụng nó để ghi nhớ, thời gian đã trôi qua, giấc mơ, liên tưởng về cảm xúc hoặc so sánh trực quan giữa các địa điểm và thời kỳ. Sự chồng chéo dài hơn mang lại cảm giác trôi chảy và đáng suy ngẫm; những cái ngắn hơn có tác dụng như một lối đi nhẹ nhàng. Chọn hình ảnh có hình dạng, tông màu hoặc ý nghĩa tương tác trong quá trình hòa trộn. Nếu sự chồng chéo chứa đựng sự lộn xộn không liên quan, quá trình chuyển đổi sẽ trở nên lầy lội hơn là kết nối về mặt cảm xúc.",
    "bestPractices": "Chọn cảnh quay đi và đến với các tiêu điểm tương thích hoặc ý nghĩa tương phản có chủ ý. Làm mờ hình ảnh đầu tiên trong khi hình ảnh thứ hai tăng lên trong một khoảng thời gian xác định, cho phép cả hai vẫn hiển thị ở giữa. Căn chỉnh các khuôn mặt, đường chân trời, vật thể hoặc hình dạng ánh sáng khi sự chồng chéo của chúng sẽ tạo ra ý nghĩa thứ ba. Giữ độ phơi sáng được kiểm soát để phần trung tâm không bị trôi đi. Giữ nguyên tính liên tục của mỗi cảnh quay trước và sau quá trình chuyển đổi, đồng thời tránh biến đổi đặc điểm nhận dạng trong quá trình hòa trộn.",
    "commonMistakes": [
      "Hòa tan giữa các hình ảnh bận rộn như nhau, tạo ra một khoảng giữa lộn xộn, nơi không thể đọc được chủ đề cũng như kết nối chủ đề.",
      "Để các khuôn mặt hoặc vật thể biến dạng vào nhau, biến quá trình chuyển đổi theo lớp thành hiệu ứng biến hình ngoài ý muốn.",
      "Sử dụng cùng một độ dài hòa tan cho mọi chuyển tiếp, bất kể câu chuyện yêu cầu sự dịu dàng, đoạn văn hay mất phương hướng."
    ]
  },
  {
    "id": "fade-in-out",
    "name": "Fade In/Out",
    "definition": "The image gradually appears from or disappears to black (or white) — fade to black signals an ending or major time passage while fade from black signals a new beginning or chapter. The Coen Brothers use long, slow fades to black as chapter markers in \"No Country for Old Men,\" each fade feeling like a door closing permanently. Kubrick's fade to white at the end of \"2001\" suggests transcendence. Martin Scorsese uses the fade to black at the end of \"Goodfellas\" and \"The Irishman\" with devastating finality. The pace of the fade itself communicates meaning — a quick fade feels like a curtain dropping while a slow fade feels like consciousness dimming.",
    "category": "editing",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/fade-in-out.webp",
    "promptTemplate": "Fade to black from [Subject], the image gradually losing luminance over six seconds as the figure becomes shadow and the shadow becomes part of the darkness, the fade so gradual that the exact moment of disappearance is unidentifiable, the emotional weight of permanent conclusion, the visual equivalent of a long exhale",
    "whenToUse": "Tăng dần hoặc giảm dần khi câu chuyện cần có ranh giới rõ ràng thay vì kết nối hình ảnh trực tiếp giữa các cảnh quay. Màu đen mờ dần có thể kết thúc một chương, gợi ý một đoạn văn dài hoặc để ý thức rút đi; sự mờ dần của màu đen có thể thiết lập một sự khởi đầu hoặc quay trở lại. Khoảng thời gian mang ý nghĩa. Sử dụng độ mờ nhanh để kết thúc quyết định và độ mờ chậm để thể hiện sự kiệt sức, đau buồn hoặc biến mất dần dần.",
    "bestPractices": "Chọn xem hình ảnh chuyển từ màu đen, chuyển sang màu đen hay sử dụng màu trắng để có chuyển tiếp sáng hơn rõ rệt. Đặt thời lượng chính xác và giữ nguyên bố cục của ảnh trong khi độ chói thay đổi đồng đều. Để làm mờ dần, hãy để các chi tiết biến mất theo thứ tự tông màu cho đến khi đối tượng hòa vào bóng tối; để làm mờ dần, hãy đảo ngược sự xuất hiện đó một cách rõ ràng. Giữ màu đen hoặc trắng cuối cùng đủ lâu để đăng ký. Không thay đổi hình dạng chủ thể hoặc vị trí máy ảnh trong quá trình chuyển đổi trừ khi có chỉ dẫn riêng.",
    "commonMistakes": [
      "Coi sự mờ dần như một sự thay đổi cảnh mặc định, làm suy yếu cảm giác mạnh mẽ của chương, phần kết hoặc đoạn văn mà nó truyền tải.",
      "Thay đổi độ phơi sáng không đồng đều giữa các đối tượng, khiến quá trình chuyển đổi trông giống như bị mất ánh sáng hơn là toàn bộ hình ảnh bị mờ đi.",
      "Cắt bỏ trước khi toàn bộ màu đen có thời gian để đăng ký, giảm bớt sự khép kín cảm xúc và tạm dừng cấu trúc."
    ]
  },
  {
    "id": "montage",
    "name": "Montage",
    "definition": "A sequence of short shots edited together to compress time, convey information, or build emotional momentum — from training sequences to falling-in-love sequences, montage is cinema's time machine. Sergei Eisenstein theorized montage as cinema's unique art form in the 1920s, and his Odessa Steps sequence in \"Battleship Potemkin\" remains the most studied montage in film history. Rocky Balboa's training montage set to \"Gonna Fly Now\" defined the modern montage for a generation. Martin Scorsese uses montage in \"Goodfellas\" to compress years of criminal excess into exhilarating minutes, and Edgar Wright creates kinetic comic montages in the Cornetto trilogy.",
    "category": "editing",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/montage.webp",
    "promptTemplate": "Montage sequence compressing time around [Subject], each shot shorter than the last as momentum accelerates, the editing rhythm itself building like a crescendo, culminating in a final sustained shot of completion, the cinematic time machine that compresses months into two minutes of escalating visual rhythm",
    "whenToUse": "Montage được xây dựng để đáp ứng những thay đổi quan trọng nhưng không cần diễn ra trong thời gian thực. Sử dụng nó để đào tạo, du lịch, xây dựng, nghiên cứu, yêu đương, suy sụp hoặc bất kỳ quá trình nào có các cột mốc rõ ràng. Mỗi lần bắn phải nâng cao trạng thái, không lặp lại cùng một thông tin. Nhịp điệu có thể tăng tốc khi hoàn thành hoặc chậm lại khi lùi lại. Trình tự cần có điều kiện bắt đầu rõ ràng, diễn biến có ý nghĩa và hình ảnh cuối cùng chứng minh điều gì đã thay đổi.",
    "bestPractices": "Xác định quy trình và liệt kê một chuỗi các cột mốc trực quan riêng biệt. Bắt đầu với những cảnh quay dài hơn để thiết lập nhiệm vụ, sau đó thắt chặt thời lượng khi năng lực, mức độ khẩn cấp hoặc sự tích lũy tăng lên. Sử dụng các hành động lặp lại, tạo khung phù hợp hoặc các đối tượng lặp lại để thể hiện sự thay đổi có thể đo lường được. Thay đổi tỷ lệ cảnh quay trong khi vẫn đảm bảo tính liên tục của chủ thể và môi trường. Xây dựng hướng tới một hình ảnh thu lợi bền vững thay vì dừng lại một cách ngẫu nhiên. Hãy cắt đoạn hướng dẫn nhịp điệu hành động hoặc âm nhạc nhưng đảm bảo mọi nhịp vẫn dễ đọc mà không cần âm thanh.",
    "commonMistakes": [
      "Lặp đi lặp lại những cảnh quay hấp dẫn mà không có cột mốc mới nào, khiến trình tự trở nên tràn đầy năng lượng nhưng mang tính tường thuật tĩnh.",
      "Tăng tốc cắt trước khi quá trình được thiết lập, do đó khán giả không thể hiểu hoạt động hoặc thay đổi nào đang bị nén.",
      "Kết thúc bằng một đoạn ngắn khác thay vì một kết quả rõ ràng xác nhận sự hoàn thành, thất bại hoặc chuyển đổi."
    ]
  },
  {
    "id": "smash-cut",
    "name": "Smash Cut",
    "definition": "An abrupt, jarring cut between two vastly different scenes — often from quiet to loud, calm to chaos, or a character saying \"nothing could go wrong\" to everything going wrong. Edgar Wright is the modern master of the smash cut, using it for comedic whiplash throughout \"Shaun of the Dead\" and \"Hot Fuzz.\" Kubrick's smash cut from the bone to the satellite in \"2001\" is the most dramatic temporal smash cut in cinema. The Coen Brothers use smash cuts for dark comedy in \"Fargo\" and \"No Country for Old Men,\" and David Lynch uses them in \"Mulholland Drive\" to shatter the viewer's sense of narrative stability.",
    "category": "editing",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/smash-cut.webp",
    "promptTemplate": "Smash cut from absolute serenity to total chaos involving [Subject], an instantaneous hard cut with no transition, no preparation, the tonal whiplash so extreme the viewer physically reacts, the editorial equivalent of a slap, the technique that weaponizes the cut itself as a storytelling instrument",
    "whenToUse": "Sử dụng đoạn cắt đột ngột khi bản thân quá trình chuyển đổi sẽ gây sốc, hài kịch, sợ hãi hoặc thay đổi đột ngột về quy mô và thời gian. Các phiên bản mạnh nhất va chạm với các trạng thái trái ngược nhau: tĩnh lặng với ồn ào, tĩnh lặng với chuyển động, tự tin với thất bại hoặc thân mật với bao la. Xây dựng đủ bình tĩnh hoặc kỳ vọng trước khi chém để đòn roi hạ cánh. Tránh sử dụng nó nhiều lần vì khán giả sẽ nhanh chóng thích nghi và cuộc đình công của người biên tập sẽ mất đi sức mạnh.",
    "bestPractices": "Xây dựng hai bức ảnh có tông màu, âm lượng, chuyển động, bảng màu hoặc tỷ lệ đối lập rõ rệt. Giữ đoạn đầu tiên đủ lâu để thiết lập trạng thái của nó, sau đó cắt ngay lập tức ở nhịp dễ bị tổn thương hoặc mỉa mai nhất. Không sử dụng tính năng hòa tan, flash hoặc làm mịn chuyển tiếp. Làm cho khung mở đầu của cảnh quay thứ hai trở nên dễ đọc và khác biệt tối đa ngay lập tức. Chỉ duy trì tính liên tục có chủ ý khi hình dạng hoặc cụm từ phù hợp làm nổi bật trò đùa hoặc cú sốc. Hãy để âm thanh thay đổi trên cùng một khung hình với hình ảnh.",
    "commonMistakes": [
      "Thêm đèn flash, độ mờ hoặc đoạn tăng tốc giữa các cảnh, giảm bớt va chạm mạnh sẽ tạo ra phản ứng.",
      "Cắt giữa các cảnh có chuyển động và tông màu tương tự nhau, để lại quá ít độ tương phản cho một bài xã luận thực sự.",
      "Lặp đi lặp lại những đoạn cắt ấn tượng trong suốt một cảnh phim, khiến khán giả mong đợi chúng và làm giảm bớt sự ngạc nhiên của họ."
    ]
  },
  {
    "id": "long-take",
    "name": "Long Take",
    "definition": "An extended shot that runs significantly longer than conventional cuts, building real-time tension, showcasing performance, and immersing the viewer in unbroken space and time. Alfonso Cuarón and Emmanuel Lubezki pushed the long take to new extremes in \"Children of Men\" with the legendary six-minute car ambush, and later in \"Gravity\" and \"Roma.\" Alejandro González Iñárritu's \"Birdman\" is constructed as one apparent continuous take. Andrei Tarkovsky's long takes in \"Stalker\" and \"Mirror\" unfold with hypnotic patience, while Béla Tarr's \"Sátántangó\" contains takes lasting over ten minutes. The long take is cinema's way of refusing to blink.",
    "category": "editing",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "/img/cinematique/long-take.webp",
    "promptTemplate": "Long unbroken take following [Subject] in real time through continuous space, the single take creating immersive experience where the viewer is trapped in real-time, shot on Steadicam with an ARRI Alexa Mini and 21mm Zeiss lens, the shifting light creating a natural color temperature journey, the unbroken continuity refusing to let the viewer escape into a cut",
    "whenToUse": "Cảnh quay dài có tác dụng khi thời lượng thời gian thực, tính liên tục về không gian hoặc sự căng thẳng về hiệu suất sẽ khiến khán giả bị mắc kẹt bên trong sự kiện. Sử dụng nó cho các lối vào, các cuộc trò chuyện thay đổi quyền lực, hành trình xuyên qua không gian phức tạp, hành động với vị trí địa lý dễ đọc hoặc kiên nhẫn quan sát. Cảnh quay phải phát triển nội bộ thông qua việc chặn, chuyển động của máy ảnh, tiêu điểm và khả năng hiển thị. Chỉ riêng chiều dài không phải là thành tựu; mỗi giai đoạn sẽ tạo ra một mối quan hệ mới mà không cần dựa vào sự cắt giảm.",
    "bestPractices": "Lập kế hoạch cho một tuyến đường không bị gián đoạn với khung bắt đầu rõ ràng, một số nhịp chặn và điểm cuối quyết định. Chỉ di chuyển máy ảnh khi chủ thể hành động hoặc một tiết lộ thúc đẩy nó, duy trì vị trí địa lý ổn định và hướng màn hình nhất quán. Phối hợp hoạt động lấy nét, phơi sáng và hậu cảnh khi ảnh đi vào các vùng mới. Hãy để người biểu diễn vượt qua tiền cảnh và hậu cảnh mà không bị lệch danh tính. Tránh các bước nhảy ẩn, đặt lại hoặc thay đổi đối tượng không thể thực hiện được. Xây dựng sự căng thẳng thông qua thời gian thực và thay đổi khoảng cách gần thay vì các chỉnh sửa mô phỏng.",
    "commonMistakes": [
      "Để máy ảnh lang thang mà không bị chặn, thông tin hoặc áp lực mới, gây nhầm lẫn giữa thời lượng và sự đắm chìm có ý nghĩa.",
      "Thay đổi cửa, đạo cụ, phụ kiện hoặc nhận dạng chủ thể ở giữa cảnh, phá vỡ không gian liên tục mà kỹ thuật phụ thuộc vào.",
      "Ẩn các vết cắt rõ ràng đằng sau mọi vật thể đi qua, biến hiệu suất không bị gián đoạn thành một thủ thuật thị giác được khâu lại."
    ]
  },
  {
    "id": "freeze-frame",
    "name": "Freeze Frame",
    "definition": "Action suddenly stops as a single frame is held on screen — the exclamation point of cinema, used for endings, revelations, or comic emphasis. François Truffaut's freeze frame ending of \"The 400 Blows\" — young Antoine Doinel reaching the sea and turning to look directly at the camera as the image freezes — is one of cinema's most iconic final images. Martin Scorsese uses the freeze frame throughout \"Goodfellas\" as a storytelling device, and the final freeze frame of \"Butch Cassidy and the Sundance Kid\" immortalized its heroes mid-action. Spike Lee employs freeze frames with title cards as a recurring stylistic device.",
    "category": "editing",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/freeze-frame.webp",
    "promptTemplate": "Freeze frame of [Subject] caught at the precise instant of peak emotional or physical expression, the film grain suddenly visible as motion stops, the abrupt silence of a world frozen in time, movement arrested as an editorial exclamation point, Kodak Tri-X black and white grain, the immortality of a single stolen instant",
    "whenToUse": "Khung hình đóng băng thuộc về thời điểm khán giả nên kiểm tra, ghi nhớ hoặc mang theo ngoài thời gian bình thường. Sử dụng nó để kết thúc, tiết lộ, giới thiệu, nhấn mạnh truyện tranh hoặc thể hiện cảm xúc và thể chất đỉnh cao. Hình ảnh được chọn cần có hình bóng mạnh mẽ và khuôn mặt hoặc hành động dễ đọc vì chuyển động không còn có thể cung cấp ngữ cảnh nữa. Đóng băng là một dấu chấm than biên tập; việc sử dụng thường xuyên sẽ biến dấu chấm câu thành một kiểu cách và làm suy yếu tính chất cuối cùng của nó.",
    "bestPractices": "Xây dựng chuyển động hướng tới một đỉnh chính xác, sau đó giữ khung hình chính xác đó mà không nội suy, trôi máy hoặc chuyển động nền sống động. Chọn khoảnh khắc có cử chỉ, biểu cảm và bố cục rõ ràng, không bị mờ chuyển tiếp. Để kết cấu hoặc hạt hiển thị khi chuyển động dừng lại và quyết định xem âm thanh có bị cắt, tiếp tục hay giảm xuống mức im lặng hay không. Giữ đủ lâu để hình ảnh thay đổi ý nghĩa theo thời gian. Chỉ tiếp tục chuyển động nếu việc đóng băng không được coi là hình ảnh cuối cùng.",
    "commonMistakes": [
      "Dừng lại trên khung chuyển tiếp bị mờ chuyển động trong đó vị trí của tay, khuôn mặt hoặc cơ thể không thể mang lại ý tưởng rõ ràng.",
      "Cho phép tóc, khói, hình nền hoặc chuyển động của máy ảnh tiếp tục, biến việc dừng hình thành lỗi hình ảnh có chọn lọc.",
      "Sử dụng nhiều lần đóng băng mà không có lý do về cấu trúc, giảm cử chỉ biên tập mang tính quyết định thành phong cách bề mặt lặp đi lặp lại."
    ]
  },
  {
    "id": "split-screen",
    "name": "Split Screen",
    "definition": "The frame is divided into two or more sections, each showing a different angle, location, or timeline simultaneously, showing parallel action, phone conversations, or multiple perspectives at once. Brian De Palma made split screen his signature, using it in \"Carrie,\" \"Dressed to Kill,\" and \"Snake Eyes\" to create impossible simultaneity. Ang Lee used complex multi-panel split screens in \"Hulk\" to emulate comic book layouts. Denis Villeneuve employed split screen in \"Enemy\" to visualize duality, and the technique has experienced a revival in television through shows like \"24\" where real-time parallel action demanded simultaneous visual presentation.",
    "category": "editing",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "/img/cinematique/split-screen.webp",
    "promptTemplate": "Split screen dividing the frame with [Subject] visible in both halves simultaneously, one side warm-toned and the other cool-toned, the vertical divide becoming the physical and emotional distance, the De Palma technique of making the audience omniscient observers of parallel realities occupying the same frame",
    "whenToUse": "Chia đôi màn hình có hiệu quả khi khán giả cần truy cập đồng thời vào các vị trí, góc độ, dòng thời gian hoặc phối cảnh riêng biệt. Sử dụng nó cho các cuộc gọi điện thoại, hành động song song, giám sát, so sánh, tính hai mặt hoặc các sự kiện có thời gian quan trọng hơn sự thống nhất về không gian. Mỗi bảng điều khiển cần có chức năng rõ ràng và hệ thống phân cấp trực quan tương thích. Phương pháp này trở nên mệt mỏi khi mỗi bảng đều chứa chuyển động và chi tiết như nhau, vì vậy hãy quyết định nơi mà sự chú ý sẽ chuyển đến từng thời điểm.",
    "bestPractices": "Chia canvas thành hai hoặc nhiều bảng rõ ràng với tỷ lệ và ranh giới rõ ràng. Chỉ định cho mỗi bảng một vị trí, bảng màu, góc camera và hành động, sau đó đồng bộ hóa các khoảnh khắc sẽ kết nối qua dải phân cách. Giữ danh tính và môi trường ổn định trong các phần riêng của chúng. Kiểm soát sự chú ý bằng cách thay đổi chuyển động, độ tương phản hoặc thời lượng để mỗi lần chỉ có một bảng điều khiển chiếm ưu thế. Ngăn chặn chân tay, khuôn mặt và đồ vật chảy máu qua các ranh giới trừ khi sự chuyển đổi có chủ ý thống nhất các không gian.",
    "commonMistakes": [
      "Lấp đầy mọi khung hình bằng những chuyển động mãnh liệt không kém, buộc người xem bỏ lỡ những hành động thiết yếu diễn ra cùng lúc.",
      "Thay đổi kích thước và đường viền của bảng điều khiển mà không có mục đích tường thuật, khiến bố cục có cảm giác không ổn định thay vì cố ý năng động.",
      "Cho phép các đặc điểm hoặc hình nền của nhân vật trôi dạt giữa các bảng, làm suy yếu sự khác biệt giữa các vị trí hoặc phối cảnh riêng biệt."
    ]
  },
  {
    "id": "reaction-shot",
    "name": "Reaction Shot",
    "definition": "A cut to a character's facial response to an event, dialogue, or revelation — often more powerful than showing the action itself, as it lets the audience experience the emotional impact. Spielberg understands this deeply: in \"Schindler's List,\" we often see Oskar Schindler's face reacting to horror rather than the horror itself, and the reaction is more devastating. Hitchcock said \"the size of the close-up on a reaction shot should be directly proportional to the importance of the information.\" The Kuleshov Effect proves that the same neutral face takes on entirely different meanings based on what precedes it — making the reaction shot cinema's purest form of emotional manipulation.",
    "category": "editing",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/reaction-shot.webp",
    "promptTemplate": "Reaction shot close-up of [Subject] capturing the exact moment of emotional impact, the eyes widening, jaw muscles clenching, every micro-expression playing across the face in three seconds, soft directional light illuminating every subtle muscular change, shot on an 85mm lens with eyes along the upper third, the Spielberg technique of making the audience feel an event through its reflection on a human face",
    "whenToUse": "Sử dụng cảnh quay phản ứng khi khán giả trải nghiệm một sự kiện thông qua tác động của nó lên con người thay vì chỉ qua cảnh tượng. Nó rất quan trọng đối với những tiết lộ, sự sợ hãi, đau buồn, hài kịch, sự hấp dẫn và sự thay đổi quyền lực. Kích thước và thời lượng phải phù hợp với tầm quan trọng của thông tin. Giữ đủ lâu để bộc lộ những biểu hiện vi mô, nhưng tránh giải thích cảm giác đó bằng hiệu suất cường điệu khi một thay đổi nhỏ ở mắt, hàm hoặc hơi thở trở nên mạnh mẽ hơn.",
    "bestPractices": "Thiết lập những gì nhân vật nhìn thấy hoặc nghe thấy, sau đó chuyển sang chế độ xem cận cảnh ngay khi va chạm đầu tiên. Giữ đường kẻ mắt nhất quán với ảnh trước và tạo khung cho mắt rõ ràng. Chỉ đạo một chuỗi các thay đổi nhỏ về thể chất: chuyển trọng tâm, nghiến chặt hàm, nín thở, mở to mắt hoặc chớp mắt trễ. Hãy để phản ứng phát triển trong vài nhịp trước khi cắt đi. Giữ nguyên nhận dạng khuôn mặt và tính liên tục của ánh sáng, đồng thời tránh thêm chuyển động của máy ảnh không liên quan làm ảnh hưởng đến hiệu suất.",
    "commonMistakes": [
      "Thể hiện phản ứng trước thông tin kích hoạt, gây nhầm lẫn giữa nguyên nhân và kết quả trừ khi việc dự đoán có chủ ý mới là vấn đề chính.",
      "Đẩy mọi đặc điểm trên khuôn mặt vào biểu cảm cực độ, thay thế việc khám phá cảm xúc cụ thể bằng một vở kịch melodrama rộng rãi, khó hiểu.",
      "Phá vỡ đường nhìn hoặc tính liên tục của ánh sáng, tạo cảm giác cận cảnh tách biệt khỏi sự kiện và không gian xung quanh."
    ]
  },
  {
    "id": "cutaway",
    "name": "Cutaway",
    "definition": "A brief cut to something outside the main action — a clock on the wall, a nervous hand, a landscape outside — adding context, creating pacing, or building parallel meaning. Yasujiro Ozu's famous \"pillow shots\" are extended cutaways to empty spaces, clotheslines, and chimneys that provide contemplative breathing room between scenes in \"Tokyo Story.\" Hitchcock uses cutaways to ticking bombs and dripping faucets to build suspense. The Coen Brothers cut away to environmental details — a wood chipper, a wind-blown tumbleweed — that become darkly comedic commentary. Terrence Malick's cutaways to nature are practically a genre unto themselves.",
    "category": "editing",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/cutaway.webp",
    "promptTemplate": "Cutaway to [Subject] isolated in tight framing, the mundane object suddenly loaded with meaning by its context, shot on a 100mm macro lens with the background softly blurred, warm tungsten light, the Hitchcock principle that showing the ticking clock is more suspenseful than showing the argument",
    "whenToUse": "Sử dụng đoạn cắt khi hành động chính cần hơi thở, manh mối hoặc điểm áp lực bên ngoài phần trao đổi ngay lập tức. Một chiếc đồng hồ có thể thắt chặt sự hồi hộp, một bàn tay nhàn rỗi có thể bộc lộ sự lo lắng và một căn phòng trống có thể khiến cảm xúc lắng đọng. Nó đặc biệt hữu ích giữa các đoạn hội thoại, trong quá trình chuyển tiếp hoặc bất cứ khi nào môi trường nên bình luận về các nhân vật mà không lên tiếng thay họ.",
    "bestPractices": "Trước tiên, hãy thiết lập cảnh chính, sau đó cô lập một vật thể hoặc chi tiết môi trường gần đó trong khung hình chặt chẽ. Giữ ánh sáng, thời gian trong ngày và thiết kế sản xuất phù hợp với hành động rộng hơn. Giảm thông tin nền với tiêu điểm nông nhưng làm cho chi tiết được chọn không thể nhầm lẫn. Giữ đủ lâu để khán giả nhận ra ý nghĩa của nó, sau đó quay lại hành động. Phần cắt bỏ sẽ làm thay đổi cảm giác của khung cảnh xung quanh chứ không phải hoạt động giống như lớp phủ trang trí.",
    "commonMistakes": [
      "Chọn một đối tượng ngẫu nhiên không có mối liên hệ cảm xúc, tường thuật hoặc nhịp điệu với khung cảnh xung quanh.",
      "Thay đổi ánh sáng hoặc bối cảnh quá rõ ràng đến mức đoạn cắt cảnh có cảm giác mượn từ một trình tự khác.",
      "Giữ chi tiết sau khi ý nghĩa của nó rõ ràng, làm giảm căng thẳng thay vì mài giũa nó."
    ]
  },
  {
    "id": "cut-in",
    "name": "Cut-In",
    "definition": "A cut to a closer shot of something already visible in the wider frame — zooming in on hands, a prop, or a facial detail — focusing attention on a specific element within the scene. Sergio Leone's films are built on the rhythm of wide shots cutting in to extreme close-ups of eyes and gun hands. Quentin Tarantino uses stylized cut-ins to food, drinks, and bare feet as signature moments. David Fincher cuts in to hands and screens and text messages with forensic precision in \"The Social Network\" and \"Gone Girl.\" The cut-in is the editor's way of saying \"look at this\" — directing attention from the general to the specific.",
    "category": "editing",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/cut-in.webp",
    "promptTemplate": "Cut-in to a tight close-up of [Subject] revealing a telling detail, shot on a 100mm macro lens at T2, the directorial decision to abandon the wider view and find the truth hiding in a specific detail",
    "whenToUse": "Sử dụng phần giới thiệu khi một phần tử đã có trong chế độ xem chính đáng được nhấn mạnh một cách đột ngột. Những bàn tay siết chặt quanh tấm kính, một tin nhắn ẩn trên màn hình hoặc một ánh mắt lóe lên trong mắt ai đó có thể chuyển hướng khung cảnh mà không thay đổi vị trí. Nó hoạt động tốt nhất khi khán giả lần đầu tiên hiểu được phạm vi địa lý rộng hơn, sau đó cần một sự kiện, cử chỉ hoặc đồ vật chính xác để đọc chính xác thời điểm.",
    "bestPractices": "Tạo một chế độ xem rộng hơn, rõ ràng, nơi có thể nhìn thấy chi tiết, sau đó cắt thành một góc chặt chẽ hơn nhiều trên cùng phần tử đó. Giữ nguyên vị trí tay, hướng đối tượng, tủ quần áo, hướng ánh sáng và hướng màn hình trong quá trình chỉnh sửa. Sử dụng độ sâu trường ảnh nông và tiêu điểm chính xác để làm nổi bật chi tiết. Thời điểm cắt vào thời điểm thông tin trở thành hệ quả. Chỉ quay lại rộng rãi sau khi góc nhìn cận cảnh đã thay đổi cách hiểu của khán giả về hành động.",
    "commonMistakes": [
      "Giới thiệu một chi tiết không có trong cảnh quay rộng hơn, phá vỡ tính liên tục và độ tin cậy về hình ảnh.",
      "Sử dụng khung hình gần như giống hệt nhau cho cả hai bức ảnh, do đó, điểm nhấn của biên tập có vẻ yếu và thiếu quyết đoán.",
      "Tiến gần hơn mà không cần lý do tường thuật, biến tín hiệu chú ý chính xác thành dấu câu trực quan trống rỗng."
    ]
  },
  {
    "id": "wipe-transition",
    "name": "Wipe",
    "definition": "One shot pushes another off screen in a defined geometric pattern — a signature of Star Wars and classic serials that adds kinetic energy and a retro, adventurous feel. George Lucas adopted the wipe transition directly from Akira Kurosawa's \"The Hidden Fortress\" for \"Star Wars,\" making it the saga's most recognizable editorial device. The wipe was common in 1930s and 40s adventure serials that Lucas and Spielberg loved as children. While largely absent from modern cinema, wipes occasionally appear as deliberate homage — Edgar Wright uses them in \"Baby Driver,\" and Wes Anderson employs them in \"The Grand Budapest Hotel.\"",
    "category": "editing",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/wipe-transition.webp",
    "promptTemplate": "Wipe transition with [Subject] in one scene being pushed off frame by an incoming scene sliding in, the geometric wipe edge a clean vertical line, both scenes fully lit and composed as complete images on either side, the nostalgic energy of adventure serials, the self-aware playfulness of a transition that announces itself as a storytelling device",
    "whenToUse": "Sử dụng tính năng xóa khi bạn cần cảm nhận được quá trình chuyển đổi: thay đổi chương, bước nhảy về địa lý, nhịp điệu truyện tranh hoặc chủ ý gật đầu với các loạt phim phiêu lưu cổ điển. Nó mang nhiều cá tính hơn là một đường cắt trung tính và có nhiều động lực hơn là một đường cắt hòa tan. Hãy chọn nó cho những thế giới được cách điệu hóa có thể hỗ trợ ngữ pháp biên tập rõ ràng; tránh nó khi chủ nghĩa hiện thực hoặc khả năng tàng hình cảm xúc quan trọng hơn chuyển động vui tươi.",
    "bestPractices": "Thiết kế hai bức ảnh có độ phân giải hoàn chỉnh với trọng lượng hình ảnh tương thích ở các phía đối diện của quá trình chuyển đổi. Di chuyển đều đặn một ranh giới thẳng đứng, ngang hoặc có hình dạng rõ ràng trên toàn khung hình cho đến khi cảnh đến thay thế cảnh đi. Giữ cho mép lau luôn sắc nét và tốc độ tự tin mà không làm nhòe các đối tượng với nhau. Phối hợp chuyển động có hướng để bố cục mới có cảm giác được đưa vào đúng vị trí. Để cả hai cảnh vẫn rõ ràng trong quá trình chuyển giao, mặc dù mỗi cảnh chỉ xuất hiện một phần.",
    "commonMistakes": [
      "Sử dụng tính năng xóa bên trong một kiểu chỉnh sửa vô hình khác, làm cho một lần chuyển đổi vô tình có cảm giác như sân khấu.",
      "Để lại một trong hai cảnh không được sáng tác vì người sáng tạo chỉ lên kế hoạch cho khung hình cuối cùng chứ không phải ranh giới chuyển động.",
      "Thêm độ mờ hoặc hòa tan ở rìa, điều này làm suy yếu đặc tính hình học rõ ràng của kỹ thuật."
    ]
  },
  {
    "id": "iris-transition",
    "name": "Iris",
    "definition": "A circular aperture opens or closes on the frame, focusing attention on a specific point — an early cinema technique that has seen a modern revival for its charming, self-aware quality. D.W. Griffith and Buster Keaton used iris shots extensively in the silent era to direct attention and create transitions. The technique fell out of favor with the arrival of sound but has been revived by directors like the Coen Brothers in \"The Hudsucker Proxy,\" Wes Anderson in \"The Grand Budapest Hotel,\" and Martin Scorsese in \"Hugo\" as an affectionate nod to cinema's origins. The iris closing on a character's face is one of the most recognizable images from early film history.",
    "category": "editing",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/iris-transition.webp",
    "promptTemplate": "Iris transition closing concentrically around [Subject] at center frame, the circular black mask tightening from edges like a closing eye, the world progressively swallowed by darkness until only a small disc remains, the charming self-awareness of silent cinema technique, warm sepia-inflected tones suggesting aged film stock",
    "whenToUse": "Sử dụng mống mắt khi bạn muốn kết thúc trên khuôn mặt, đồ vật hoặc cử chỉ với điểm nhấn sân khấu không thể nhầm lẫn. Nó phù hợp với phần kết của chương, đoạn kết truyện tranh, khung truyện và những đề cập trìu mến về điện ảnh thời kỳ đầu. Bởi vì thiết bị tự thông báo, hãy dành nó cho những chuỗi có tính chất vui tươi hoặc hoài niệm trang trọng. Nó kém hiệu quả hơn trong những cảnh phụ thuộc vào chủ nghĩa hiện thực liền mạch hoặc kiềm chế cảm xúc.",
    "bestPractices": "Đặt đối tượng đã chọn một cách chính xác ở trung tâm hoặc tiêu điểm đã chọn. Đóng một mặt nạ đen hình tròn đồng tâm từ các cạnh của khung, giữ cho hình ảnh còn lại ổn định khi đĩa hiển thị co lại. Đối với mống mắt mở, đảo ngược chuyển động và hiển thị cảnh xung quanh điểm quan tâm. Sử dụng màu sắc ấm áp, hơi già và hạn chế hạt nếu phù hợp với nỗi nhớ. Hoàn thiện trên toàn bộ khung hình màu đen hoặc mở hoàn toàn thay vì dừng lại ở khẩu độ tùy ý.",
    "commonMistakes": [
      "Đặt sai chủ đề khiến vòng kết thúc trôi đi khỏi trọng tâm cảm xúc hoặc hài hước dự kiến.",
      "Kết hợp mống mắt với chuyển động quá mức, khiến khán giả đuổi theo chủ thể trong một khung hình thu nhỏ.",
      "Áp dụng màu sắc và đường vân cũ kỹ đến mức quá trình chuyển đổi trở thành sự nhại lại hơn là sự ám chỉ trìu mến."
    ]
  },
  {
    "id": "time-lapse",
    "name": "Time-Lapse",
    "definition": "Capturing frames at intervals much slower than playback speed, compressing hours, days, or months into seconds to reveal processes invisible to normal perception — clouds racing, cities pulsing. Ron Fricke's \"Koyaanisqatsi\" (with Philip Glass's score) turned time-lapse into transcendent art, showing the rhythms of nature and civilization accelerated into hypnotic visual music. Terrence Malick uses time-lapse in \"The Tree of Life\" for cosmic creation sequences. David Fincher employed time-lapse in \"Fight Club\" and \"The Curious Case of Benjamin Button\" for both practical and poetic purposes. Modern nature documentaries by BBC and National Geographic have elevated time-lapse photography to a science.",
    "category": "editing",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/time-lapse.webp",
    "promptTemplate": "Time-lapse of [Subject] compressed from hours into seconds, light cycling through the full spectrum of the day, shadows rotating like sundial hands, the entire rhythm of existence compressed into a single visual breath, shot on a locked-off camera with an intervalometer, the Koyaanisqatsi revelation that accelerating time reveals patterns invisible to human perception",
    "whenToUse": "Sử dụng tính năng tua nhanh thời gian khi câu chuyện cần hiển thị một quá trình có quy mô vượt quá thời gian hiển thị thông thường: ánh sáng ban ngày đi qua một căn phòng, những đám mây xây dựng, đường phố lấp đầy hoặc sự thay đổi cấu trúc. Nó có thể rút ngắn thời gian, đánh dấu thời gian lao động, tiết lộ hệ thống hoặc biến quá trình chuyển đổi dần dần thành nhịp điệu thị giác. Kỹ thuật này hoạt động khi thay đổi là chủ đề; nó cảm thấy trống rỗng khi không có gì có ý nghĩa phát triển trong bố cục bị khóa.",
    "bestPractices": "Khóa máy ảnh và xác định trạng thái bắt đầu, trạng thái kết thúc và quy trình hiển thị rõ ràng giữa chúng. Giữ cho kiến ​​trúc cố định và các đường chân trời ổn định trong khi các đám mây, bóng tối, giao thông, con người hoặc sự tăng trưởng tăng tốc qua khung hình. Mô tả chu trình ánh sáng xuyên qua một con đường đáng tin cậy, với các bóng xoay liên tục thay vì nhấp nháy ngẫu nhiên. Duy trì một thành phần xuyên suốt. Nén mạnh thời lượng nhưng vẫn giữ đủ các giai đoạn trung gian để quá trình chuyển đổi đọc dưới dạng mẫu liên tục thay vì các ảnh chụp nhanh không liên quan.",
    "commonMistakes": [
      "Di chuyển máy ảnh mà không có mục đích, điều này sẽ che giấu mô hình dần dần mà việc nén thời gian nhằm mục đích tiết lộ.",
      "Tăng tốc mọi yếu tố như nhau, khiến các tòa nhà vững chắc chao đảo hoặc các vật thể cố định biến đổi theo thời gian.",
      "Không cung cấp trạng thái bắt đầu hoặc kết thúc riêng biệt, do đó trình tự có cảm giác bận rộn khi không truyền đạt sự thay đổi."
    ]
  },
  {
    "id": "fast-motion",
    "name": "Fast Motion",
    "definition": "Footage played back faster than it was captured, compressing real-time action to create comedy, frenetic energy, or an accelerated sense of unstoppable momentum. Buster Keaton and Charlie Chaplin used undercranking to create the frenetic comedy of the silent era. Stanley Kubrick used fast motion for the threesome scene in \"A Clockwork Orange\" set to William Tell's Overture. Guy Ritchie employs speed ramping and fast motion in \"Snatch\" and \"Lock, Stock and Two Smoking Barrels\" as a signature stylistic device. Wes Anderson uses deadpan fast motion in montage sequences throughout \"The Royal Tenenbaums\" and \"The Grand Budapest Hotel.\"",
    "category": "editing",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/fast-motion.webp",
    "promptTemplate": "Fast motion sequence of [Subject] accelerated to four times normal speed, the slight jerkiness of undercranked footage adding comedic effect, every movement purposeful but absurdly accelerated, the Buster Keaton energy of a body moving faster than physics allows, warm light consistent but shadows racing across surfaces",
    "whenToUse": "Sử dụng chuyển động nhanh cho các thói quen nén, trốn thoát điên cuồng, công việc cơ khí, thể chất hài hước hoặc các xung động sẽ kéo ở tốc độ bình thường. Nó mạnh nhất khi khán giả đã hiểu hành động và có thể tận hưởng nhịp điệu tăng tốc của nó. Sử dụng nó một cách có chọn lọc trong một trình tự; tốc độ duy trì có thể làm giảm sự nhấn mạnh, trong khi một chuyển động ngắn có thể khiến một chuyển động bình thường trở nên vô lý, hiệu quả hoặc mất kiểm soát một cách nguy hiểm.",
    "bestPractices": "Thực hiện hành động trong khung hình rộng hoặc trung bình có thể đọc được, sau đó chỉ định phát lại ở tốc độ gấp khoảng bốn lần bình thường. Giữ đường di chuyển đơn giản, có mục đích và liên tục để tăng tốc vẫn rõ ràng. Hãy để cơ thể và đạo cụ có độ giật nhẹ khi muốn hài kịch, nhưng vẫn giữ được phông nền ổn định và ánh sáng nhất quán. Chỉ sử dụng bóng đua nếu thời gian trôi qua. Kết thúc bằng một nhịp hành động rõ ràng thay vì cắt đoạn khi hình ảnh bị nhầm lẫn.",
    "commonMistakes": [
      "Tăng tốc việc chặn phức tạp cho đến khi các nhân vật chồng lên nhau, dịch chuyển đạo cụ và khán giả không thể theo dõi nhân quả được nữa.",
      "Sử dụng chuyển động nhanh để diễn xuất tinh tế về mặt cảm xúc, trong đó sắc thái khuôn mặt và sự do dự cần có thời gian thực sự để thể hiện.",
      "Kết hợp tính năng phát lại nhanh với hiện tượng rung máy không kiểm soát, tạo ra nhiễu hình ảnh thay vì nhịp điệu hài hước hoặc động học."
    ]
  },
  {
    "id": "reverse-motion",
    "name": "Reverse Motion",
    "definition": "Footage played backwards, creating surreal, uncanny, or magical effects where broken things reassemble, fallen objects rise, and the familiar becomes alien. Jean Cocteau used reverse motion to create magical effects in \"Orpheus\" and \"Beauty and the Beast\" without any optical trickery. David Lynch employs reversed footage in \"Twin Peaks\" for the Red Room sequences, where actors learned their dialogue backwards so that when played in reverse, the speech sounds almost but not quite right — deeply uncanny. Christopher Nolan used extensive reverse motion in \"Tenet\" where entire action sequences play forward and backward simultaneously.",
    "category": "editing",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "/img/cinematique/reverse-motion.webp",
    "promptTemplate": "Reverse motion of [Subject] with the uncanny wrongness of reversed physics where entropy runs backward, fragments finding their original positions as if remembering where they belonged, shot originally on high-speed Phantom camera for smooth motion when reversed, the David Lynch surrealism of a world where time moves the wrong way",
    "whenToUse": "Sử dụng chuyển động ngược khi vật lý thông thường có thể cảm thấy sai: xây dựng lại vật liệu bị vỡ, chất lỏng tràn lên trên, khói quay trở lại nguồn hoặc một hình người bị rơi bay lên. Nó có thể báo hiệu ma thuật, sự gián đoạn thời gian, chủ nghĩa siêu thực hoặc sự bất an. Hãy chọn những hành động có hướng rõ ràng không thể đảo ngược trong cuộc sống thực, bởi vì sự đảo ngược của chúng sẽ được đọc ngay lập tức. Chuyển động tinh tế hàng ngày có thể trông có vẻ vụng về chứ không phải là không thể thực hiện được.",
    "bestPractices": "Bắt đầu từ phần sau đã hoàn thành, sau đó sắp xếp từng mảnh, giọt hoặc hạt di chuyển ngược theo một con đường mạch lạc về dạng ban đầu của nó. Giữ quỹ đạo trơn tru và các va chạm có thể theo dõi được về mặt vật lý, ngay cả khi quan hệ nhân quả bị đảo ngược. Sử dụng khung hình ổn định và độ sáng đều để sai sót về thời gian vẫn là tác động chủ đạo. Bảo toàn danh tính của chủ thể thông qua chuyển động. Kết thúc ở trạng thái được khôi phục sạch sẽ khiến cho việc đảo ngược không thể nhầm lẫn.",
    "commonMistakes": [
      "Đảo ngược một hành động không có logic định hướng rõ ràng, khiến khán giả không chắc chắn liệu có điều gì bất thường xảy ra hay không.",
      "Cho phép các mảnh vỡ xuất hiện từ hư không thay vì truy lại các đường dẫn đáng tin cậy về phía đối tượng được khôi phục.",
      "Thêm các hiệu ứng cong vênh và màu sắc không liên quan làm xao lãng sức mạnh kỳ lạ đơn giản của vật lý lạc hậu."
    ]
  },
  {
    "id": "flashback",
    "name": "Flashback",
    "definition": "A scene that takes the audience back to an earlier point in time, revealing backstory, providing context for present behavior, or recontextualizing what we thought we knew. \"Citizen Kane\" is structured entirely around flashbacks as reporters investigate Charles Foster Kane's life. Francis Ford Coppola's \"The Godfather Part II\" masterfully interweaves flashbacks of young Vito Corleone with the present-day story of his son Michael. Christopher Nolan uses fragmented flashbacks as a structural principle in \"Memento,\" where the reversed chronology makes every flashback a revelation. Terrence Malick's \"The Tree of Life\" uses flashback as pure sensory memory, evoking childhood through images rather than plot.",
    "category": "storytelling",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/flashback.webp",
    "promptTemplate": "Flashback scene with [Subject] rendered in slightly overexposed warm-shifted tones, the image softer than present-day as if viewed through the imperfect lens of recollection, the color palette pushed toward amber and gold, lens flares and halation giving the image dreamy luminous quality, Kodak Vision3 50D pushed and cross-processed for vintage nostalgic look, the Malick-Lubezki language of memory as golden light",
    "whenToUse": "Sử dụng hồi tưởng khi trải nghiệm trong quá khứ phải giải thích hành vi hiện tại, tiết lộ bối cảnh còn thiếu hoặc thách thức những gì khán giả đã giả định. Nó hoạt động tốt nhất khi việc quay trở lại quá khứ có mục đích kịch tính cụ thể thay vì đóng vai trò là nơi chứa thông tin. Các mảnh cảm giác có thể thể hiện ký ức cảm xúc hoặc không đáng tin cậy, trong khi một cảnh đầy đủ hơn có thể mang lại cốt truyện cụ thể. Cung cấp cho khán giả một điểm neo tạm thời rõ ràng trước hoặc ngay sau ca làm việc.",
    "bestPractices": "Phân biệt cảnh được ghi nhớ bằng hệ thống hình ảnh được kiểm soát: ánh sáng màu hổ phách ấm hơn, độ tương phản nhẹ nhàng hơn, phơi sáng quá mức một chút, quầng sáng nhẹ hoặc hạt chọn lọc. Giữ khuôn mặt và các hành động quan trọng có thể đọc được trong quá trình xử lý. Xây dựng quá trình chuyển đổi xung quanh một đối tượng, tín hiệu âm thanh, cử chỉ hoặc bố cục phù hợp liên kết hiện tại và quá khứ. Hãy để những điều không hoàn hảo gợi lên hồi ức nhưng vẫn duy trì tính liên tục về không gian trong ký ức. Quay trở lại hiện tại trên một hình ảnh cho thấy lý do tại sao khoảnh khắc quá khứ này lại quan trọng hiện nay.",
    "commonMistakes": [
      "Chỉ sử dụng màu sắc ấm áp mà không có điểm neo tường thuật, khiến đoạn hồi tưởng giống như một sự thay đổi cấp độ ngẫu nhiên.",
      "Việc giải thích cốt truyện mà cảnh hiện tại đã truyền đạt, điều này làm cản trở động lực thay vì đào sâu nhân vật.",
      "Làm dịu đi từng chi tiết cho đến khi hành động và khuôn mặt trở nên mơ hồ, hy sinh khả năng hiểu để có được vẻ ngoài mơ ước chung chung."
    ]
  },
  {
    "id": "foreshadowing",
    "name": "Foreshadowing",
    "definition": "Planting subtle hints of events to come — a cracked mirror, a line of dialogue, a color choice — details that seem innocuous on first viewing but become devastating on rewatch. Stanley Kubrick embedded foreshadowing details so densely in \"The Shining\" that the documentary \"Room 237\" is dedicated entirely to analyzing them. M. Night Shyamalan structures \"The Sixth Sense\" so that every scene contains foreshadowing of the twist ending. The Coen Brothers plant narrative seeds early — the wood chipper glimpsed in the first act of \"Fargo\" becomes the instrument of horror in the third. Denis Villeneuve's \"Arrival\" hides its entire twist in plain sight through carefully constructed visual foreshadowing.",
    "category": "storytelling",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "/img/cinematique/foreshadowing.webp",
    "promptTemplate": "Foreshadowing detail hiding in plain sight around [Subject], a seemingly ordinary detail barely visible that the viewer will only recognize as prophetic on a second viewing, every element appearing innocent on first viewing but loaded with ominous meaning in retrospect, warm amber domestic lighting that makes the scene feel safe even as visual clues whisper that safety is temporary",
    "whenToUse": "Sử dụng điềm báo khi việc tiết lộ sau này mang lại cảm giác kiếm được thay vì tùy tiện. Trồng một chỗ dựa, hình dạng, màu sắc, cử chỉ hoặc đường nét có ý nghĩa đầu tiên là thông thường và ý nghĩa thứ hai chỉ xuất hiện sau kết quả. Đó là lý tưởng cho sự bí ẩn, bi kịch, khúc mắc và nỗi sợ hãi ngày càng gia tăng. Manh mối phải đủ rõ ràng để ghi lại một cách vô thức nhưng vẫn được tích hợp đủ tự nhiên để người xem lần đầu không dừng câu chuyện để giải mã nó.",
    "bestPractices": "Bố cục một khung cảnh bình thường, an toàn xung quanh chủ đề chính, sau đó đặt một chi tiết quan trọng gần rìa của sự chú ý. Hãy kết hợp quy mô, ánh sáng và chất liệu của nó với môi trường để nó thuộc về nơi đó. Tránh cách ly nó bằng ánh đèn sân khấu hoặc cận cảnh rõ ràng. Lặp lại hình dạng, màu sắc hoặc vị trí của nó sau nếu mẫu đó quan trọng. Khi xem lại, manh mối sẽ có vẻ có chủ ý; trong lần xem đầu tiên, nó phải là thông tin cơ bản hợp lý thay vì nhãn cảnh báo.",
    "commonMistakes": [
      "Tập trung và làm nổi bật manh mối một cách mạnh mẽ đến mức tiết lộ về tương lai trở nên rõ ràng ngay lần xem đầu tiên.",
      "Trồng một chi tiết mà không mang lại kết quả sau này, khiến khán giả không tin tưởng vào thông tin hình ảnh của câu chuyện.",
      "Sử dụng một vật thể đáng ngại không liên quan thay vì một manh mối kết nối cụ thể với sự kiện cuối cùng."
    ]
  },
  {
    "id": "breaking-fourth-wall",
    "name": "Breaking the Fourth Wall",
    "definition": "A character directly addresses or acknowledges the audience, shattering the illusion of the fictional world to create intimacy, comedy, or existential awareness. Groucho Marx was an early master, but the technique reached its dramatic potential when Ingmar Bergman had actors stare into the camera in \"Persona\" and \"Summer with Monika.\" Ferris Bueller's conspiratorial monologues to the audience in John Hughes's film became iconic, and Kevin Spacey's direct address in \"House of Cards\" (inspired by Ian Richardson in the original BBC series) made the fourth wall break a prestige TV staple. Spike Lee's characters break the fourth wall for political address, and Fleabag's knowing glances in Phoebe Waller-Bridge's series elevated the technique to new emotional heights.",
    "category": "storytelling",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/breaking-fourth-wall.webp",
    "promptTemplate": "[Subject] suddenly turning to look directly into the camera lens with a knowing expression, the other figures frozen in their activity unaware of the breach, the direct eye contact creating an instant conspiratorial bond with the viewer, the camera positioned exactly where an observer would be making the viewer complicit, the Fleabag-Ferris Bueller intimacy of a character who trusts the audience more than anyone in their own world",
    "whenToUse": "Sử dụng việc phá vỡ bức tường thứ tư khi nhân vật muốn tuyển khán giả làm người bạn tâm tình, nhân chứng, thẩm phán hoặc đồng phạm. Một cái nhìn có thể tạo ra một trò đùa; địa chỉ được duy trì có thể phơi bày một sự thật riêng tư hoặc phá vỡ thế giới hư cấu. Trước tiên hãy thiết lập hành vi bình thường của cảnh để vi phạm có hiệu lực. Kỹ thuật này sẽ mất tác động nếu mọi nhân vật đều thừa nhận camera hoặc nếu lời nói trực tiếp không mang lại mối quan hệ mới nào với người xem.",
    "bestPractices": "Đặt máy ảnh chính xác ở nơi người quan sát sẽ đứng, ngang tầm mắt của nhân vật. Hãy để hành động xung quanh tiếp tục hoặc đóng băng trong thời gian ngắn trong khi đối tượng quay lại và cố định giao tiếp bằng mắt trực tiếp, không lay chuyển trên ống kính. Giữ cách diễn đạt cụ thể: âm mưu, buộc tội, thích thú hoặc vạch trần. Các nhân vật khác sẽ không được biết trừ khi câu chuyện đòi hỏi một đoạn kết lớn hơn. Giữ cái nhìn đủ lâu để tạo ra sự đồng lõa, sau đó đưa đối tượng trở lại hiện trường với một hậu quả cảm xúc có thể đọc được.",
    "commonMistakes": [
      "Để mọi nhân vật nhìn vào máy quay, điều này sẽ phá hủy mối liên kết riêng tư giữa một nhân vật và khán giả.",
      "Sử dụng cách diễn đạt trung lập mơ hồ khi cái nhìn trực tiếp cần một ý định hài hước hoặc kịch tính chính xác.",
      "Bắt đầu bằng lời nói trực tiếp trước khi thiết lập không gian hư cấu, không để lại ảo tưởng nào cho nhân vật bị phá vỡ."
    ]
  },
  {
    "id": "in-medias-res",
    "name": "In Medias Res",
    "definition": "Beginning the story in the middle of the action rather than from the chronological start, hooking the audience immediately and creating mystery about how we got here. The technique dates to Homer's Odyssey and has been a staple of cinema since film noir. Quentin Tarantino opens \"Reservoir Dogs\" in the aftermath of a heist gone wrong, and Christopher Nolan begins \"The Dark Knight\" mid-robbery. The Coen Brothers drop viewers into the middle of violent chaos in \"No Country for Old Men.\" Sam Mendes opens \"American Beauty\" with Kevin Spacey narrating from beyond the grave, and Danny Boyle begins \"Trainspotting\" with a full-sprint chase sequence set to Iggy Pop.",
    "category": "storytelling",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/in-medias-res.webp",
    "promptTemplate": "In medias res with [Subject] dropped without context into the middle of intense action already in progress, no exposition or setup, no explanation, the audience thrown into adrenaline and forced to piece together the story from fragments, handheld camera energy and desaturated color grade, the Tarantino-Nolan principle that starting in the middle makes the audience lean forward",
    "whenToUse": "Sử dụng trong môi trường trung gian khi lỗ mở cần áp lực, chuyển động hoặc bí ẩn ngay lập tức. Bắt đầu sau khi kế hoạch thất bại, trong quá trình theo đuổi hoặc ngay lúc mối quan hệ tan vỡ, sau đó để bối cảnh hiện lên thông qua hành vi và hậu quả. Nó phù hợp với những câu chuyện mà sự khám phá là một phần của niềm vui. Ngay cả khi không có sự trình bày, người xem vẫn cần một mục tiêu, mối đe dọa hoặc câu hỏi cụ thể để hướng sự chú ý của họ vào bên trong sự hỗn loạn.",
    "bestPractices": "Mở đầu cho hành động đang diễn ra: chủ thể chạy, trốn, tranh cãi, trốn thoát hoặc hồi phục sau một sự kiện không nhìn thấy. Sử dụng khung hình cầm tay phản ứng, thông tin cơ bản được nén và các hậu quả có thể nhìn thấy như hư hỏng, khó thở hoặc các vật thể nằm rải rác. Giữ lại tên và lời giải thích, nhưng làm cho các thông tin ngay lập tức trở nên dễ đọc thông qua hướng chuyển động và trọng tâm của nhân vật. Chọn hai hoặc ba đoạn ngữ cảnh mà sau này có thể hiểu được. Đừng tạm dừng cảnh để giải thích làm thế nào mọi người đến đó.",
    "commonMistakes": [
      "Giữ lại mọi quan điểm định hướng, biến bí ẩn có chủ ý thành một khung cảnh không có mục tiêu rõ ràng.",
      "Dừng hành động để bộc lộ ngay lập tức, điều này sẽ hủy bỏ động lượng được tạo ra bởi cú lao đầu tiên.",
      "Dàn dựng sự hỗn loạn chung chung mà không có hậu quả cụ thể gợi ý về những sự kiện không thể nhìn thấy trước hiện trường."
    ]
  },
  {
    "id": "cliffhanger",
    "name": "Cliffhanger",
    "definition": "Ending a scene, episode, or act at a moment of peak suspense, leaving the outcome unresolved and exploiting the human need for closure to keep audiences desperate for more. The term comes from Thomas Hardy's serialized novel \"A Pair of Blue Eyes,\" where a character literally hangs from a cliff. \"The Empire Strikes Back\" ends on one of cinema's greatest cliffhangers — Han frozen in carbonite, Luke maimed and shattered by Vader's revelation. Television perfected the cliffhanger with \"Dallas\" 's \"Who shot J.R.?\" and \"Breaking Bad\"'s mid-season endings. Christopher Nolan ends \"Inception\" on a philosophical cliffhanger with the spinning top.",
    "category": "storytelling",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/cliffhanger.webp",
    "promptTemplate": "Cliffhanger moment frozen at peak suspense with [Subject], the image capturing the exact instant before resolution, the viewer's need for closure weaponized into desperate anticipation, dramatic sidelighting creating hard shadows that emphasize physical strain, the visual language of unresolved tension that demands continuation",
    "whenToUse": "Sử dụng yếu tố thay đổi ở một cảnh, một tập hoặc một cảnh ngắt quãng khi kết quả chưa được giải quyết có thể kéo khán giả về phía trước. Phiên bản tốt nhất dừng lại sau khi đã hiểu rõ số tiền đặt cược nhưng trước khi hành động, câu trả lời hoặc hậu quả mang tính quyết định xuất hiện. Nó có tác dụng đối với những nguy hiểm về thể chất, những khám phá, những lựa chọn và những cuộc đối đầu về mặt cảm xúc. Tránh sử dụng nó trên những thông tin nhỏ; sự gián đoạn phải để lại một áp lực tường thuật thực sự mà phần tiếp theo có thể thỏa mãn.",
    "bestPractices": "Xây dựng theo một nhịp không thể đảo ngược, sau đó đóng khung khoảnh khắc chính xác trước khi va chạm, phản ứng, trốn thoát hoặc tiết lộ. Sử dụng ánh sáng mạnh, không gian bị nén, tư thế căng thẳng và tầm nhìn rõ ràng về mối đe dọa chưa được giải quyết. Hãy để hình ảnh cuối cùng chứa câu hỏi một cách trực quan mà không cần giải thích bằng văn bản. Cắt đi trước khi chuyển động kết thúc, không phải trước khi khán giả hiểu điều gì có thể xảy ra. Giữ đủ chi tiết để cảnh tiếp theo tiếp tục từ cùng một vị trí thể chất và cảm xúc.",
    "commonMistakes": [
      "Kết thúc trước khi có thể nhìn thấy tiền cược, tạo ra sự gián đoạn đơn giản thay vì áp lực hồi hộp chưa được giải quyết.",
      "Giải quyết hành động nguy hiểm ở khung hình cuối cùng, sau đó giả vờ như hậu quả vẫn còn là điều đáng lo ngại.",
      "Việc sử dụng các nhân tố thay đổi liên tục mà không đáp ứng được các câu hỏi trước đó, điều này sẽ biến sự mong đợi thành sự nghi ngờ của khán giả."
    ]
  },
  {
    "id": "flashforward",
    "name": "Flashforward",
    "definition": "A scene that jumps ahead to show future events before returning to the present timeline, creating dramatic irony, dread, or anticipation by revealing a destination before the journey. Nicolas Roeg used flashforwards brilliantly in \"Don't Look Now,\" where glimpses of the future create a web of dread throughout the film. \"Breaking Bad\" famously opens seasons with enigmatic flashforwards — the machine gun in the trunk, the burning teddy bear — that recontextualize everything that follows. Denis Villeneuve's \"Arrival\" builds its entire narrative twist on what the audience assumes are flashbacks but are actually flashforwards, fundamentally altering the audience's understanding of time and memory.",
    "category": "storytelling",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "/img/cinematique/flashforward.webp",
    "promptTemplate": "Flashforward showing [Subject] in a future state, the visual treatment cooler and more desaturated than present-day scenes, the camera positioned in the same angle as earlier shots to make the change more devastating by comparison, the flashforward creating dramatic irony as the audience now carries knowledge of this future while watching the present unfold",
    "whenToUse": "Hãy sử dụng tính năng chớp nhoáng khi biết đích đến sẽ khiến hành trình trở nên tốn kém hơn. Thể hiện một vết thương trong tương lai, mối quan hệ bị thay đổi, địa điểm bị hủy hoại hoặc vật thể không giải thích được, sau đó quay lại hiện tại trong khi khán giả mang theo kiến ​​​​thức đó. Nó có hiệu quả đối với sự trớ trêu đáng sợ và kịch tính, đặc biệt khi hình ảnh tương lai đặt ra một câu hỏi chính xác. Đừng tiết lộ quá nhiều khiến câu chuyện xen vào mất đi sự chắc chắn hoặc khả năng xảy ra.",
    "bestPractices": "Lặp lại góc máy ảnh hiện tại trong tương lai để những thay đổi có thể so sánh được ngay lập tức. Chuyển tương lai sang màu sắc mát mẻ hơn, hạn chế hơn, ánh sáng thay đổi và những hậu quả có thể nhìn thấy được trong khi vẫn bảo tồn được kiến ​​trúc, tín hiệu tủ quần áo hoặc đạo cụ dễ nhận biết. Giữ cái nhìn ngắn gọn và tập trung vào một thay đổi chưa được giải đáp. Chuyển trở lại thông qua sự phù hợp về mặt hình ảnh hoặc đoạn cắt thời gian sắc nét. Khán giả nên nhận ra rằng thời gian đã trôi qua, hiểu điều gì đã thay đổi và vẫn cần khám phá lý do tại sao nó lại xảy ra.",
    "commonMistakes": [
      "Thay đổi mọi yếu tố hình ảnh cùng một lúc, để tương lai không còn kết nối rõ ràng với dòng thời gian hiện tại.",
      "Hiển thị chuỗi sự kiện hoàn chỉnh, loại bỏ câu hỏi kịch tính sẽ tiếp thêm sinh lực cho câu chuyện hiện tại.",
      "Coi tương lai như một giấc mơ chung chung không có chi tiết ổn định mà khán giả có thể nhớ hoặc theo dõi."
    ]
  },
  {
    "id": "non-linear-narrative",
    "name": "Non-Linear Narrative",
    "definition": "A story told out of chronological order — rearranging time to create mystery, thematic resonance, or a puzzle the audience assembles. Quentin Tarantino's \"Pulp Fiction\" made non-linear narrative a mainstream phenomenon, while Christopher Nolan's \"Memento\" pushed it to its logical extreme by running the entire film in reverse. Alejandro González Iñárritu's \"21 Grams\" fragments three timelines into a mosaic, and Denis Villeneuve's \"Arrival\" uses non-linear structure to redefine the audience's understanding of time itself. Gaspar Noé's \"Irréversible\" tells its story in reverse chronological order, making its final scene of peaceful joy the most devastating in the film.",
    "category": "storytelling",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "/img/cinematique/non-linear-narrative.webp",
    "promptTemplate": "Non-linear narrative visualized with [Subject] existing simultaneously at different moments, each temporal fragment in its own distinct visual world with unique color science, the puzzle-like structure of Nolan and Tarantino made visual, the non-linear principle that chronology is a creative choice rather than an obligation",
    "whenToUse": "Sử dụng lối tường thuật phi tuyến tính khi thời gian được sắp xếp lại tạo ra sự bí ẩn, sự tương phản về mặt cảm xúc hoặc sự cộng hưởng theo chủ đề mà trình tự thời gian không thể cung cấp được. Đặt hậu quả trước nguyên nhân, xem lại một sự kiện từ các giai đoạn khác nhau hoặc xen kẽ các đoạn thời gian làm thay đổi ý nghĩa của nhau. Mỗi bước nhảy nên đóng góp bằng chứng. Cấu trúc này đòi hỏi những điểm neo vững chắc như tuổi tác, tủ quần áo, vị trí, màu sắc hoặc bố cục lặp lại để người xem có thể tập hợp dòng thời gian mà không cần gắn nhãn cố định.",
    "bestPractices": "Xác định từng khoảng thời gian bằng bảng màu, điều kiện ánh sáng, trạng thái trang phục và chi tiết môi trường riêng biệt nhưng có liên quan. Lặp lại một chủ đề hoặc bố cục qua các giai đoạn để bộc lộ sự thay đổi. Sắp xếp các đoạn xung quanh ý nghĩa kịch tính hơn là theo trình tự thời gian ngẫu nhiên: hệ quả, nguyên nhân, mâu thuẫn, tiết lộ. Giữ hướng màn hình và danh tính nhất quán trong từng thời kỳ. Khi các khoảnh khắc chồng lên nhau, hãy hiển thị một cây cầu trực quan rõ ràng. Trình tự cuối cùng sẽ thưởng cho việc tái thiết, với mỗi đoạn tạm thời sẽ thay đổi cách đọc một đoạn khác.",
    "commonMistakes": [
      "Sắp xếp lại các cảnh một cách tùy tiện, không tạo ra sự huyền bí, tương phản hay mối quan hệ mới giữa nguyên nhân và hậu quả.",
      "Tạo phong cách giống hệt nhau cho mỗi giai đoạn, buộc người xem phải đoán thời điểm các sự kiện xảy ra chỉ từ đoạn hội thoại.",
      "Làm quá tải từng mảnh với manh mối, khiến cấu trúc có cảm giác giống như một giao diện giải đố thay vì kịch tính trực tiếp."
    ]
  },
  {
    "id": "parallel-storylines",
    "name": "Parallel Storylines",
    "definition": "Multiple narrative threads running simultaneously, often converging at key moments, creating thematic parallels and enriching the story by showing how different characters experience the same world. Robert Altman pioneered the multi-storyline film with \"Nashville\" and \"Short Cuts,\" weaving dozens of characters into tapestries of intersecting lives. Paul Thomas Anderson followed with \"Magnolia,\" where parallel storylines converge in a climax of biblical surrealism. Alejandro González Iñárritu's \"Babel\" weaves four storylines across three continents. Christopher Nolan's \"Dunkirk\" runs three parallel timelines at different temporal speeds — one week, one day, one hour — that converge at the climax.",
    "category": "storytelling",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "/img/cinematique/parallel-storylines.webp",
    "promptTemplate": "Parallel storylines with [Subject] shown across multiple distinct visual quadrants happening simultaneously, each in its own color world and emotional register yet connected by theme, the Altman-Anderson principle that the world is a symphony of simultaneous stories, the invisible threads connecting lives that share a time without knowing it",
    "whenToUse": "Sử dụng cốt truyện song song khi các nhân vật, địa điểm hoặc thời điểm khác nhau có thể làm sáng tỏ cùng một chủ đề từ những góc độ tương phản. Các luồng có thể chia sẻ một sự kiện, vang vọng lẫn nhau hoặc hội tụ về mặt vật lý ở mức cao trào. Cung cấp cho mỗi cốt truyện mong muốn ngay lập tức và bản sắc hình ảnh của riêng nó; không cái nào nên tồn tại đơn thuần như một sự chậm trễ. Kết hợp chúng tại những thời điểm hành động, cảm xúc, âm thanh hoặc kết quả phù hợp để tạo cảm giác như được thiết kế cho cấu trúc lớn hơn.",
    "bestPractices": "Chỉ định mỗi chủ đề một vị trí, bảng màu, chất lượng ánh sáng, nhịp điệu khung hình và chủ đề lặp lại riêng biệt. Hiển thị hành động đồng thời thông qua các cảnh quay xen kẽ hoặc bố cục được phân chia rõ ràng, giữ cho mỗi thế giới nhất quán bên trong. Liên kết các chủ đề với các cử chỉ, hình dạng, thời tiết hoặc đồ vật phù hợp mà không giả vờ rằng chúng chiếm cùng một không gian. Tăng tần suất chuyển tiếp khi tiến đến hội tụ. Tại điểm gặp mặt, hãy lưu giữ dấu vết trực quan của từng cốt truyện để cuộc xung đột có cảm giác như đã được thực hiện thay vì được thông báo một cách máy móc.",
    "commonMistakes": [
      "Cung cấp cho một cốt truyện tất cả hành động có ý nghĩa trong khi những cốt truyện khác chỉ hoạt động như một sự gián đoạn mang tính trang trí.",
      "Sử dụng các vị trí và bảng màu giống hệt nhau, khiến cho các chuỗi đồng thời khó được xác định trong nháy mắt.",
      "Buộc phải hội tụ thông qua sự trùng hợp ngẫu nhiên mà không đặt trước các nguyên nhân, không gian, đối tượng hoặc áp lực chủ đề chung."
    ]
  },
  {
    "id": "frame-narrative",
    "name": "Frame Narrative",
    "definition": "A story-within-a-story structure — a character tells a tale, and we watch it unfold — creating layers of perspective, questions of reliability, and a satisfying nesting of narratives. Rob Reiner's \"The Princess Bride\" is a beloved frame narrative, with Peter Falk reading to Fred Savage while the fairy tale plays out. \"Titanic\" uses a frame narrative of elderly Rose recounting her experience to researchers. Wes Anderson employs nested frame narratives in \"The Grand Budapest Hotel\" — a girl reads a book by an author recounting a story told to him by Zero Moustafa. The frame narrative raises inherent questions of reliability since we see events filtered through a teller's perspective.",
    "category": "storytelling",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/frame-narrative.webp",
    "promptTemplate": "Frame narrative with [Subject] as the storyteller in warm amber lamplight, the image beginning to dissolve into the story being told, two realities briefly coexisting in the dissolve, the warm domestic frame giving way to the adventure palette of the nested story, the nested structure raising questions about what is real and what has been embellished",
    "whenToUse": "Sử dụng một câu chuyện có khung khi hành động kể cũng quan trọng như câu chuyện. Người kể chuyện có thể lọc các sự kiện thông qua trí nhớ, thành kiến, tình cảm hoặc phát minh, trong khi khung cảnh bên ngoài mang đến cho khán giả một nơi để đặt câu hỏi và giải thích câu chuyện bên trong. Nó phù hợp với cấu trúc hồi ức, truyền thuyết, lời khai và truyện. Quay trở lại khung hình ở những điểm có ý nghĩa để nó định hình câu chuyện lồng nhau thay vì chỉ giới thiệu nó.",
    "bestPractices": "Dàn dựng người kể chuyện trong một khung cảnh ổn định, thân mật với ánh đèn ấm áp và một người nghe hoặc đối tượng kể chuyện rõ ràng. Chuyển sang câu chuyện lồng ghép thông qua cử chỉ hòa tan, khớp nối, trang, ảnh hoặc thay đổi nền. Cung cấp cho câu chuyện bên trong một bảng màu rộng hơn và quy mô không gian khác, nhưng lặp lại một yếu tố hình ảnh từ khung hình để duy trì quyền tác giả. Khi quay lại, hãy tiết lộ phản ứng hoặc chi tiết bị thay đổi nhằm đặt câu hỏi, xác nhận hoặc làm phức tạp thêm những gì khán giả vừa nhìn thấy.",
    "commonMistakes": [
      "Bỏ đi khung bên ngoài sau phần mở đầu, khiến cấu trúc của người kể chuyện trở nên không cần thiết đối với câu chuyện.",
      "Đưa ra cách xử lý hình ảnh giống hệt nhau cho cả hai lớp tường thuật, do đó quá trình chuyển đổi giữa người kể và câu chuyện trở nên lộn xộn.",
      "Chỉ sử dụng khung để trình bày thay vì để phối cảnh hoặc độ tin cậy ảnh hưởng đến câu chuyện bên trong."
    ]
  },
  {
    "id": "voiceover-narration",
    "name": "Voiceover Narration",
    "definition": "A character's voice speaking over the visuals, providing internal thoughts, context, or commentary that can create intimacy, irony, or an essay-like quality depending on tone. Martin Scorsese uses voiceover as a vital narrative engine — Henry Hill's running commentary in \"Goodfellas\" is inseparable from the film's identity. Terrence Malick's whispered, philosophical voiceovers in \"The Thin Red Line\" and \"The Tree of Life\" create an interior poetry. Billy Wilder used voiceover to brilliant ironic effect in \"Sunset Boulevard,\" narrated by a dead man. Wong Kar-wai's voiceovers in \"In the Mood for Love\" turn interior monologue into pure longing.",
    "category": "storytelling",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/voiceover-narration.webp",
    "promptTemplate": "Scene designed to accompany voiceover narration with [Subject] in a contemplative visual, the imagery deliberately quiet and reflective to create space for an unseen narrator's voice, the visual mood introspective and open-ended, soft desaturated color palette, the Malick-Scorsese understanding that the right contemplative image paired with words creates something greater than either alone",
    "whenToUse": "Sử dụng tường thuật lồng tiếng khi khán giả cần tiếp cận suy nghĩ, trí nhớ, bình luận hoặc góc nhìn mà hành động trực quan không thể cung cấp. Việc ghép từ ngữ và hình ảnh có thể tạo ra sự gần gũi, mâu thuẫn hoặc phản ánh giống như một bài luận. Giọng nói nên thêm lớp thứ hai chứ không phải mô tả những gì người xem đã thấy. Hãy chừa khoảng trống về nhịp độ và bố cục để ngôn ngữ tiếp cận, đặc biệt khi hình ảnh dày đặc về mặt cảm xúc hoặc lời tường thuật mang tính mỉa mai.",
    "bestPractices": "Xây dựng một khung cảnh trực quan có giới hạn xung quanh chủ đề: hành động đáng suy ngẫm, không gian âm mở, màu sắc dịu nhẹ và chuyển động chậm, dễ đọc. Giữ các vết cắt đủ thưa để các ý tưởng được nói ra có thể được thở. Ghép nối các từ theo nghĩa đen với hình ảnh bổ sung hoặc mâu thuẫn thay vì minh họa trực tiếp. Duy trì chi tiết âm thanh và hình ảnh môi trường để hình ảnh không trở thành hình nền. Đặt chủ thể ở ngoài trung tâm hoặc nhìn ra ngoài khung hình, tạo không gian tâm lý cho một giọng nói vô hình trong khi vẫn giữ được một câu chuyện hình ảnh hoàn chỉnh.",
    "commonMistakes": [
      "Mô tả từng hành động trực quan, giảm tường thuật thành khả năng tiếp cận dư thừa thay vì bổ sung thêm góc nhìn.",
      "Việc cắt hình ảnh nhanh hơn tốc độ suy nghĩ được nói ra, buộc âm thanh và hình ảnh phải cạnh tranh.",
      "Sử dụng hình ảnh chiêm nghiệm mơ hồ không liên quan đến trí nhớ, sự mỉa mai hoặc lập luận cụ thể của người kể chuyện."
    ]
  },
  {
    "id": "motif",
    "name": "Motif",
    "definition": "A recurring visual, audio, or narrative element that accumulates meaning through repetition — oranges in \"The Godfather,\" mirrors in \"Black Swan,\" water in \"The Shape of Water\" — patterns that become the story's visual language. Francis Ford Coppola's oranges appear before every death in the Godfather trilogy, creating an association the viewer feels before consciously understanding it. Kubrick uses the color red as a motif in \"The Shining.\" Darren Aronofsky uses mirrors and doubles throughout \"Black Swan.\" Denis Villeneuve uses circular shapes as a motif in \"Arrival\" reflecting the film's themes of time and language. The motif is cinema's equivalent of a musical refrain — each recurrence deepens the meaning.",
    "category": "storytelling",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/motif.webp",
    "promptTemplate": "Recurring visual motif with [Subject] appearing for the nth time in the narrative, the viewer now conditioned to feel a specific emotion at the sight, the seemingly mundane detail having accumulated devastating associative weight through repetition, the Coppola technique of training the audience to read a visual symbol through consistent placement, the motif's power residing in the accumulated pattern of meaning",
    "whenToUse": "Sử dụng mô típ khi một đồ vật, màu sắc, âm thanh, hình dạng hoặc cử chỉ lặp đi lặp lại có thể trở thành từ vựng riêng của câu chuyện. Lặp lại nó trước các sự kiện liên quan, xung quanh một nhân vật hoặc ở những bước ngoặt cảm xúc để sự liên tưởng phát triển mà không cần giải thích. Mô típ phải vẫn có thể nhận biết được khi bối cảnh của nó thay đổi. Nó đặc biệt hữu ích trong những câu chuyện dài, nơi người xem có thể cảm nhận được một khuôn mẫu trước khi họ đặt tên cho nó một cách có ý thức.",
    "bestPractices": "Chọn một yếu tố đơn giản, không thể nhầm lẫn và xác định màu sắc, hình dạng, chất liệu và vị trí khung điển hình của nó. Giới thiệu nó trong một bối cảnh trung lập, sau đó lặp lại nó trong các cảnh sau với bản sắc nhất quán nhưng thay đổi cảm xúc xung quanh. Đừng cô lập nó mọi lúc; đôi khi hãy để nó diễn ra tự nhiên trong thiết kế sản xuất. Sự nổi bật của nó chỉ tăng lên khi ý nghĩa tích lũy lộ ra. Duy trì đủ tính liên tục về mặt hình ảnh để mỗi lần tái diễn đều mang lại cảm giác có chủ ý chứ không giống như một sự thay thế tương tự.",
    "commonMistakes": [
      "Thay đổi hình dạng hoặc màu sắc của họa tiết giữa các cảnh cho đến khi người xem không thể nhận ra yếu tố lặp lại.",
      "Giải thích mô típ trong cuộc đối thoại, loại bỏ niềm vui liên tưởng được xây dựng thông qua sự tái diễn hình ảnh.",
      "Lặp lại yếu tố này trong mọi cảnh, biến mô hình có ý nghĩa thành vật trang trí rõ ràng và tiếng ồn thị giác."
    ]
  },
  {
    "id": "symbolism",
    "name": "Symbolism",
    "definition": "Using concrete visual elements to represent abstract ideas or themes — a cage for imprisonment, water for rebirth, red for passion or danger — the visual poetry of cinema. Andrei Tarkovsky filled his films with water, fire, and earth symbolism in \"Stalker,\" \"Mirror,\" and \"Nostalghia.\" Kubrick encoded \"2001: A Space Odyssey\" with evolutionary symbolism from the bone weapon to the star child. Guillermo del Toro uses fantasy creatures as symbols for fascism in \"Pan's Labyrinth.\" The floating plastic bag in \"American Beauty\" became a cultural symbol, and Spike Lee's floating bed in \"She's Gotta Have It\" and \"Do the Right Thing\" uses physical impossibility as symbolic expression.",
    "category": "storytelling",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/symbolism.webp",
    "promptTemplate": "Visual symbolism with [Subject] carrying abstract meaning beyond its literal form, the image precisely rendered to communicate truths that language cannot reach, the composition treating the symbol with the reverence of a monument — centered, solitary, given maximum visual space, the Tarkovsky understanding that a concrete image can channel the ineffable",
    "whenToUse": "Sử dụng biểu tượng khi một ý tưởng trừu tượng cần một hình ảnh vật chất mà khán giả có thể cảm nhận được: bao bọc để giam cầm, nước để đổi mới hoặc một hình ảnh phản chiếu bị chia cắt cho bản sắc bị rạn nứt. Biểu tượng được chọn phải xuất hiện từ thế giới của câu chuyện và trải nghiệm của nhân vật. Nó hiệu quả nhất ở những bước ngoặt hoặc trong những bố cục lặp đi lặp lại. Tránh xếp chồng nhiều biểu tượng vào một khung; một hình ảnh chính xác duy nhất thường mang lại nhiều sức mạnh hơn.",
    "bestPractices": "Chọn một chủ đề cụ thể có hình thức, hành vi hoặc vị trí phản ánh chủ đề một cách tự nhiên. Mang lại cho nó không gian hình ảnh rõ ràng thông qua việc đặt khung hình ở giữa, sự cô lập, tỷ lệ hoặc độ tương phản, trong khi vẫn giữ được ánh sáng và chất liệu đáng tin cậy. Kết nối nó với nhân vật thông qua ánh mắt, chạm hoặc chặn thay vì văn bản giải thích. Nếu biểu tượng tái diễn, hãy thay đổi tình trạng của nó khi câu chuyện thay đổi. Hãy để đối tượng theo nghĩa đen vẫn hoàn toàn đáng tin cậy ngay cả khi bố cục mời đọc lần thứ hai.",
    "commonMistakes": [
      "Việc chọn một biểu tượng chỉ thông qua những lời sáo rỗng mà không kết nối nó với xung đột hoặc thế giới cụ thể của nhân vật.",
      "Làm đầy khung hình với những ẩn dụ cạnh tranh, không để lại một hình ảnh nào đủ không gian để mang ý nghĩa.",
      "Chiếu sáng biểu tượng như một dấu hiệu siêu nhiên khi lẽ ra nó vẫn là một vật thể đáng tin cậy trong hiện trường."
    ]
  },
  {
    "id": "color-grading",
    "name": "Color Grading",
    "definition": "The process of altering and enhancing color in post-production to create a specific mood, era, or visual identity — the final paintbrush of cinema, transforming raw footage into visual art. The Coen Brothers' \"O Brother, Where Art Thou?\" (2000) was the first major film to be entirely digitally color graded, creating its sepia-toned Depression-era look. David Fincher works obsessively with colorist Stephen Nakamura to achieve the sickly green-yellow palette of \"Se7en\" and the cold precision of \"Zodiac.\" Steven Soderbergh used radical color grading in \"Traffic\" — amber for Mexico, blue for the US, natural for Ohio — as a narrative device. Modern colorists like Company 3's Stefan Sonnenfeld and Technicolor's Peter Doyle are as essential to a film's look as the cinematographer.",
    "category": "vfx",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/color-grading.webp",
    "promptTemplate": "Heavily color-graded scene with [Subject] rendered in a distinct teal-and-orange complementary palette, shadows pushed deep into cyan-teal while skin tones and practicals isolated to deep amber-orange, the aggressive color manipulation where post-production color becomes a dominant creative force equal to the original photography, the final act of authorship in the filmmaking pipeline",
    "whenToUse": "Sử dụng phân loại màu sắc khi một cảnh cần một bản sắc cảm xúc thống nhất, một giai đoạn riêng biệt hoặc ranh giới trực quan giữa cốt truyện và địa điểm. Nó có thể làm mát một thế giới thủ tục, sưởi ấm ký ức hoặc tạo ra độ tương phản có kiểm soát giữa bóng tối và ánh sáng thực tế. Thiết lập điểm số như một phần ngữ pháp hình ảnh của dự án chứ không phải một bộ lọc được thêm độc lập vào mỗi cảnh quay. Tính liên tục quan trọng hơn độ bão hòa.",
    "bestPractices": "Xác định bảng màu bằng cách gán các nhóm màu cho bóng, tông trung tính, màu da, điểm sáng và các nguồn thực tế. Để có giao diện màu xanh mòng két và màu hổ phách, hãy đẩy các vùng tối về phía màu lục lam trong khi vẫn giữ ấm cho mặt và đèn, sau đó bảo vệ các vùng trắng trung tính khỏi bị nhiễm bẩn. Duy trì chi tiết phơi sáng ở cả hai đầu của phạm vi. Áp dụng các mối quan hệ màu sắc giống nhau trên các vị trí thay đổi. Chỉ định độ bão hòa hạn chế và mức độ màu đen nhất quán để lớp có cảm giác như được tác giả thay vì dán lên ảnh.",
    "commonMistakes": [
      "Đẩy mọi bề mặt về hai màu sắc, xóa bỏ sự khác biệt về chất liệu tự nhiên và sự biến đổi đáng tin cậy của làn da.",
      "Thay đổi mức độ đen và cân bằng trắng giữa các bức ảnh liền kề, phá vỡ tính liên tục của thế giới hình ảnh.",
      "Sử dụng độ bão hòa để thay thế cho tâm trạng mà không kiểm soát độ tương phản, độ phơi sáng hoặc phân cấp màu sắc."
    ]
  },
  {
    "id": "desaturation",
    "name": "Desaturation",
    "definition": "Reducing color intensity in the image, moving toward grayscale to create a bleak, documentary, or dreamlike quality — partial desaturation can isolate a single color for dramatic effect. Steven Spielberg used near-total desaturation in \"Schindler's List\" with the famous exception of the girl's red coat, creating one of cinema's most iconic selective-color moments. Ridley Scott desaturated \"Black Hawk Down\" for combat realism. \"Sin City\" by Robert Rodriguez uses radical desaturation with selective color to recreate Frank Miller's graphic novels. Janusz Kamiński's desaturated look for \"Saving Private Ryan\" established the visual template for modern war films.",
    "category": "vfx",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/desaturation.webp",
    "promptTemplate": "Desaturated scene with [Subject] approaching monochrome, all color drained to near-gray except for a single vivid element, the Spielberg \"Schindler's List\" technique of selective color isolation, the surrounding gray rendering the world as bleak while the single color insists that something vital remains, heavy desaturation in grading leaving only one color channel active",
    "whenToUse": "Sử dụng tính năng khử bão hòa cho chủ nghĩa hiện thực ảm đạm, ký ức, mức độ nghiêm trọng của phim tài liệu, cách điệu đồ họa hoặc một thế giới cạn kiệt sức sống về mặt cảm xúc. Giảm độ bão hòa một phần có thể hướng sự chú ý đến một màu còn lại, nhưng màu đó cần có ý nghĩa tường thuật. Phương pháp này hoạt động khi độ chói, kết cấu và hình dạng vẫn mạnh sau khi giảm màu sắc. Nó thất bại khi việc xử lý màu xám được cho là sẽ tạo ra sự kịch tính mà bố cục và ánh sáng chưa bao giờ mang lại.",
    "bestPractices": "Giảm độ bão hòa trên toàn cảnh trong khi vẫn giữ được các giá trị riêng biệt về da, quần áo, kiến ​​trúc và nền. Hãy để hầu hết các màu sắc tiếp cận với màu xám trung tính thay vì sụp đổ thành một tông màu đục. Nếu tách biệt một màu, hãy chọn một đối tượng duy nhất và giữ lại kênh sống động của nó với các cạnh rõ ràng và phản chiếu đáng tin cậy. Hỗ trợ điều trị bằng ánh sáng định hướng và độ tương phản tông màu mạnh. Giữ màu đã chọn ổn định trên các khung để nó đọc như ý định, không xử lý nhiễu.",
    "commonMistakes": [
      "Loại bỏ màu sắc mà không giữ nguyên giá trị độ tương phản, tạo ra hình ảnh màu xám phẳng không có thứ bậc thị giác.",
      "Để lại một số màu không liên quan sống động, làm suy yếu sức thuyết phục của việc tách biệt màu sắc có chọn lọc.",
      "Làm bão hòa quá mức màu sắc được giữ lại cho đến khi nó xuất hiện như được dán lên thay vì hiện diện trong thế giới được chụp ảnh."
    ]
  },
  {
    "id": "sepia-tone",
    "name": "Sepia Tone",
    "definition": "A warm brownish-yellow color treatment that evokes aged photographs and historical periods, instantly signaling \"the past\" and adding a romantic, weathered quality. The sepia effect mimics the actual chemical toning process used on photographs from the 1860s through the early 1900s. The Coen Brothers used a digital sepia grade throughout \"O Brother, Where Art Thou?\" to evoke Depression-era America. Spielberg used sepia-tinted bookend sequences in \"Saving Private Ryan.\" Jean-Pierre Jeunet's \"A Very Long Engagement\" and Baz Luhrmann's period films use warm sepia tones to romanticize historical settings. The technique has become visual shorthand for memory and nostalgia.",
    "category": "vfx",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/sepia-tone.webp",
    "promptTemplate": "Sepia-toned treatment on [Subject], the warm brownish-yellow transforming the image into what appears to be an aged photographic plate, the entire color spectrum collapsed into variations of amber and umber, highlights tinged with pale gold and shadows falling to chocolate brown, visible grain and slight vignetting reinforcing the antique quality, the universal visual language that tells the audience \"this was a long time ago\"",
    "whenToUse": "Sử dụng tông màu nâu đỏ khi hình ảnh gợi ý ngay đến lịch sử, ký ức, một bức ảnh cũ hoặc khoảng cách lãng mạn với hiện tại. Nó phù hợp với các phụ trang lưu trữ, phụ trang thời kỳ, hồi ức gia đình và thế giới hình ảnh bị phong hóa có chủ ý. Việc xử lý là một cách viết tắt mạnh mẽ, vì vậy hãy kết hợp nó với thành phần và bề mặt phù hợp với từng thời kỳ. Đừng chỉ dựa vào màu nâu để mang khung cảnh hiện đại về quá khứ.",
    "bestPractices": "Thu gọn bảng màu thành màu hổ phách, màu nâu sẫm, vàng nhạt và nâu sô-cô-la trong khi vẫn giữ lại đầy đủ các gam màu từ sáng đến tối. Thêm hạt mịn có thể nhìn thấy, viền mờ nhẹ và độ mềm được hạn chế phù hợp với tấm ảnh cũ. Giữ các khuôn mặt và các đối tượng quan trọng được phân tách bằng giá trị chứ không phải màu sắc. Loại bỏ các điểm nhấn màu sắc hiện đại có thể làm thủng cách xử lý. Áp dụng cùng một đường cong tông màu trong toàn bộ chuỗi để thế giới màu nâu đỏ có cảm giác mạch lạc thay vì bị lọc ngắt quãng.",
    "commonMistakes": [
      "Áp dụng lớp phủ phẳng màu nâu làm ố màu trắng và đen mà không tạo ra dải tông màu thuyết phục.",
      "Giữ các điểm nhấn màu sắc tươi sáng hiện đại trong khung hình, điều này phá vỡ cách xử lý màu nâu đỏ truyền thống.",
      "Thêm những vết xước và hư hỏng cực độ cho đến khi các hiệu ứng bề mặt lấn át khuôn mặt, hành động và ký ức cảm xúc dự định."
    ]
  },
  {
    "id": "film-grain",
    "name": "Film Grain",
    "definition": "The visible texture of chemical film stock — random variations in density and color that give analog footage its organic, tactile character, often added digitally for warmth and nostalgia. Christopher Nolan and Quentin Tarantino remain committed to shooting on actual film stock, preserving the authentic grain of celluloid. Steven Soderbergh shot \"Traffic\" on different film stocks to differentiate storylines. Modern digital films frequently add film grain in post-production — David Fincher, despite shooting digitally, adds carefully calibrated grain to every frame. The resurgence of film grain aesthetics in photography and video reflects a cultural desire for the organic imperfection that digital capture eliminates.",
    "category": "vfx",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/film-grain.webp",
    "promptTemplate": "Heavy film grain visible on [Subject], the organic random texture of high-speed 35mm film stock pushed two stops in processing, each frame alive with dancing silver halide crystals, the grain coarser in shadows and finer in highlights, Kodak Vision3 500T texture that Tarantino and Nolan insist on preserving, the organic soul of celluloid in an increasingly digital world",
    "whenToUse": "Sử dụng hạt phim khi các bề mặt kỹ thuật số nguyên sơ cảm thấy quá vô trùng đối với câu chuyện hoặc khi một thời kỳ, tâm trạng phim tài liệu, thân mật hoặc hoài cổ được hưởng lợi từ sự không hoàn hảo về mặt xúc giác. Hạt có thể thống nhất các yếu tố tổng hợp và tạo ra kết cấu vật lý cho bóng. Chọn cường độ của nó để phù hợp với phạm vi ánh sáng và cảm xúc của cảnh. Hạt nặng phù hợp với vật liệu nhẹ hoặc bị đẩy; cảnh ánh sáng ban ngày tinh tế thường cần một cấu trúc tốt hơn.",
    "bestPractices": "Áp dụng kết cấu ngẫu nhiên, theo khung hình khác nhau trên toàn bộ hình ảnh, với hạt thô hơn ở vùng bóng sâu và hạt mịn hơn ở vùng sáng nổi bật. Hãy để mật độ màu dao động một cách tinh tế mà không bò quanh các cạnh hoặc thay đổi hình dạng đối tượng. Giữ nguyên các đặc điểm trên khuôn mặt và khả năng đọc văn bản bên dưới kết cấu. Giữ tỷ lệ hạt phù hợp với định dạng rõ ràng và kích thước ảnh. Trong chuyển động, mọi khung hình phải có hoa văn mới để bề mặt có cảm giác sống động thay vì giống như một lớp phủ tĩnh.",
    "commonMistakes": [
      "Sử dụng lớp nhiễu cố định trên mọi khung hình, làm cho hạt trông như được ghim vào màn hình.",
      "Áp dụng mật độ hạt bằng nhau cho các vùng sáng và vùng tối, giúp loại bỏ đặc tính phản hồi phơi sáng của kết cấu phim.",
      "Chọn các hạt lớn đến mức các đặc điểm khuôn mặt và chi tiết vật liệu trở nên khó đọc."
    ]
  },
  {
    "id": "bokeh",
    "name": "Bokeh",
    "definition": "The aesthetic quality of out-of-focus areas, particularly light sources that become soft, circular orbs — beautiful bokeh creates a dreamy, luminous background that elevates any subject. The term comes from the Japanese word for \"blur,\" and the quality of bokeh varies dramatically between lens designs. Anamorphic lenses produce distinctive oval bokeh, seen in J.J. Abrams' \"Star Trek\" and Ridley Scott's \"Blade Runner.\" Wong Kar-wai and Christopher Doyle exploit bokeh as a primary aesthetic element in \"In the Mood for Love.\" The rise of large-sensor cameras has made cinematic bokeh accessible to independent filmmakers, and the distinctive bokeh of vintage lenses has driven a renaissance in legacy glass from Helios, Canon K35, and Cooke Speed Panchro.",
    "category": "vfx",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "/img/cinematique/bokeh.webp",
    "promptTemplate": "Beautiful bokeh behind [Subject], hundreds of out-of-focus light sources transformed into soft luminous orbs of color, each perfectly round from the wide-open aperture of a fast 85mm lens, the distinctive creamy rendering of a Zeiss or Leica lens where the out-of-focus transition is butter-smooth, the visual magic of shallow depth of field turning the background into an impressionist painting of light",
    "whenToUse": "Sử dụng hiệu ứng mờ ảo khi đối tượng cần tách biệt khỏi môi trường đông đúc hoặc khi ánh sáng nền sẽ trở thành bầu không khí giàu cảm xúc hơn là thông tin. Nó phù hợp với ảnh chân dung, cảnh lãng mạn, đường phố về đêm và các chi tiết thân mật. Hiệu ứng mờ nhòe mạnh phụ thuộc vào độ sâu dàn dựng: chủ thể, mặt phẳng thấu kính và các nguồn sáng ở xa cần có sự tách biệt rõ ràng. Tránh nó khi khán giả phải đọc chi tiết về vị trí, hành động nền hoặc các mối quan hệ không gian.",
    "bestPractices": "Đặt chủ thể rõ ràng ở tiền cảnh và di chuyển các đèn thực tế ra phía sau chúng. Sử dụng độ sâu trường ảnh nông với khả năng mất nét mượt mà, biến các điểm ở xa thành các quả cầu hình tròn hoặc hình bầu dục mềm mại mà không làm mất màu. Giữ cho mắt hoặc chi tiết được chọn cực kỳ sắc nét. Tránh cắt các hình dạng mờ ảo qua hình bóng của đối tượng. Xây dựng các kích thước quả cầu khác nhau từ nhiều khoảng cách và giữ lại một số tín hiệu môi trường dễ nhận biết để nền có cảm giác quang học chứ không phải trang trí trừu tượng.",
    "commonMistakes": [
      "Làm mờ chủ thể cùng với hậu cảnh, không để lại mặt phẳng tiêu cự ổn định cho người xem.",
      "Lấp đầy mọi khu vực trống bằng các vòng tròn phát sáng giống hệt nhau, được đọc dưới dạng lớp phủ chứ không phải độ sâu quang học.",
      "Sử dụng hiệu ứng mờ khi địa lý hậu cảnh đóng vai trò quan trọng, che giấu thông tin mà khán giả cần để hiểu được khung cảnh."
    ]
  },
  {
    "id": "forced-perspective",
    "name": "Forced Perspective",
    "definition": "Using the relationship between camera position and object placement to create optical illusions of size — Hobbits appear small next to Gandalf through precise staging rather than CGI. Peter Jackson used forced perspective extensively in \"The Lord of the Rings,\" building oversized and undersized duplicate sets and using precise camera alignment to make Elijah Wood appear four feet shorter than Ian McKellen in the same frame. Jean-Pierre Jeunet used forced perspective for whimsical effect in \"Amélie.\" The technique dates back to the earliest days of cinema and architecture — Egyptian temples and Baroque churches used the same principle to appear larger than they are.",
    "category": "vfx",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/forced-perspective.webp",
    "promptTemplate": "Forced perspective illusion with [Subject] appearing impossibly large or small through precise camera alignment and placement, the depth of field deep enough that both near and far elements appear sharp, the lighting matching between foreground and background, the Peter Jackson technique of making the impossible look real without digital manipulation, just physics and precise alignment",
    "whenToUse": "Sử dụng phối cảnh bắt buộc khi các ký tự hoặc vật thể phải xuất hiện với kích thước lớn hoặc nhỏ không thể tưởng tượng được trong khi chia sẻ một khung hình đáng tin cậy. Nó phù hợp với quy mô giả tưởng, hài kịch kỳ quái, ảo ảnh vật thể khổng lồ và thủ thuật hình ảnh trông thực tế. Kỹ thuật này hoạt động từ một góc nhìn chính xác, do đó, nó hiệu quả nhất trong các cú đánh có bố cục với khả năng chặn có kiểm soát. Tránh chuyển động của camera trên phạm vi rộng trừ khi mối quan hệ căn chỉnh và độ sâu có thể được khóa xuyên suốt.",
    "bestPractices": "Đặt đối tượng trông lớn hơn gần máy ảnh và đối tượng trông nhỏ hơn ở xa hơn trên cùng một đường ngắm. Sử dụng tiêu điểm sâu để cả hai mặt phẳng vẫn sắc nét, sau đó điều chỉnh hướng ánh sáng, nhiệt độ màu, độ mềm của bóng và đường kẻ mắt ở khoảng cách xa. Ẩn các tham chiếu tỷ lệ để lộ sự phân tách. Giữ camera cố định tại điểm căn chỉnh. Để tương tác, các cử chỉ vũ đạo phải gặp nhau một cách trực quan trong khung hình dù các đối tượng có độ sâu khác nhau.",
    "commonMistakes": [
      "Cho phép lấy nét nông để lộ ra rằng các đối tượng rõ ràng là liền kề nằm trên các mặt phẳng có độ sâu tách biệt rộng rãi.",
      "Bao gồm các tham chiếu thang đo quen thuộc giữa các đối tượng, vạch trần thủ thuật khoảng cách trước khi ảo ảnh có thể phát huy tác dụng.",
      "Di chuyển máy ảnh ra khỏi điểm quan sát được thiết kế, khiến cho các cạnh, đường kẻ mắt và điểm tiếp xúc rõ ràng bị tách rời."
    ]
  },
  {
    "id": "lens-distortion",
    "name": "Lens Distortion",
    "definition": "Optical aberrations from specific lenses that bend, stretch, or warp the image — wide-angle barrel distortion, anamorphic oval bokeh, or vintage lens flaring — each lens has a personality. Emmanuel Lubezki exploits wide-angle distortion in his work with Terrence Malick, using ultra-wide lenses that bend the edges of reality. Roger Deakins prefers Arri/Zeiss Master Primes for their clinical precision, while Robert Richardson often chooses older, imperfect glass for its character. The anamorphic distortion of Panavision C-series and E-series lenses — their signature flares, edge softness, and oval bokeh — has become synonymous with the \"cinematic look.\" Modern lens designers at Cooke, Arri, and Zeiss carefully engineer specific amounts of controlled aberration.",
    "category": "vfx",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/lens-distortion.webp",
    "promptTemplate": "Lens distortion from a vintage anamorphic lens visible across [Subject], barrel distortion curving straight lines at frame edges into subtle arcs, oval-shaped bokeh, horizontal flare streaks, the edges softer and more swirled than the sharp center, chromatic aberration creating slight color fringing, the accumulated imperfections giving the image character that clinical modern lenses deliberately avoid",
    "whenToUse": "Sử dụng tính năng biến dạng ống kính khi quang học không hoàn hảo để tăng thêm cá tính, cảm giác khó chịu, sự thân mật hoặc kết cấu cổ điển. Độ méo hình rộng có thể khiến các khuôn mặt ở gần trở nên đối đầu, trong khi độ mềm biến dạng, hiệu ứng mờ hình bầu dục và ánh sáng lóa theo chiều ngang có thể tạo ra không gian điện ảnh mở rộng. Điều chỉnh quang sai phù hợp với đặc tính rõ ràng của ống kính và mục đích đóng khung. Sự biến dạng ít hữu ích hơn khi kiến ​​trúc, sản phẩm hoặc bằng chứng trực quan phải duy trì độ chính xác về mặt hình học.",
    "bestPractices": "Giữ đối tượng trung tâm tương đối sắc nét trong khi uốn cong các đường thẳng gần mép khung hình thành những vòng cung tinh tế. Thêm độ mềm mại ở cạnh, viền màu nhẹ, hiệu ứng mờ nền hình bầu dục và hạn chế hiện tượng lóa ngang từ các nguồn sáng thực tế. Hãy để phối cảnh kéo giãn các vật thể gần thấu kính nhất, chứ không phải các vật thể ở xa một cách ngẫu nhiên. Duy trì một trung tâm quang học mạch lạc trong toàn bộ ảnh. Những điểm không hoàn hảo sẽ có chung logic của ống kính, với quang sai mạnh hơn ở phần chu vi và khả năng hiển thị rõ ràng hơn ở gần giữa.",
    "commonMistakes": [
      "Làm cong phần trung tâm và các cạnh bằng nhau, khiến hình ảnh có cảm giác tan chảy về mặt kỹ thuật số thay vì bị biến dạng về mặt quang học.",
      "Việc thêm ánh sáng lóa mà không có nguồn sáng sẽ phá vỡ logic vật lý của ống kính ngụ ý.",
      "Biến dạng thùng, viền, độ mềm và hiệu ứng mờ nhòe quá mức khiến đối tượng mất đi thẩm quyền thị giác."
    ]
  },
  {
    "id": "morphing",
    "name": "Morphing / Dissolve Effect",
    "definition": "A digital transformation effect where one form smoothly dissolves, transmutes, or reshapes into another — character dissolving into particles, liquid metal transformation, ethereal dissolution, matter transmutation. Originally pioneered by ILM for the T-1000 in \"Terminator 2,\" morphing has evolved from face-to-face blending into a rich vocabulary of transformation effects. In AI image and video generation, morphing and dissolve effects are among the most promptable visual transformations, allowing creators to depict characters dissolving into elements, reforming from abstract matter, or undergoing surreal metamorphosis.",
    "category": "vfx",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "/img/cinematique/morphing.webp",
    "promptTemplate": "[Subject] caught mid-transformation, the form dissolving into particles or liquid or light, features simultaneously present and absent in a liminal state between two identities, the mathematical smoothness of digital morphing applied to the human form, even lighting ensuring the transformation reads cleanly, the unsettling beauty of identity in flux and matter in transition",
    "whenToUse": "Sử dụng phép biến hình khi bản thân quá trình biến đổi là một sự kiện kịch tính: một cơ thể thay đổi danh tính, vật chất tan thành các hạt, một khuôn mặt trở thành một khuôn mặt khác hoặc một vật thể biến đổi từ chất lỏng hoặc ánh sáng. Nó phù hợp với những khoảnh khắc siêu thực, kỳ diệu, công nghệ và kinh dị về cơ thể. Xác định rõ ràng nguồn, đích và tài liệu chuyển tiếp. Hiệu ứng không thành công khi mọi tính năng thay đổi độc lập mà không có sự tiến triển có thể đọc được giữa hai trạng thái.",
    "bestPractices": "Hiển thị đối tượng ở giữa hai hình thức xác định, với các điểm mốc từ cả hai danh tính hiển thị ở các vị trí tương ứng. Chọn một hành vi chuyển tiếp, chẳng hạn như hạt, chất lỏng hoặc ánh sáng và di chuyển nó dần dần khắp cơ thể thay vì đi khắp nơi cùng một lúc. Giữ máy ảnh ổn định và chiếu sáng đều để các đường viền thay đổi được đọc rõ ràng. Bảo toàn khối lượng và dòng chảy định hướng. Kết thúc bằng hình thức đích ổn định, không cho phép có các đoạn còn sót lại hoặc các đặc điểm không giải thích được từ nguồn.",
    "commonMistakes": [
      "Trộn các hạt, khói, chất lỏng và lửa trong một thay đổi, che khuất quy tắc trực quan chi phối của quá trình biến đổi.",
      "Mất đi các điểm mốc trên khuôn mặt hoặc cấu trúc giữa chừng, do đó nguồn và đích không còn có cảm giác được kết nối.",
      "Thay đổi ánh sáng và góc máy ảnh trong quá trình biến hình, khiến các lỗi về tính liên tục cạnh tranh với quá trình chuyển đổi dự kiến."
    ]
  },
  {
    "id": "film-noir",
    "name": "Film Noir",
    "definition": "A genre defined by high-contrast black-and-white photography, urban settings, morally ambiguous characters, femme fatales, and a pervasive sense of cynicism and doom. Born from German Expressionist emigrés and American hardboiled fiction, film noir flowered in the 1940s and 50s with Billy Wilder's \"Double Indemnity,\" Orson Welles's \"Touch of Evil,\" and John Huston's \"The Maltese Falcon.\" Cinematographers like John Alton and Nicholas Musuraca defined the visual language of shadows, rain, and venetian blinds. The genre was revived as neo-noir by Roman Polanski's \"Chinatown,\" the Coen Brothers' \"Blood Simple,\" and David Lynch's \"Mulholland Drive.\"",
    "category": "genres",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "/img/cinematique/film-noir.webp",
    "promptTemplate": "Film noir aesthetic with [Subject] in high-contrast black and white, deep blacks and silvery highlights, venetian blind shadow patterns, neon signs reflected in rain puddles, shot on Kodak Double-X black and white stock with hard lighting creating razor shadows, the John Alton visual language of moral ambiguity expressed through the war between light and darkness",
    "whenToUse": "Sử dụng phim noir cho tội phạm, sự phản bội, điều tra, sự hấp dẫn chết người hoặc bất kỳ câu chuyện nào được xây dựng dựa trên những lựa chọn bị tổn hại và sự diệt vong đang đến gần. Ngôn ngữ hình ảnh của nó biến ánh sáng thành áp lực đạo đức: các nhân vật bị chia cắt bởi bóng tối, đường phố trở thành cạm bẫy và nội tâm che giấu nhiều hơn những gì chúng bộc lộ. Thể loại này mạnh nhất khi kỹ thuật quay phim và xung đột nhân vật thống nhất với nhau. Riêng rèm Venice không thể tạo ra noir mà không có sự mơ hồ, nguy hiểm và cô lập.",
    "bestPractices": "Làm việc với màu đen và trắng có độ tương phản cao với màu đen sâu, điểm nhấn màu bạc và tông màu trung tính hạn chế. Đặt đối tượng trong nội thất đô thị hoặc con phố tối có mưa, sau đó chiếu ánh sáng mạnh qua rèm, cửa ra vào hoặc khói để tạo ra các bóng có hoa văn sắc nét. Sử dụng các góc thấp hoặc xiên và che đi các phần của khuôn mặt. Thêm phản chiếu ướt và đèn neon thực tế hạn chế chuyển thành độ sáng tông màu. Hãy biến mọi nguồn sáng thành áp lực, giám sát hoặc cám dỗ.",
    "commonMistakes": [
      "Thêm bóng mù venetian vào một khung cảnh trung tính tươi sáng mà không có xung đột, nguy hiểm hoặc mơ hồ về đạo đức.",
      "Nghiền nát mọi vùng tối thành màu đen vô nghĩa, xóa vị trí và hình bóng có thể đọc được của đối tượng.",
      "Sử dụng ánh sáng chân dung dịu nhẹ để loại bỏ xung đột thị giác cứng nhắc trong hình ảnh đen tối."
    ]
  },
  {
    "id": "german-expressionism",
    "name": "German Expressionism",
    "definition": "An early 20th-century movement using distorted sets, extreme shadows, and exaggerated angles to externalize inner psychological states — the visual DNA of modern horror and Tim Burton. Robert Wiene's \"The Cabinet of Dr. Caligari\" (1920) established the movement with painted shadows and impossible architecture. F.W. Murnau's \"Nosferatu\" and Fritz Lang's \"Metropolis\" expanded the vocabulary. When these filmmakers fled Nazi Germany, they brought Expressionism to Hollywood, directly influencing film noir. Tim Burton's \"Batman,\" \"Edward Scissorhands,\" and \"Batman Returns\" are modern Expressionism, and Guillermo del Toro's production design carries the movement's DNA.",
    "category": "genres",
    "difficulty": "Advanced",
    "mood": "Horror",
    "image": "/img/cinematique/german-expressionism.webp",
    "promptTemplate": "German Expressionism with [Subject] in deliberately distorted architecture, buildings leaning at impossible angles, shadows painted in sharp angular patterns that defy actual light sources, extreme contrast between blinding white and absolute black with no midtones, the Caligari aesthetic of a world bent by psychological torment, monochrome with exaggerated theatrical lighting",
    "whenToUse": "Sử dụng Chủ nghĩa Biểu hiện Đức khi môi trường cần thể hiện sự sợ hãi, hoang tưởng, đau buồn hoặc suy sụp tinh thần. Những bức tường méo mó, những con đường bất khả thi và những cái bóng sơn vẽ khiến tâm lý trở nên vật chất hơn là thực tế. Nó phù hợp với kinh dị, ác mộng, giả tưởng sân khấu và những khoảnh khắc mà sự thật chủ quan quan trọng hơn không gian tự nhiên. Cam kết về bối cảnh, ánh sáng, góc độ và hiệu suất; một ô cửa quanh co bên trong một thế giới bình thường được coi là vật trang trí chứ không phải phong cách cai trị.",
    "bestPractices": "Xây dựng một bộ đơn sắc với những tòa nhà nghiêng, những ô cửa lởm chởm, sàn nghiêng và những góc cạnh không thể tồn tại một cách tự nhiên. Loại bỏ hầu hết các tông màu trung tính, chia khung hình thành màu trắng chói mắt và màu đen tuyệt đối. Vẽ các bóng hình tam giác cứng trên các bề mặt mà không khớp với nguồn sáng thực tế. Nghiêng máy ảnh và phóng đại tư thế của đối tượng để tạo ấn tượng cho kiến ​​trúc. Giữ mọi hình ảnh méo mó và có chủ ý, như thể sự dày vò tâm lý của nhân vật đã thiết kế ra toàn bộ thế giới vật chất.",
    "commonMistakes": [
      "Giữ lại kiến ​​trúc hiện thực đồng thời thêm khung nghiêng ngẫu nhiên, tạo ra sự mô phỏng yếu ớt về phong cách.",
      "Sử dụng các bóng mờ tự nhiên mềm mại, trái ngược với bóng tối đồ họa được vẽ trong không gian Chủ nghĩa Biểu hiện.",
      "Thêm nhiều đạo cụ kinh dị không liên quan thay vì để hình học và độ tương phản méo mó mang theo mối đe dọa tâm lý."
    ]
  },
  {
    "id": "cinema-verite",
    "name": "Cinéma Vérité",
    "definition": "A documentary approach using handheld cameras, natural lighting, and unscripted moments to capture truth — the camera is acknowledged as present, truth provoked rather than merely observed. Jean Rouch and Edgar Morin coined the term with \"Chronicle of a Summer\" (1961), where the filmmakers actively engage with their subjects. The American equivalent, \"direct cinema\" (Frederick Wiseman, the Maysles Brothers), takes a more observational approach. The Dardenne Brothers' fiction films apply cinéma vérité techniques to narrative cinema. Paul Greengrass brings cinéma vérité energy to mainstream thrillers like \"United 93\" and the \"Bourne\" trilogy, making Hollywood action feel like documentary.",
    "category": "genres",
    "difficulty": "Intermediate",
    "mood": "Documentary",
    "image": "/img/cinematique/cinema-verite.webp",
    "promptTemplate": "Cinema verite documentary moment with [Subject], handheld camera following the action, natural available light providing uncontrolled illumination, the framing imperfect and reactive, occasional focus hunting, the raw audio of the environment, the entire aesthetic committed to the principle that imperfection is authenticity, Super 16mm film grain, the Jean Rouch principle that the camera's presence provokes truth",
    "whenToUse": "Sử dụng cinéma vérité khi sự thật cần được thể hiện thông qua sự tương tác thay vì quan sát bóng bẩy. Nó phù hợp với các cuộc phỏng vấn chuyển động, gặp gỡ xã hội, cảnh đường phố, tình huống chính trị và tiểu thuyết cần áp lực tài liệu. Hãy để sự hiện diện của camera ảnh hưởng đến hành vi thay vì giả vờ như nó vô hình. Phong cách này đòi hỏi sự không hoàn hảo về khả năng đáp ứng gắn liền với hành động đang diễn ra; rung ngẫu nhiên, âm thanh bị hỏng hoặc độ tiếp xúc kém mà không gây hậu quả cho con người chỉ là mô phỏng chất lượng sản xuất thấp.",
    "bestPractices": "Theo dõi đối tượng bằng máy ảnh cầm tay ở khoảng cách gần với con người, phản ứng muộn với các cử chỉ và đôi khi điều chỉnh khung hình hoặc tiêu điểm. Chỉ sử dụng ánh sáng sẵn có, cho phép màu sắc hỗn hợp và độ phơi sáng không đồng đều ở những nơi tạo ra ánh sáng đó. Giữ âm thanh xung quanh, sự gián đoạn và ánh mắt hướng về phía camera. Hãy để người điều khiển thay đổi vị trí khi các sự kiện thay đổi thay vì dự đoán trước mọi hành động. Giữ gìn thể diện và hành động thiết yếu; tính xác thực đến từ khả năng quan sát nhạy bén chứ không phải từ việc làm cho đoạn phim không thể đọc được.",
    "commonMistakes": [
      "Thêm những rung chuyển bạo lực liên tục, mang lại cảm giác như đang được biểu diễn và khiến khán giả không thể quan sát hành vi thực tế.",
      "Đánh bóng mọi bố cục và lực kéo tập trung, loại bỏ sự không chắc chắn mang tính phản ứng khiến cho cách tiếp cận trở nên căng thẳng.",
      "Coi hư hỏng kỹ thuật là tính xác thực trong khi đối tượng vẫn được tạo dáng, viết kịch bản và không bị máy ảnh chạm tới."
    ]
  },
  {
    "id": "french-new-wave",
    "name": "French New Wave",
    "definition": "A 1960s movement that broke every rule — jump cuts, handheld cameras, location shooting, fourth-wall breaks, and a rebellious rejection of polished studio filmmaking, treating cinema as conversation. Jean-Luc Godard's \"Breathless\" (1960) and François Truffaut's \"The 400 Blows\" (1959) launched the movement, joined by Agnès Varda, Jacques Rivette, Eric Rohmer, and Claude Chabrol. Cinematographer Raoul Coutard defined the visual style — handheld 16mm, natural light, real Parisian locations. The movement's influence is incalculable: Scorsese, Tarantino, Wes Anderson, Sofia Coppola, and Noah Baumbach all trace their artistic lineage directly to the Nouvelle Vague.",
    "category": "genres",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/french-new-wave.webp",
    "promptTemplate": "French New Wave scene with [Subject] shot handheld on what appears to be stolen moments, the camera following with improvisational looseness, harsh midday sun creating unflattering but honest illumination, the composition casual rather than composed, the visual rebellion against studio perfection, high-contrast black and white on grainy 16mm stock, the Raoul Coutard handheld aesthetic",
    "whenToUse": "Sử dụng phong cách Làn sóng mới của Pháp khi bộ phim mang lại cảm giác trẻ trung, tức thì, tự nhận thức và không bị bóng bẩy ở trường quay. Nó phù hợp với chuyện tình lãng mạn trên đường phố, cuộc trò chuyện không ngừng nghỉ, tội phạm vui nhộn và những nhân vật dường như sáng tạo ra bộ phim khi họ sống trong đó. Phong cách này có thể kết hợp công việc định vị cầm tay, cắt nhảy, địa chỉ trực tiếp và ánh sáng tự nhiên thô. Hãy chọn sự phá vỡ quy tắc để thể hiện thái độ hơn là sưu tầm những điểm không hoàn hảo về mặt thời trang.",
    "bestPractices": "Chụp trên đường phố thực trong ánh sáng buổi trưa gay gắt với màu đen trắng có độ tương phản cao có hạt hoặc màu sắc tự nhiên hạn chế. Theo dõi chủ thể ở chế độ cầm tay với khả năng điều chỉnh khung hình lỏng lẻo, thỉnh thoảng hiệu chỉnh tiêu điểm và bố cục thông thường. Hãy để các đoạn cắt nhảy loại bỏ các phần hành động liên tục trong khi vẫn giữ được dòng cảm xúc của nó. Cho phép nhìn vào ống kính hoặc xoay đột ngột khi năng lượng của nhân vật yêu cầu. Giữ âm thanh vị trí và cuộc sống nền không được kiểm soát có thể nhìn thấy được; thành phố nên có cảm giác bị chiếm giữ, không được mặc quần áo.",
    "commonMistakes": [
      "Kết hợp mọi thiết bị Làn sóng Mới trong mỗi cảnh quay, biến sự nổi loạn thành một danh sách kiểm tra hiệu ứng cứng nhắc.",
      "Sử dụng ánh sáng studio bóng loáng và khung có khóa trong khi chỉ dựa vào tủ quần áo để gợi lên sự chuyển động.",
      "Cắt tính liên tục một cách ngẫu nhiên mà không giữ lại xung lực của nhân vật khiến cho việc chỉnh sửa thô trở nên sống động."
    ]
  },
  {
    "id": "surrealism",
    "name": "Surrealism",
    "definition": "A movement drawing on dreams, the subconscious, and irrational imagery to create art that defies logic — melting clocks, impossible architecture, dream logic replacing narrative cause-and-effect. Luis Buñuel and Salvador Dalí created cinema's first surrealist film, \"Un Chien Andalou\" (1929), with its infamous eye-slicing opening. Buñuel continued making surrealist cinema for fifty years through \"The Discreet Charm of the Bourgeoisie.\" David Lynch is surrealism's modern heir — \"Eraserhead,\" \"Mulholland Drive,\" and \"Twin Peaks: The Return\" operate on dream logic. Alejandro Jodorowsky's \"El Topo\" and \"The Holy Mountain\" push surrealism to psychedelic extremes, and Charlie Kaufman's \"Eternal Sunshine\" and \"Synecdoche, New York\" bring surrealism into intimate emotional territory.",
    "category": "genres",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "/img/cinematique/surrealism.webp",
    "promptTemplate": "Surrealist scene with [Subject] in a world where dream logic replaces physical reality, impossible elements presented with the matter-of-fact certainty of documentary, lighting impossibly motivated from sources that do not exist, the Bunuel-Lynch visual language where the subconscious mind's architecture is rendered as physical space, the unsettling beauty of a world where logic has been replaced by feeling",
    "whenToUse": "Sử dụng chủ nghĩa siêu thực khi cảm giác, ham muốn, sợ hãi hoặc mâu thuẫn trong tiềm thức quan trọng hơn nguyên nhân và kết quả theo nghĩa đen. Nó phù hợp với những giấc mơ, những rạn nứt về danh tính, những chuyển đổi tâm lý và những thế giới nơi những sự kiện không thể xảy ra tiết lộ sự thật về cảm xúc. Thiết lập quy tắc trực quan phù hợp với cảm giác của khung cảnh, sau đó coi nó như bình thường. Sự kỳ lạ ngẫu nhiên thôi là chưa đủ; hình ảnh siêu thực mạnh mẽ nhất là cụ thể, mạch lạc và không thể có lý do.",
    "bestPractices": "Đặt chủ đề trong một khung cảnh dễ nhận biết, sau đó thay đổi một thực tế chi phối: quy mô, trọng lực, kiến ​​trúc, bản sắc hoặc thời gian. Trình bày yếu tố không thể có bằng khung hình trung tính và tính chắc chắn về mặt tư liệu hơn là cảnh tượng giả tưởng. Thúc đẩy ánh sáng từ những nguồn không thể tồn tại một cách rõ ràng nhưng vẫn giữ cho bề mặt và bóng tối nhất quán bên trong. Lặp lại một hình dạng hoặc hành động để thiết lập logic giấc mơ. Hãy để cảm xúc quyết định sự chuyển tiếp, đồng thời duy trì đủ tính liên tục về không gian để người xem có thể sống trong thế giới phi lý.",
    "commonMistakes": [
      "Lấp đầy khung hình bằng những vật thể lạ không liên quan, tạo ra sự mới lạ về mặt hình ảnh mà không mang tính logic cảm xúc hay chủ đề.",
      "Chiếu sáng những sự kiện không thể xảy ra như tưởng tượng ngoạn mục, làm suy yếu chất lượng thực tế bình tĩnh và đáng lo ngại của chúng.",
      "Thay đổi quy luật của thế giới trong từng khoảnh khắc, không để lại logic mơ mộng nào cho khán giả theo dõi."
    ]
  },
  {
    "id": "found-footage",
    "name": "Found Footage",
    "definition": "A style presenting the film as discovered amateur or surveillance recordings — \"The Blair Witch Project,\" \"Paranormal Activity,\" the conceit that what you're watching is \"real\" raw footage. Ruggero Deodato's \"Cannibal Holocaust\" (1980) invented the format, so convincingly that the director was charged with murder before proving the actors were alive. \"The Blair Witch Project\" (1999) made found footage a cultural phenomenon and a marketing revolution. \"Cloverfield\" brought the style to blockbuster scale, and \"Paranormal Activity\" proved it could be extraordinarily profitable. The format exploits our associations between low production quality and authenticity.",
    "category": "genres",
    "difficulty": "Basic",
    "mood": "Horror",
    "image": "/img/cinematique/found-footage.webp",
    "promptTemplate": "Found footage shot of [Subject] through a consumer-grade camera in night vision mode, the entire image in distinctive green-tinged infrared, the framing chaotic and uncontrolled, the footage corrupted with digital artifacts and compression blocks, timestamp running in the corner, the Blair Witch principle that what you cannot clearly see is infinitely more terrifying, the aesthetic of authenticity as horror's most effective weapon",
    "whenToUse": "Sử dụng cảnh quay được tìm thấy khi bản ghi âm là một phần của câu chuyện: bằng chứng, nhật ký được phục hồi, giám sát hoặc tài liệu cuối cùng về mối nguy hiểm. Nó đặc biệt hiệu quả đối với phim kinh dị vì khung hình hạn chế và khả năng hiển thị không hoàn hảo buộc khán giả phải tìm kiếm hình ảnh. Xác định ai là người cầm máy ảnh và tại sao họ tiếp tục quay phim. Nếu không có động lực đó, những cảnh quay hỗn loạn sẽ giống như một hiệu ứng hơn là chất liệu được khám phá.",
    "bestPractices": "Chọn một nguồn ghi cụ thể và duy trì các giới hạn nhất quán: máy ảnh tiêu dùng, tầm nhìn ban đêm, góc giám sát hoặc cảnh quay cầm tay giống như điện thoại. Thêm khung hình phản ứng, lia trễ, săn tìm tự động lấy nét, khối nén và dấu thời gian ổn định mà không che khuất hành động thiết yếu. Trong bóng tối, hãy để lộ một phần hình dạng ở rìa thay vì mối đe dọa được thắp sáng hoàn toàn. Hãy để hơi thở, chuyển động và nỗi sợ hãi của người điều khiển ảnh hưởng đến hình ảnh. Duy trì vị trí địa lý liên tục để sự không chắc chắn xuất phát từ tầm nhìn chứ không phải sự rời rạc.",
    "commonMistakes": [
      "Thay đổi định dạng ghi và kiểu tạo tác giữa các cảnh quay mà không có lý do câu chuyện dẫn đến thay đổi nguồn.",
      "Hiển thị rõ ràng mối đe dọa trong ánh sáng tập trung, loại bỏ sự không chắc chắn khiến cảnh quay bị hạn chế trở nên đáng sợ.",
      "Bỏ qua động cơ của người điều khiển máy quay, vì vậy việc tiếp tục quay phim trong lúc nguy hiểm có vẻ không hợp lý và thuận tiện về mặt máy móc."
    ]
  },
  {
    "id": "spaghetti-western",
    "name": "Spaghetti Western",
    "definition": "Italian-produced Westerns characterized by extreme close-ups, sweeping wide shots, Morricone-style scores, morally gray antiheroes, and a stylized, operatic approach to violence. Sergio Leone defined the genre with his Dollars trilogy starring Clint Eastwood and reached its apex with \"Once Upon a Time in the West\" — a film built entirely from looks, silences, and Ennio Morricone's score. Leone's visual grammar of extreme close-up eyes cutting to extreme wide shots became one of cinema's most imitated styles. Sergio Corbucci's \"Django\" and \"The Great Silence\" pushed the genre toward nihilism. Tarantino's \"Django Unchained\" and \"The Hateful Eight\" are love letters to the Spaghetti Western tradition.",
    "category": "genres",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/spaghetti-western.webp",
    "promptTemplate": "Spaghetti Western standoff with [Subject], the camera alternating between extreme close-ups of squinting eyes and ultra-wide shots revealing vast empty space, dust devils spiraling through the frame, golden hour desert light casting long shadows, shot on Techniscope 2-perf 35mm for gritty widescreen, the Ennio Morricone tension of silence stretched to breaking point",
    "whenToUse": "Sử dụng phong cách Spaghetti phương Tây cho các cuộc đối đầu, trả thù, huyền thoại ngoài vòng pháp luật và các cuộc đối đầu mà việc chờ đợi cũng mang lại nhiều sức mạnh như bạo lực. Nhịp điệu của nó phụ thuộc vào sự va chạm giữa những cảnh cực cận và những khoảng rộng bao la, biến đôi mắt, bàn tay và khoảng cách trống rỗng thành những người chơi kịch tính ngang nhau. Nó phù hợp với những nhân vật xám xịt về mặt đạo đức và sự nguy hiểm cách điệu. Đừng vội vàng hoàn trả; sự im lặng kéo dài là một phần của kiến ​​trúc thị giác.",
    "bestPractices": "Thiết lập một cảnh quay rộng trên sa mạc rộng lớn với đối tượng được giảm bớt trên địa hình trống trải, những con quỷ bụi và những cái bóng dài theo giờ vàng. Cắt đến những cảnh cực kỳ cận cảnh về đôi mắt nheo lại, làn da bị phong hóa, đôi ủng và một bàn tay lơ lửng gần vũ khí. Giữ đường chân trời rộng và màu sắc ấm áp, với kết cấu màn hình rộng sắc nét. Thay đổi quy mô từ từ, để những cử chỉ nhỏ mang theo mối đe dọa. Giữ im lặng cuối cùng cho đến khi căng thẳng lên đến đỉnh điểm, sau đó giải quyết bằng một hành động đột ngột, dễ hiểu.",
    "commonMistakes": [
      "Giữ mọi cảnh quay ở khoảng cách trung bình, làm mất đi sự va chạm đặc trưng của thể loại này giữa các khuôn mặt và không gian rộng lớn.",
      "Cắt nhanh chóng trong suốt thời gian bế tắc, từ chối sự im lặng và kéo dài cơ hội gây căng thẳng trong hoạt động.",
      "Sử dụng các bề mặt và quần áo sạch sẽ, hiện đại sẽ làm suy yếu thế giới vật chất bụi bặm, phong hóa xung quanh cuộc đối đầu."
    ]
  },
  {
    "id": "italian-neorealism",
    "name": "Italian Neorealism",
    "definition": "Post-war Italian movement using non-professional actors, real locations, and stories of everyday working-class life — raw, honest, and deeply humanist cinema stripped to its moral essentials. Roberto Rossellini's \"Rome, Open City\" (1945) launched the movement from the rubble of war. Vittorio De Sica's \"Bicycle Thieves\" (1948) and \"Umberto D.\" are the genre's masterpieces — devastating stories of ordinary people told with extraordinary simplicity. Luchino Visconti's \"La Terra Trema\" used actual Sicilian fishermen as actors. The movement's influence extends through the Dardenne Brothers, Ken Loach, and every filmmaker who chooses real locations and untrained faces over studio artifice.",
    "category": "genres",
    "difficulty": "Intermediate",
    "mood": "Documentary",
    "image": "/img/cinematique/italian-neorealism.webp",
    "promptTemplate": "Italian Neorealism with [Subject] on an actual working-class street, non-professional faces and authentic clothing, the real architecture providing the set, the camera observing at a respectful distance, natural overcast light providing flat honest illumination, black and white photography capturing poverty with dignity, the De Sica principle that reality itself is more dramatic than anything a screenwriter could invent",
    "whenToUse": "Sử dụng Chủ nghĩa Tân hiện thực Ý cho những câu chuyện về công việc, nghèo đói, gia đình, sự sinh tồn và những lựa chọn đạo đức thông thường được hình thành bởi điều kiện vật chất. Các địa điểm thực và những khuôn mặt không được tô điểm khiến sự chú ý tập trung vào các yếu tố con người hơn là cảnh tượng. Cách tiếp cận này phù hợp với sự quan sát thầm lặng và những hành động đơn giản nhưng có hậu quả nghiêm trọng. Tránh lãng mạn hóa khó khăn hoặc biến môi trường của tầng lớp lao động thành một nơi hoang tàn đẹp như tranh vẽ; phẩm giá đến từ sự quan tâm trực tiếp chứ không phải sự đau khổ tô điểm.",
    "bestPractices": "Đặt đối tượng trên một con phố làm việc thực tế giữa các công trình kiến ​​trúc cũ kỹ, quần áo hàng ngày, người đi bộ qua lại và các đồ vật chức năng. Sử dụng ánh sáng u ám tự nhiên hoặc ánh sáng ban ngày đơn giản với các chi tiết tông màu đen trắng. Giữ máy ảnh ở khoảng cách vừa phải, quan sát toàn bộ hành động mà không thay đổi góc độ quá nhiều. Thích những khuôn mặt không được trau chuốt và những cử chỉ dè dặt. Hãy để cuộc sống nền tiếp tục độc lập. Bố cục rõ ràng, nhưng tránh ánh sáng trang trí hoặc thiết kế sản xuất khiến cho khó khăn trông như được dàn dựng để tạo hiệu ứng.",
    "commonMistakes": [
      "Làm đẹp sự nghèo khó bằng ánh sáng rực rỡ và những tàn tích trang trí, biến khó khăn vật chất thành phông nền thẩm mỹ.",
      "Tạo mọi hình nền, loại bỏ cuộc sống đường phố độc lập cần thiết cho thực tế được quan sát.",
      "Buộc phải thể hiện khoa trương thay vì tin tưởng vào khuôn mặt bình thường, cử chỉ kiềm chế và hoàn cảnh cụ thể."
    ]
  },
  {
    "id": "dogme-95",
    "name": "Dogme 95",
    "definition": "A 1995 Danish manifesto demanding handheld cameras, natural lighting, real locations, no genre conventions, and no directorial credit — a radical purity movement that stripped cinema to its bones. Lars von Trier and Thomas Vinterberg created the Dogme 95 \"Vow of Chastity,\" and Vinterberg's \"The Celebration\" became the movement's masterpiece, using only available light and handheld consumer video cameras. Von Trier's \"The Idiots\" and Harmony Korine's \"Julien Donkey-Boy\" also bore the Dogme certificate. Though the movement officially ended, its influence persists in mumblecore, in the work of the Dardenne Brothers, and in any filmmaker who commits to stripping away artifice in pursuit of raw human truth.",
    "category": "genres",
    "difficulty": "Advanced",
    "mood": "Documentary",
    "image": "/img/cinematique/dogme-95.webp",
    "promptTemplate": "Dogme 95 aesthetic with [Subject] shot on a consumer camera with no additional lighting, harsh overhead fluorescent as the only illumination, color balance slightly off, handheld breathing movement, the radical commitment to zero artifice — no music, no effects, no genre, just human beings in real space, the Vinterberg-von Trier Vow of Chastity made visible",
    "whenToUse": "Sử dụng nguyên tắc Dogme 95 khi hiệu suất và xung đột con người vẫn tồn tại mà không cần trang trí điện ảnh. Phòng thực, máy ảnh cầm tay, ánh sáng sẵn có, âm thanh địa điểm và hành động ở thời điểm hiện tại có thể bộc lộ sự khó chịu mà kỹ thuật trau chuốt có thể làm dịu đi. Nó phù hợp với những khủng hoảng gia đình, những cuộc đối đầu và áp lực xã hội thân mật. Áp dụng các hạn chế như một kỷ luật sáng tạo, không phải như một cài đặt sẵn đau khổ; mọi khía cạnh thô phải đến từ không gian và sự kiện thực tế.",
    "bestPractices": "Đặt đối tượng vào bên trong hoặc bên ngoài thực tế và chỉ sử dụng ánh sáng có sẵn, ngay cả khi màu huỳnh quang hoặc độ phơi sáng của cửa sổ không hoàn hảo. Thực hiện theo hành động cầm tay ở khoảng cách gần với con người, cho phép chuyển động thở và điều chỉnh lại phản ứng. Giữ tiếng vang trong phòng tự nhiên, sự gián đoạn và các đồ vật thiết thực. Loại bỏ nhạc đã thêm, chuyển tiếp cách điệu, trang phục nhân tạo và hiệu ứng hình ảnh. Giữ nguyên các khuôn mặt và hành động có thể đọc được trong khi để các giới hạn của vị trí quyết định hình ảnh thay vì chỉnh sửa chúng thành bóng bẩy.",
    "commonMistakes": [
      "Thêm hạt nhân tạo, trục trặc và hư hỏng, nhầm lẫn sự cố sau sản xuất với cam kết về điều kiện thực tế.",
      "Sử dụng ánh sáng bổ sung ấn tượng đồng thời khẳng định chủ nghĩa hiện thực trong ánh sáng sẵn có, điều này phá vỡ nguyên tắc hình ảnh trọng tâm của kỹ thuật.",
      "Cố tình làm cho khung hình không thể đọc được, khi làm phim rút gọn nên phơi bày hiệu suất thay vì che giấu nó."
    ]
  },
  {
    "id": "mumblecore",
    "name": "Mumblecore",
    "definition": "Ultra-low-budget indie filmmaking focused on naturalistic dialogue, improvisation, and the awkwardness of young adult relationships — micro-budget intimacy as aesthetic. Andrew Bujalski's \"Funny Ha Ha\" (2002) is considered mumblecore's founding film, followed by the Duplass Brothers' \"The Puffy Chair,\" Joe Swanberg's \"Hannah Takes the Stairs,\" and Greta Gerwig's early acting work in the movement. The aesthetic defined by its limitations — consumer cameras, available light, non-professional audio — turned zero-budget necessity into a deliberate creative philosophy. Many mumblecore alumni went on to major careers: Gerwig directed \"Lady Bird\" and \"Barbie,\" and the Duplass Brothers produce for HBO.",
    "category": "genres",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "/img/cinematique/mumblecore.webp",
    "promptTemplate": "Mumblecore scene with [Subject] shot on what appears to be a consumer DSLR with available window light, the dialogue clearly improvised with interrupted sentences and awkward pauses, the framing functional rather than composed, the sound ambient and slightly echoey, the Bujalski-Swanberg aesthetic where lack of budget becomes the honesty of the image, naturalistic window light",
    "whenToUse": "Sử dụng mumblecore cho các tình huống rủi ro thấp mang lại cảm giác khó chịu cao độ: các mối quan hệ không chắc chắn, tuổi trưởng thành bị đình trệ, căn hộ chung cư và các cuộc trò chuyện mà mọi người ngắt lời, rút ​​lui hoặc nói sai điều. Quy mô hình ảnh khiêm tốn của nó thu hút sự chú ý đến hành vi và sự tạm dừng. Phong cách này phù hợp với khuôn viên nhỏ và không gian thực. Tránh thêm những nội dung bóng bẩy hoặc cốt truyện kịch tính lấn át sự trung thực mong manh của sự tương tác thông thường.",
    "bestPractices": "Đưa hai hoặc ba người vào một không gian căn hộ, nhà bếp, ô tô hoặc khu phố thực sự có sẵn đèn cửa sổ và khung hình chức năng. Giữ máy ảnh ở chế độ cầm tay nhưng bình tĩnh, điều chỉnh muộn khi có người thay đổi vị trí. Hãy để các đoạn hội thoại chồng lên nhau, các câu ngắt quãng và các khoảng dừng vẫn hiện rõ trong tư thế và đường mắt. Giữ lại tiếng vang trong phòng và âm thanh xung quanh. Tránh ánh sáng quyến rũ và sự đối xứng hoàn hảo giữa ảnh chụp ngược. Khung cảnh phải có cảm giác được khám phá xung quanh những người biểu diễn chứ không phải được sắp đặt trước họ.",
    "commonMistakes": [
      "Viết những bài phát biểu trau chuốt cho từng nhân vật, loại bỏ sự gián đoạn, do dự và không chắc chắn trong phong cách.",
      "Sử dụng chế độ lắc cầm tay mạnh mẽ trong cuộc trò chuyện yên tĩnh, điều này cạnh tranh với hành vi tế nhị hơn là quan sát hành vi đó.",
      "Thắp sáng căn phòng như một vở kịch uy nghiêm, xóa đi sự gần gũi thực tế của các cửa sổ và đồ đạc có sẵn."
    ]
  },
  {
    "id": "giallo",
    "name": "Giallo",
    "definition": "Italian horror-thriller genre known for vivid color palettes, elaborate murder sequences, leather-gloved killers, and a heightened visual style that prioritizes aesthetic beauty over narrative logic. Mario Bava established the giallo with \"Blood and Black Lace\" (1964) and \"Bay of Blood.\" Dario Argento perfected it with \"Deep Red,\" \"Suspiria,\" and \"Tenebre,\" using vivid primary-color lighting and elaborate set pieces that transform murder into grotesque art. Lucio Fulci pushed the genre to extremes with \"The Beyond.\" The giallo's influence extends to Brian De Palma, Nicolas Winding Refn's \"The Neon Demon,\" and the recent Suspiria remake by Luca Guadagnino.",
    "category": "genres",
    "difficulty": "Advanced",
    "mood": "Horror",
    "image": "/img/cinematique/giallo.webp",
    "promptTemplate": "Giallo-style scene with [Subject] drenched in vivid primary-color lighting, deep crimson from unseen sources, a pool of intense blue creating color boundaries where red meets blue in deep violet, the composition more concerned with aesthetic beauty than narrative logic, every frame designed as a painting, the Dario Argento principle that terror can be beautiful, the saturated primary colors of \"Suspiria\"",
    "whenToUse": "Sử dụng giallo cho những cảnh kinh dị-ly kỳ trong đó màu sắc, hồi hộp và dàn dựng hình ảnh phức tạp quan trọng hơn chủ nghĩa hiện thực nghiêm ngặt. Nó phù hợp với những kẻ rình rập, những kẻ giết người đeo găng, nội thất mê cung, những manh mối và những khoảnh khắc mà mối nguy hiểm trở thành một cảnh tượng điềm tĩnh. Bảng màu phải mang áp lực tâm lý vượt qua các ranh giới màu đỏ, xanh lam và tím. Tránh sử dụng ánh sáng rực rỡ chỉ để trang trí; mọi vùng màu sẽ định hình mối đe dọa, sự che giấu hoặc sự chú ý.",
    "bestPractices": "Đặt đối tượng bên trong một không gian tối được phân chia bằng ánh sáng xanh và đỏ đậm từ các nguồn không nhìn thấy hoặc cách điệu, cho phép chúng chồng lên nhau tạo thành màu tím đậm. Sử dụng bề mặt bóng loáng, hình bóng sắc nét, khung hình trang nhã và một chi tiết mang tính đe dọa như bàn tay đeo găng bằng da ở mép khung. Giữ độ bão hòa màu phong phú mà không làm mất hình dạng khuôn mặt hoặc kết cấu đối tượng. Di chuyển máy ảnh với sự tò mò có kiểm soát, phát hiện mối nguy hiểm thông qua hình ảnh phản chiếu, ô cửa và góc nhìn một phần thay vì phơi sáng toàn bộ ngay lập tức.",
    "commonMistakes": [
      "Sử dụng màu neon ngẫu nhiên mà không thiết lập kiến ​​trúc màu đỏ, xanh lam và tím có kỷ luật của khung cảnh.",
      "Làm phẳng bóng bằng ánh sáng lấp đầy rộng, loại bỏ sự che khuất khiến màu bão hòa có cảm giác nguy hiểm.",
      "Tập trung vào mối đe dọa ngay lập tức, không để lại sự tìm kiếm hình ảnh trang nhã hoặc hồi hộp trong bố cục."
    ]
  },
  {
    "id": "mockumentary",
    "name": "Mockumentary",
    "definition": "A fictional film presented in documentary style — talking head interviews, observational camera work, title cards — creating comedy through the contrast between the serious form and absurd content. Rob Reiner's \"This Is Spinal Tap\" (1984) established the mockumentary as a legitimate comedic form. Christopher Guest continued the tradition with \"Waiting for Guffman,\" \"Best in Show,\" and \"A Mighty Wind.\" Ricky Gervais and Stephen Merchant's \"The Office\" (UK) made the mockumentary format a television staple, leading to the American version and eventually \"Parks and Recreation\" and \"Modern Family.\" Taika Waititi's \"What We Do in the Shadows\" brought the mockumentary to horror-comedy.",
    "category": "genres",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "/img/cinematique/mockumentary.webp",
    "promptTemplate": "Mockumentary talking head interview with [Subject] looking slightly off-camera to an unseen interviewer, standard documentary medium close-up with unflattering fluorescent lighting, the documentary format treating the setting with the visual gravity of a war correspondent's confession, handheld camera occasionally reframing to maintain the documentary illusion, the Christopher Guest understanding that absurd comedy requires deadpan documentary treatment",
    "whenToUse": "Sử dụng mô phỏng khi hài kịch phụ thuộc vào các nhân vật hư cấu xử lý các sự kiện vô lý với sự nghiêm túc hoàn toàn về mặt tài liệu. Các cuộc phỏng vấn bằng đầu nói có thể mâu thuẫn với hành động được quan sát, bộc lộ sự phù phiếm hoặc để lộ một cái nhìn thoáng qua về những điều mà cuộc đối thoại sẽ không làm được. Hình thức này phù hợp với nơi làm việc, cộng đồng, hiệu suất và sự châm biếm xã hội. Giữ cho hành vi của máy ảnh đáng tin cậy và có chừng mực; nếu nhà làm phim bắt đầu thông báo những câu chuyện cười, sự tương phản cụ thể sẽ mất đi sự hấp dẫn.",
    "bestPractices": "Đóng khung đối tượng ở chế độ cận cảnh trung bình tiêu chuẩn, nhìn hơi xa máy ảnh về phía người phỏng vấn không nhìn thấy. Sử dụng đèn huỳnh quang hoặc ánh sáng cửa sổ đơn giản, nền tiện dụng và sự tâng bốc thị giác ở mức tối thiểu. Trong các cảnh quan sát, hãy để máy ảnh cầm tay điều chỉnh lại khung hình muộn, phóng to một chút về phía phản ứng bộc lộ hoặc ghi lại khoảnh khắc riêng tư vào ống kính. Giữ tiêu đề và bố cục tỉnh táo. Hãy xử lý mọi tuyên bố lố bịch bằng sức hấp dẫn trực quan của lời khai nghiêm túc, không bao giờ thêm hiệu ứng hài hước để giải thích trò đùa.",
    "commonMistakes": [
      "Chiếu sáng và đóng khung các cuộc phỏng vấn giống như những quảng cáo hào nhoáng, làm suy yếu sự tương phản giữa hình thức nghiêm túc và nội dung vô lý.",
      "Thêm các zoom truyện tranh vào từng dòng, khiến máy quay phải bật cười thay vì quan sát hành vi.",
      "Để các nhân vật thực hiện những trò đùa hiển nhiên trước ống kính thay vì bảo vệ hiện thực tài liệu chân thành của họ."
    ]
  },
  {
    "id": "poetic-realism",
    "name": "Poetic Realism",
    "definition": "A 1930s French movement blending realistic working-class settings with lyrical, dreamlike visual beauty — finding poetry in the mundane through fog-wrapped docks, rain on cobblestones, and melancholy love. Marcel Carné and cinematographer Eugène Schüfftan defined the style in \"Port of Shadows\" and \"Children of Paradise,\" creating misty, romantically lit working-class worlds. Jean Renoir's \"The Rules of the Game\" carries the movement's humanism. Jean Vigo's \"L'Atalante\" is poetic realism at its most luminous. The movement directly influenced film noir and continues to echo in the work of Wong Kar-wai, whose rain-soaked Hong Kong streets are direct descendants of Carné's fog-shrouded harbors.",
    "category": "genres",
    "difficulty": "Advanced",
    "mood": "Romantic",
    "image": "/img/cinematique/poetic-realism.webp",
    "promptTemplate": "Poetic realism with [Subject] rendered in heartbreaking lyrical beauty, fog softening every hard edge into dreamlike haze, the ordinary transformed into visual poetry by atmosphere, the Marcel Carne understanding that working-class life contains as much beauty and melancholy as any aristocratic drama, soft black and white with rich midtones, fog itself becoming the emotional texture of longing",
    "whenToUse": "Sử dụng chủ nghĩa hiện thực thơ mộng cho tình yêu u sầu, cuộc sống của tầng lớp lao động, những cuộc gặp gỡ cam chịu và những nơi bình thường đầy khao khát. Phương pháp này giữ cho đường phố, bến cảng, phòng ốc và lao động có thể được nhận biết trong khi bầu không khí nâng chúng vượt ra ngoài tài liệu đơn giản. Sương mù, mưa, sự phản chiếu và ánh sáng có tông màu dịu sẽ làm sâu sắc thêm cảm xúc của con người chứ không xóa bỏ hiện thực vật chất. Thật lý tưởng khi vẻ đẹp và sự khó khăn cần phải cùng tồn tại trong một hình ảnh gò bó.",
    "bestPractices": "Đặt đối tượng trong một con phố khiêm tốn, bến tàu, quán cà phê hoặc căn phòng thuê có dấu hiệu thực sự về công việc và trang phục. Sử dụng màu đen và trắng mềm mại với tông màu trung tính phong phú, đá cuội ướt, đèn khuếch tán và sương mù giúp giảm nhẹ độ tương phản ở xa. Giữ hình dáng được căn cứ thông qua quần áo xúc giác và hoạt động cụ thể. Để mưa hoặc sương mù định hình độ sâu mà không che giấu khung cảnh. Sáng tác trữ tình thông qua bầu không khí và cử chỉ, tránh lối kiến ​​trúc bóng bẩy hoặc kỳ ảo hào nhoáng.",
    "commonMistakes": [
      "Sử dụng sương mù dày đặc đến mức môi trường làm việc biến mất và hình ảnh trở nên sương mù lãng mạn chung chung.",
      "Làm đẹp mọi bề mặt cho đến khi lao động, hao mòn và hiện thực xã hội không còn neo giữ cách xử lý trữ tình.",
      "Nén hình ảnh vào độ tương phản đen tối khắc nghiệt, làm mất đi những âm trung mềm mại mang vẻ u sầu và dịu dàng."
    ]
  },
  {
    "id": "slow-cinema",
    "name": "Slow Cinema",
    "definition": "A contemporary movement embracing extremely long takes, minimal dialogue, and patient observation that challenges the viewer to slow down, observe, and find meaning in duration itself. Andrei Tarkovsky is the spiritual father of slow cinema, with his meditative long takes in \"Stalker\" and \"Mirror\" establishing duration as a cinematic tool. Béla Tarr's \"Sátántangó\" (seven hours of long takes) and \"The Turin Horse\" are the movement's most extreme expressions. Apichatpong Weerasethakul's Palme d'Or-winning \"Uncle Boonmee Who Can Recall His Past Lives\" and Chantal Akerman's \"Jeanne Dielman\" represent slow cinema's philosophical commitment to the idea that cinema should not compress time but inhabit it.",
    "category": "genres",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "/img/cinematique/slow-cinema.webp",
    "promptTemplate": "Slow cinema with [Subject] in a single unbroken composition, the camera absolutely still observing with infinite patience, the only movement gradual shifting of natural light, duration itself becoming the subject, natural overcast daylight providing soft even illumination, the Tarkovsky-Bela Tarr discipline of trusting that observation is enough, that the passage of real time is cinema's most radical subject",
    "whenToUse": "Sử dụng rạp chiếu phim chậm khi thời lượng tiết lộ hành vi, sự lao động, phong cảnh, nỗi đau buồn, thói quen hoặc sự chờ đợi. Một chế độ xem dài không gián đoạn có thể khiến những thay đổi nhỏ trở nên quan trọng vì khán giả có thời gian để ý đến chúng. Nó phù hợp với những câu chuyện và hành động đáng suy ngẫm thường được nén bằng cách chỉnh sửa. Chọn một khung hình có ánh sáng, thời tiết, tư thế hoặc đời sống nền thay đổi; sự tĩnh lặng phải chứa đựng sự chú ý chứ không chỉ đơn giản là che giấu các sự kiện.",
    "bestPractices": "Khóa máy ảnh trong một bố cục được cân bằng cẩn thận và quan sát đối tượng thông qua một hành động hoặc khoảng thời gian hoàn chỉnh mà không cần cắt. Giữ cuộc đối thoại thưa thớt và chuyển động dần dần. Hãy để ánh sáng u ám tự nhiên thay đổi, một hình bóng ở xa, hơi nước biến mất hoặc thay đổi tư thế theo thời gian thực. Tránh những lời thúc đẩy, đưa tin và các tín hiệu âm nhạc hướng dẫn cảm xúc. Bảo tồn âm thanh và độ sâu xung quanh. Khung hình phải đủ chính xác về mặt trực quan để những thay đổi nhỏ trở thành phần thưởng rõ ràng cho sự kiên nhẫn.",
    "commonMistakes": [
      "Giữ một bố cục trống không có ánh sáng, hành vi, âm thanh hoặc chi tiết môi trường đang phát triển để quan sát.",
      "Việc thêm các lần cắt giảm phạm vi hoặc điều chỉnh lại khung thường xuyên, điều này sẽ loại bỏ khoảng thời gian duy trì xác định phương pháp tiếp cận.",
      "Sử dụng nhịp độ chậm làm sự nghiêm túc tự động mà không mang lại cho khán giả hoạt động trực quan cụ thể đáng tham dự."
    ]
  },
  {
    "id": "hyperlink-cinema",
    "name": "Hyperlink Cinema",
    "definition": "A narrative style weaving multiple storylines that initially seem unconnected but gradually reveal hidden links — \"Crash,\" \"Babel,\" \"Magnolia\" — the interconnected web of human experience. Robert Altman pioneered the form with \"Nashville\" and \"Short Cuts.\" Paul Thomas Anderson's \"Magnolia\" weaves nine storylines that converge in a biblical climax. Alejandro González Iñárritu's \"Amores Perros\" and \"Babel\" extended the form across cultures and continents. Paul Haggis's \"Crash\" won the Best Picture Oscar using the structure. The form reflects a philosophical worldview — that all human lives are connected through invisible threads of cause and effect, that no story exists in isolation.",
    "category": "genres",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "/img/cinematique/hyperlink-cinema.webp",
    "promptTemplate": "Hyperlink cinema visualization with [Subject] shown across multiple disconnected lives in the same moment, each in their own lighting world and emotional register yet sharing the same space, the invisible connections not yet apparent but waiting to be revealed, the Robert Altman and Paul Thomas Anderson structure of simultaneous parallel stories, the whole greater than the sum because these lives will eventually collide",
    "whenToUse": "Sử dụng siêu liên kết rạp chiếu phim khi một số câu chuyện dường như riêng biệt có thể tiết lộ một mạng lưới lớn hơn về nguyên nhân, sự trùng hợp hoặc hậu quả chung. Không giống như hành động song song đơn giản, niềm vui đến từ việc khám phá những mối liên hệ ẩn giấu giữa những cuộc đời mà ban đầu tưởng chừng như không liên quan. Cung cấp cho mỗi chủ đề một động cơ cảm xúc độc lập và sớm tạo ra các đối tượng, không gian hoặc sự kiện liên kết. Sự hội tụ sẽ thay đổi cách hiểu những cảnh trước đó, chứ không chỉ đơn thuần là đặt mọi người vào một phòng.",
    "bestPractices": "Tạo thế giới hình ảnh riêng biệt cho từng nhân vật thông qua vị trí, bảng màu, ánh sáng và nhịp điệu khung hình. Lặp lại một đối tượng, tuyến đường, chương trình phát sóng, sự kiện thời tiết hoặc hình nền thông thường trên các chuỗi mà không nhấn mạnh đến kết nối quá sớm. Cắt ngang ở những cử chỉ hoặc hậu quả phù hợp, dần dần thắt chặt sự gần gũi về mặt thời gian. Khi cuộc sống va chạm, hãy đưa các yếu tố hình ảnh từ thế giới riêng biệt của chúng vào một bố cục. Bảo toàn tính nhân quả để mạng lưới cuối cùng có cảm giác được khám phá thay vì được tạo ra.",
    "commonMistakes": [
      "Tiết lộ mọi kết nối ngay lập tức, loại bỏ sự nhận biết dần dần mang lại cho cấu trúc niềm vui kể chuyện.",
      "Đưa ra các chủ đề phụ không có phần độc lập, khiến chúng có cảm giác giống như một cỗ máy cho cốt truyện của nhân vật trung tâm.",
      "Chỉ sử dụng sự trùng hợp ngẫu nhiên khi hội tụ mà không có vật thể, không gian, nguyên nhân, hậu quả được trồng để liên kết các cảnh trước đó."
    ]
  },
  {
    "id": "noir-tech",
    "name": "Tech Noir",
    "definition": "A hybrid genre fusing film noir aesthetics with science fiction — rain-soaked neon cities, morally ambiguous protagonists navigating high-tech dystopias, and the existential dread of noir transplanted into a technological future. Ridley Scott's \"Blade Runner\" (1982) defined the genre, combining Raymond Chandler-style detective narrative with a cyberpunk cityscape. James Cameron coined the term as the name of a nightclub in \"The Terminator.\" Alex Proyas's \"Dark City\" and Denis Villeneuve's \"Blade Runner 2049\" expanded the visual language. The genre asks noir's eternal question — what does it mean to be human? — through a technological lens.",
    "category": "genres",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "/img/cinematique/noir-tech.webp",
    "promptTemplate": "Tech noir scene with [Subject] in a rain-soaked neon-lit dystopia, the hard shadows and moral ambiguity of classic noir transplanted into a high-tech future, reflections of holographic advertisements in wet pavement, the loneliness of Blade Runner, anamorphic lens flares streaking through rain, cold blue and hot orange competing in every frame, smoke and vapor caught in shafts of artificial light",
    "whenToUse": "Sử dụng Tech Noir cho các câu chuyện trinh thám, kẻ chạy trốn, danh tính nhân tạo, giám sát và thỏa hiệp đạo đức trong thế giới công nghệ tiên tiến. Thể loại này phát huy tác dụng khi sự cô đơn và bóng tối đen tối vẫn là trung tâm bên dưới bề mặt tương lai. Mưa, quảng cáo ba chiều và máy móc sẽ làm tăng thêm sự xa lánh hơn là quảng cáo cảnh tượng. Cho nhân vật chính một sự lựa chọn bị tổn hại hoặc danh tính không ổn định; không có áp lực của con người, hình ảnh sẽ trở thành khoa học viễn tưởng neon chung chung.",
    "bestPractices": "Đặt đối tượng một mình trên con phố đêm ướt đẫm mưa hoặc nội thất công nghệ cao có bóng râm. Kết hợp ánh sáng môi trường màu xanh lạnh với các vật dụng màu hổ phách nóng, cho phép cả hai chiếu vệt trên mặt đường ướt và kính phản chiếu. Thêm khói, hơi nước, bề mặt giám sát và quảng cáo hình ba chiều hạn chế. Sử dụng ánh sáng mặt cứng, không gian âm sâu và ánh sáng biến dạng được thúc đẩy bởi các nguồn sáng. Giữ công nghệ được áp dụng và áp dụng vào cuộc sống hàng ngày trong khi nhân vật vẫn bị cô lập về mặt đạo đức và hình ảnh.",
    "commonMistakes": [
      "Làm đầy khung hình bằng các biển hiệu đèn neon trong khi loại bỏ bóng đen, sự cô đơn và những nguy cơ bị tổn hại về mặt đạo đức của nhân vật.",
      "Trình bày công nghệ như một cảnh tượng sạch sẽ, làm mất đi áp lực lạc hậu đã cũ đối với thể loại kết hợp.",
      "Sử dụng màu sắc cyberpunk sáng đều, không để lại bóng tối cho việc giám sát, che giấu hoặc gây sợ hãi hiện sinh."
    ]
  },
  {
    "id": "wuxia",
    "name": "Wuxia",
    "definition": "A Chinese genre centered on martial arts warriors bound by codes of honor, featuring gravity-defying combat choreography, flowing silk costumes, and painterly landscapes. Ang Lee's \"Crouching Tiger, Hidden Dragon\" (2000) introduced the genre to global audiences with its bamboo forest fight sequence. Zhang Yimou's \"Hero\" and \"House of Flying Daggers\" pushed the visual poetry further with color-coded narrative chapters and rain of arrows frozen in mid-air. King Hu's \"A Touch of Zen\" (1971) established the template of martial artists fighting in natural landscapes. The genre treats action as dance and violence as calligraphy.",
    "category": "genres",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "/img/cinematique/wuxia.webp",
    "promptTemplate": "Wuxia style with [Subject] in gravity-defying motion, robes and fabric trailing like calligraphy strokes through the air, the fight-as-dance choreography of Ang Lee and Zhang Yimou, painterly natural landscape behind — bamboo forests or misty mountains, the action frozen at its most balletic moment, Kodak Vision3 250D warmth, the poetry of martial arts rendered as visual art",
    "whenToUse": "Sử dụng võ hiệp cho các cuộc xung đột võ thuật được hình thành bởi danh dự, lòng trung thành, sự kiềm chế và vẻ đẹp thể xác không thể có được. Trận chiến trở thành vũ điệu, trong khi phong cảnh và trang phục mang ý nghĩa cảm xúc ngang bằng với các võ sĩ. Nó phù hợp với các cuộc đấu tay đôi trong tre, núi mù sương, sân trong và các chương được mã hóa bằng màu sắc. Tập trung vào một hành động múa ba lê và sự căng thẳng về mặt đạo đức của nó; giao tranh hỗn loạn đông đúc làm mất đi sự rõ ràng về mặt thư pháp khiến thể loại này trở nên đặc biệt.",
    "bestPractices": "Đóng băng hoặc theo dõi đối tượng tại thời điểm duyên dáng nhất của bước nhảy, rẽ hoặc đình chỉ. Kéo dài áo choàng, tay áo, tóc và vải dọc theo đường chuyển động giống như những nét thư pháp. Đặt hành động dựa trên tre, những ngọn núi mù sương hoặc khung cảnh thiên nhiên đẹp như tranh vẽ khác với ánh sáng ban ngày ấm áp và chiều sâu nhiều lớp. Giữ cho cơ thể có thể đọc được về mặt giải phẫu và vũ khí được căn chỉnh theo cử chỉ. Biên đạo đối thủ như một bố cục cân bằng, coi chuyển động thách thức trọng lực như một điệu nhảy có kiểm soát hơn là một chuyến bay bùng nổ.",
    "commonMistakes": [
      "Làm chật khung hình với nhiều võ sĩ, khiến vũ đạo được đọc như tiếng ồn chiến đấu thay vì thư pháp trực quan.",
      "Sử dụng quần áo và tư thế cứng nhắc, loại bỏ chuyển động trôi chảy mang lại cho hành động kiếm hiệp tính trữ tình.",
      "Coi chuyển động trên không như chuyến bay siêu anh hùng mà không có cử chỉ, cảnh quan có căn cứ hoặc căng thẳng kịch tính ràng buộc về danh dự."
    ]
  },
  {
    "id": "acid-western",
    "name": "Acid Western",
    "definition": "A psychedelic subversion of the Western genre that replaces manifest destiny optimism with hallucinatory existentialism. Alejandro Jodorowsky's \"El Topo\" (1970) invented the form — a mystical gunfighter journey through surreal desert landscapes. Jim Jarmusch's \"Dead Man\" (1995) deconstructed the genre with a dying accountant guided by a Native American named Nobody. The Coen Brothers' \"No Country for Old Men\" carries acid western DNA in its nihilistic desert violence. The genre takes the Western's vast landscapes and fills them with dread, absurdity, and metaphysical questioning.",
    "category": "genres",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "/img/cinematique/acid-western.webp",
    "promptTemplate": "Acid western with [Subject] in a vast surreal desert landscape, the familiar Western iconography distorted through a psychedelic lens, oversaturated sky bleeding unnatural colors, dust and heat haze warping the horizon, Jodorowsky's mysticism meets Jarmusch's deadpan, a lone figure in an existential void that was once the frontier, 16mm film grain, the American myth turned hallucinatory",
    "whenToUse": "Sử dụng phong cách Acid Western khi những huyền thoại biên giới cần tan biến thành ảo giác, chủ nghĩa hư vô, sự phi lý hoặc nghi ngờ siêu hình. Một tay đua đơn độc, thị trấn sa mạc, tay súng hoặc nghi lễ vẫn có thể được nhận ra trong khi cảnh quan trở thành khoảng trống hiện sinh. Nó phù hợp với những cuộc hành trình không an ủi số phận và bạo lực không có sự chắc chắn về anh hùng. Giữ đủ hình tượng phương Tây để thiết lập thể loại trước khi bóp méo nó thông qua màu sắc, quy mô, thời gian hoặc chủ nghĩa siêu thực cụ thể.",
    "bestPractices": "Đặt một chủ thể đơn độc trong một sa mạc rộng lớn với trang phục, vũ khí hoặc kiến ​​trúc quen thuộc của phương Tây, sau đó làm hỏng huyền thoại thông qua bầu trời quá bão hòa, màu sắc đường chân trời không tự nhiên, sương mù nhiệt và khoảng cách bị biến dạng. Sử dụng hạt sạn và quan sát tĩnh lâu thay vì hiệu ứng điên cuồng. Để một vật thể hoặc hành động siêu thực xuất hiện mà không cần giải thích. Giữ hình dáng nhỏ bé trên mặt đất, với sự sợ hãi và phi lý chia sẻ khung hình. Biên giới sẽ cảm thấy trống rỗng về ý nghĩa đã hứa.",
    "commonMistakes": [
      "Loại bỏ tất cả các yếu tố phương Tây dễ nhận biết, để lại hình ảnh sa mạc ảo giác mà không có thể loại nào bị lật đổ.",
      "Sử dụng các hiệu ứng kính vạn hoa vui nhộn, bỏ qua sự sợ hãi, sự vô lý và sự trống rỗng hiện sinh của hình thức.",
      "Đóng gói khung cảnh bằng các biểu tượng và tầm nhìn thay vì để một sự xâm nhập bất khả thi làm xáo trộn huyền thoại quen thuộc."
    ]
  },
  {
    "id": "southern-gothic",
    "name": "Southern Gothic",
    "definition": "A genre steeped in decay, moral corruption, and the haunted atmosphere of the American South — crumbling plantation houses, Spanish moss, oppressive humidity, and characters burdened by dark histories. Charles Laughton's \"The Night of the Hunter\" (1955) created the definitive Southern Gothic visual language with its dreamlike river sequences. Terrence Malick's \"Badlands\" and David Gordon Green's \"George Washington\" continued the tradition. The Coen Brothers' \"O Brother, Where Art Thou?\" brought sepia-toned Southern Gothic to comedy. The genre finds beauty in decay and horror in gentility.",
    "category": "genres",
    "difficulty": "Intermediate",
    "mood": "Horror",
    "image": "/img/cinematique/southern-gothic.webp",
    "promptTemplate": "Southern Gothic atmosphere with [Subject] amid crumbling architecture and encroaching nature, Spanish moss hanging like curtains, golden diffused light filtering through dirty windows, the beauty of decay, oppressive warmth visible in the thick humid air, Kodak Vision3 250D pushed warm, overexposed highlights bleeding into shadow, the weight of history in every peeling surface, Laughton's dreamlike menace",
    "whenToUse": "Sử dụng Southern Gothic cho những bí mật gia đình, sự băng hoại đạo đức, bạo lực kế thừa, sự bất an về tôn giáo và vẻ đẹp vướng vào sự suy tàn ở miền Nam nước Mỹ. Bối cảnh sẽ mang lại cảm giác nặng nề bởi lịch sử thay vì chỉ đơn thuần là cũ kỹ. Những ngôi nhà đổ nát, rêu Tây Ban Nha, cái nóng ngột ngạt và bề mặt lịch sự có thể che giấu mối đe dọa. Nó hoạt động tốt nhất khi môi trường và tính cách có cùng một quá khứ chưa được giải quyết; tàn tích trang trí một mình chỉ là phong cách khu vực.",
    "bestPractices": "Đặt chủ thể bên trong hoặc bên cạnh những công trình kiến ​​trúc miền Nam mục nát bị bao phủ bởi dây leo, gỗ ẩm, lớp sơn bong tróc và rêu Tây Ban Nha treo lủng lẳng. Lọc ánh sáng khuếch tán ấm áp qua cửa sổ bẩn hoặc tán lá dày, cho phép các điểm sáng nhẹ nhàng hòa vào bóng tối. Làm cho không khí ẩm có thể nhìn thấy được qua sương mù và sự tĩnh lặng. Giữ tủ quần áo hạn chế và kiểm soát tư thế, với một dấu vết lịch sử đáng lo ngại trong khung. Hãy để vẻ đẹp và mối đe dọa chiếm giữ cùng một bề mặt mà không gây ra hiệu ứng kinh dị rõ ràng.",
    "commonMistakes": [
      "Sử dụng một ngôi biệt thự đã được tân trang lại sạch sẽ với rêu trang trí, giúp loại bỏ áp lực vật lý của sự mục nát tích tụ.",
      "Thêm những bóng ma hay máu me chung chung thay vì để lịch sử, sự kiềm chế, sức nóng và tham nhũng tạo ra mối đe dọa.",
      "Lãng mạn hóa mọi bề mặt đổ nát, khiến khung cảnh đẹp như tranh vẽ thay vì gánh nặng về mặt đạo đức và cảm xúc."
    ]
  },
  {
    "id": "vaporwave",
    "name": "Vaporwave Aesthetic",
    "definition": "A visual style born from internet culture that repurposes 1980s and 90s commercial aesthetics — glitch art, neon pink and cyan gradients, retro computer interfaces, marble busts, Japanese text, and VHS degradation — into a nostalgic critique of consumer capitalism. While originating as a music genre, the visual language has been widely adopted in film, advertising, and AI generation. Nicolas Winding Refn's neon-soaked aesthetics in \"The Neon Demon\" share DNA with vaporwave. The style is simultaneously ironic and sincere — mourning a future that never arrived.",
    "category": "genres",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/vaporwave.webp",
    "promptTemplate": "Vaporwave aesthetic with [Subject] bathed in neon pink and cyan gradient lighting, retro digital artifacts and scan lines overlaid, reflective chrome and glass surfaces, the nostalgic melancholy of a 1990s shopping mall at closing time, VHS color bleeding and tracking errors, palm trees and marble columns, the beauty of obsolete technology, everything slightly too saturated and slightly too perfect",
    "whenToUse": "Sử dụng sóng hơi khi hình ảnh mang lại cảm giác hoài niệm về một tương lai thương mại chưa bao giờ đến. Nó phù hợp với những trung tâm mua sắm trống rỗng, công nghệ lỗi thời, không gian giải trí nhân tạo, giao diện cổ điển và những khung cảnh cân bằng giữa sự mỉa mai với nỗi u sầu chân thành. Phong cách này mạnh mẽ nhất khi hình ảnh người tiêu dùng những năm 1980 hoặc 1990 dễ nhận biết có cảm giác bị bỏ rơi hoặc bị lặp lại. Tránh coi nó như một bức ảnh ghép neon ngẫu nhiên; trung tâm cảm xúc là sự mất mát, sự lặp lại và lời hứa lỗi thời.",
    "bestPractices": "Làm cho đối tượng có màu chuyển sắc từ hồng đến lục lam và đặt chúng giữa các cột mạ crôm, thủy tinh, đá cẩm thạch, lòng bàn tay phản chiếu hoặc nội thất trống của trung tâm mua sắm. Thêm các dòng quét, tràn màu VHS nhẹ, lỗi theo dõi và các đoạn giao diện cổ điển mà không che mất bố cục. Giữ cho bề mặt hơi bóng và màu sắc hơi bão hòa. Để lại không gian trống rộng rãi và sự tĩnh lặng của đêm khuya để hình ảnh thương mại lỗi thời được coi là cảnh tượng u sầu hơn là cảnh tượng cyberpunk tràn đầy năng lượng.",
    "commonMistakes": [
      "Kết hợp mọi biểu tượng cổ điển cùng một lúc, biến thế giới hoài cổ mạch lạc thành ảnh ghép nhãn dán trên internet.",
      "Sử dụng ánh sáng cyberpunk tối tăm, mạnh mẽ, làm mất đi sự trống rỗng thương mại màu phấn của steamwave và sự bình tĩnh nhân tạo đầy đăm chiêu.",
      "Áp dụng mức độ hư hỏng VHS nghiêm trọng cho đến khi không thể đọc được kiến ​​trúc, văn bản và chủ đề trung tâm."
    ]
  },
  {
    "id": "cosmic-horror",
    "name": "Cosmic Horror",
    "definition": "A visual approach to the unknowable and incomprehensible — vast entities beyond human understanding, non-Euclidean geometry, and the terror of insignificance in an indifferent universe. Inspired by H.P. Lovecraft's literary work, the visual language was refined by John Carpenter's \"The Thing\" (1982) with its shapeshifting alien horror. Annihilation (2018) by Alex Garland brought cosmic horror to modern cinema with its shimmer-distorted landscapes. The genre's visual challenge is depicting what cannot be comprehended — using scale, distortion, and wrongness to suggest the incomprehensible.",
    "category": "genres",
    "difficulty": "Advanced",
    "mood": "Horror",
    "image": "/img/cinematique/cosmic-horror.webp",
    "promptTemplate": "Cosmic horror atmosphere with [Subject] dwarfed by something vast and incomprehensible at the edge of the frame, non-Euclidean geometry subtly wrong in the architecture, the Annihilation shimmer distorting organic forms, scale that makes the human figure irrelevant, deep shadow concealing shapes that should not exist, cold clinical lighting that reveals too much, the terror of understanding how small you are",
    "whenToUse": "Sử dụng nỗi kinh hoàng vũ trụ khi nỗi sợ hãi đến từ quy mô không thể hiểu được, thực tế không ổn định hoặc phát hiện ra rằng mối quan tâm của con người chẳng có ý nghĩa gì đối với vũ trụ rộng lớn hơn. Nó phù hợp với những cảnh quan ngoài hành tinh, những kiến ​​trúc bất khả thi, những sự biến đổi và những cuộc gặp gỡ khó có thể diễn giải đầy đủ. Hiển thị đủ cấu trúc để ám chỉ một trí thông minh hoặc sức mạnh to lớn nhưng vẫn giữ được sự không chắc chắn. Một sinh vật được giải thích đầy đủ sẽ trở thành một con quái vật; nỗi kinh hoàng của vũ trụ cần đến nỗi kinh hoàng của sự hiểu biết không thành công.",
    "bestPractices": "Đóng khung đối tượng con người như một nhân vật nhỏ bé, dễ đọc trên nền một cấu trúc hoặc thực thể to lớn bị che khuất một phần ở rìa tầm nhìn. Uốn cong kiến ​​trúc thành các mối quan hệ phi Euclide một cách tinh tế, lặp lại các hình thức ở quy mô không thể thực hiện được và bóp méo chất hữu cơ với ánh sáng lung linh hạn chế. Sử dụng ánh sáng lâm sàng lạnh để lộ ra những chi tiết đáng lo ngại trong khi bóng tối che khuất toàn bộ. Giữ quan điểm sai trong nội bộ nhưng mạch lạc về mặt trực quan. Hình ảnh phải làm cho tỷ lệ không thể phủ nhận và không thể hiểu được.",
    "commonMistakes": [
      "Tập trung và chiếu sáng đầy đủ thực thể, giảm sự hiện diện khó hiểu thành tiết lộ sinh vật thông thường.",
      "Sử dụng các xúc tu ngẫu nhiên mà không có quy mô bất khả thi, hình học sai hoặc bất kỳ thách thức nào đối với sự hiểu biết của con người.",
      "Làm cho hình người trở nên vô hình, loại bỏ tham chiếu tỷ lệ cần thiết để truyền đạt sự tầm thường."
    ]
  },
  {
    "id": "gear-arri-alexa",
    "name": "ARRI Alexa 65",
    "definition": "The gold standard of digital cinema cameras, known for its incredible dynamic range, natural skin tones, and soft, organic highlight roll-off. Used in blockbusters like 'The Revenant' and 'Dune'.",
    "category": "gear",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Shot on ARRI Alexa 65, large format digital sensor, cinematic dynamic range, natural skin tones, soft highlight roll-off, filmic look",
    "whenToUse": "Sử dụng khi bạn cần một Look chuẩn điện ảnh Hollywood hiện đại. Màu sắc da (skin tones) cực kỳ tự nhiên, dải nhạy sáng (dynamic range) rộng giúp giữ chi tiết vùng sáng hoàn hảo. Lý tưởng cho các cảnh quay kịch tính, chân dung điện ảnh và phim tài liệu cao cấp.",
    "bestPractices": "Hãy mô tả ánh sáng tương phản nhẹ (soft contrast) và màu sắc chân thực. Khuyến nghị AI kết hợp với ánh sáng tự nhiên hoặc ánh sáng phim trường chuyên nghiệp. Tránh yêu cầu độ sắc nét quá gai góc (oversharpened) vì đặc trưng của Alexa là độ chuyển mềm mại (filmic roll-off).",
    "commonMistakes": [
      "Quá lạm dụng màu sắc rực rỡ (oversaturation) làm mất đi vẻ đẹp nguyên bản của dải màu Alexa.",
      "Kết hợp với các hiệu ứng kỹ thuật số rẻ tiền làm phá vỡ cảm giác điện ảnh cao cấp."
    ]
  },
  {
    "id": "gear-red-vraptor",
    "name": "RED V-Raptor",
    "definition": "A high-end 8K cinema camera known for its ultra-sharp resolution, vivid color science, and hyper-detailed imagery. Excellent for sci-fi, action, and music videos.",
    "category": "gear",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Shot on RED V-Raptor 8K VV, ultra-high resolution, hyper-detailed, vivid colors, crisp contrast, high frame rate cinematic style",
    "whenToUse": "Lựa chọn số một khi cần độ sắc nét vô cực, chi tiết siêu cao (8K) và cảnh quay chuyển động cực nhanh. Tuyệt vời cho phim hành động, sci-fi, quảng cáo thương mại hoặc các bối cảnh yêu cầu màu sắc rực rỡ và độ tương phản mạnh.",
    "bestPractices": "Chỉ định '8K resolution', 'tốc độ khung hình cao (high frame rate)' và ánh sáng có độ tương phản mạnh (high contrast). Khuyến khích sử dụng trong môi trường có kết cấu kim loại, da hoặc môi trường tương lai.",
    "commonMistakes": [
      "Sử dụng cho các cảnh quá lãng mạn hoặc hoài cổ, vì độ sắc nét của máy RED đôi khi mang lại cảm giác quá 'kỹ thuật số'.",
      "Bỏ qua việc thêm độ sâu trường ảnh (depth of field), khiến hình ảnh trông phẳng."
    ]
  },
  {
    "id": "gear-imax-70mm",
    "name": "IMAX 70mm",
    "definition": "The largest and highest resolution film format in the world, championed by Christopher Nolan. It provides an unmatched level of detail, scale, and clarity.",
    "category": "gear",
    "difficulty": "Intermediate",
    "mood": "Epic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Shot on IMAX 70mm film, massive scale, ultra-high resolution, crystalline clarity, epic cinematic framing, negligible grain",
    "whenToUse": "Khi cần quy mô vĩ đại, hùng tráng như phim của Christopher Nolan. Định dạng này mang lại trường nhìn cực rộng, độ phân giải khủng khiếp và cảm giác đắm chìm tuyệt đối. Tuyệt vời cho phong cảnh, kiến trúc khổng lồ hoặc các trận chiến sử thi.",
    "bestPractices": "Mô tả tỷ lệ khung hình lớn (ví dụ 1.43:1 nếu hỗ trợ) và một đối tượng có tỷ lệ cực lớn so với con người. Nhấn mạnh vào 'độ phân giải vô hạn', 'chi tiết toàn cảnh' và ánh sáng tự nhiên đầy kịch tính.",
    "commonMistakes": [
      "Sử dụng IMAX cho một cảnh quay chân dung chật chội hoặc bối cảnh trong nhà nhỏ hẹp.",
      "Bỏ qua lớp tiền cảnh (foreground) khiến khung hình bị mất đi tỷ lệ so sánh độ lớn."
    ]
  },
  {
    "id": "gear-lens-35mm",
    "name": "35mm Prime Lens",
    "definition": "A classic wide-standard lens that offers a natural field of view close to human vision, providing environmental context without extreme distortion.",
    "category": "gear",
    "difficulty": "Basic",
    "mood": "Natural",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Shot with a 35mm prime lens, environmental portraiture, natural field of view, slight background separation, cinematic depth",
    "whenToUse": "Ống kính tiêu chuẩn vàng cho điện ảnh và báo chí. Cung cấp trường nhìn tương đương mắt người, hoàn hảo để kết nối nhân vật với môi trường xung quanh mà không gây méo hình. Rất tốt cho phim độc lập, đường phố và kể chuyện tập trung vào ngữ cảnh.",
    "bestPractices": "Tạo bố cục có cả nhân vật và bối cảnh (môi trường). Yêu cầu AI 'đặt nhân vật vào bối cảnh' với độ sâu trường ảnh vừa phải để khán giả có thể đọc được không gian xung quanh.",
    "commonMistakes": [
      "Quá lạm dụng hiệu ứng xóa phông (bokeh) mạnh khiến bối cảnh hoàn toàn biến mất.",
      "Cắt quá sát khuôn mặt gây ra sự nhàm chán."
    ]
  },
  {
    "id": "gear-lens-50mm",
    "name": "50mm Prime Lens",
    "definition": "The 'nifty fifty', a standard lens that exactly mimics the perspective of the human eye. Perfect for portraits, medium shots, and intimate scenes.",
    "category": "gear",
    "difficulty": "Basic",
    "mood": "Intimate",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Shot with a 50mm prime lens, natural human perspective, flattering proportions, creamy background bokeh, shallow depth of field",
    "whenToUse": "Ống kính chân dung và tầm trung cổ điển (Nifty Fifty). Tuyệt vời để tái tạo chính xác tỷ lệ khuôn mặt và góc nhìn tự nhiên nhất. Phù hợp cho các cảnh hội thoại, chân dung sâu sắc và các khung hình tĩnh lặng mang tính cá nhân.",
    "bestPractices": "Chỉ định 'medium shot' hoặc 'portrait'. Yêu cầu độ sâu trường ảnh nông (shallow depth of field) để tách biệt chủ thể khỏi nền một cách tự nhiên. Ánh sáng cửa sổ (window light) cực kỳ phù hợp.",
    "commonMistakes": [
      "Yêu cầu góc siêu rộng hoặc kiến trúc toàn cảnh với ống kính này.",
      "Bỏ qua ánh sáng định hướng, làm cho khuôn mặt thiếu khối (flat lighting)."
    ]
  },
  {
    "id": "gear-lens-macro",
    "name": "Macro Lens",
    "definition": "A specialized lens designed for extreme close-ups, revealing microscopic details like the texture of an iris, dew on a leaf, or threads of fabric.",
    "category": "gear",
    "difficulty": "Intermediate",
    "mood": "Detailed",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Shot with a 100mm macro lens, extreme macro photography, razor-thin depth of field, microscopic detail revealed, blurred background",
    "whenToUse": "Dùng để khuếch đại những chi tiết cực nhỏ không thể thấy bằng mắt thường: kết cấu con mắt, giọt sương, côn trùng, hoặc bề mặt vật liệu vi mô. Tạo cảm giác tò mò, cận cảnh mang tính khoa học hoặc kinh dị vi mô.",
    "bestPractices": "Chỉ định rõ đối tượng cực nhỏ (ví dụ: 'macro shot of an iris', 'dewdrop on a leaf'). Nhấn mạnh 'cực kỳ sắc nét', 'chi tiết cấp độ vi mô' và 'hiệu ứng bokeh mạnh ở viền'.",
    "commonMistakes": [
      "Yêu cầu một cảnh quay hành động rộng bằng ống kính macro.",
      "Không xác định rõ điểm lấy nét (focal point), khiến bức ảnh thành một mớ hỗn độn mờ nhòe."
    ]
  },
  {
    "id": "gear-lens-anamorphic",
    "name": "Panavision Anamorphic",
    "definition": "Lenses that squeeze the image to create an ultra-wide widescreen aspect ratio. Known for their distinct oval bokeh and horizontal lens flares (often blue).",
    "category": "gear",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Shot with Panavision Anamorphic lenses, 2.39:1 aspect ratio, oval bokeh, horizontal blue lens flares, cinematic edge distortion",
    "whenToUse": "Bí quyết cho tỷ lệ khung hình siêu rộng (2.39:1), hiệu ứng lóa sáng ngang (horizontal lens flares) màu xanh đặc trưng của JJ Abrams, và bokeh hình bầu dục. Hoàn hảo cho phim Sci-fi, hành động và MV ca nhạc.",
    "bestPractices": "Luôn yêu cầu 'anamorphic lens flare', 'oval bokeh', và 'widescreen ratio'. Đặt nguồn sáng mạnh (đèn pin, đèn neon, mặt trời) ở rìa hoặc hậu cảnh để ép AI tạo ra hiệu ứng lóa sáng.",
    "commonMistakes": [
      "Yêu cầu tỷ lệ khung hình 1:1 hoặc 4:3 (vuông) làm mất đi giá trị của anamorphic.",
      "Sử dụng cho các tác phẩm cổ trang lịch sử thuần túy nơi lóa sáng neon không phù hợp."
    ]
  },
  {
    "id": "gear-film-portra",
    "name": "Kodak Portra 400",
    "definition": "A highly popular color negative film stock known for its fine grain, exceptional skin tones, and warm, nostalgic aesthetic.",
    "category": "gear",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Kodak Portra 400 film stock, fine grain, warm nostalgic tones, perfect skin tones, slightly lifted blacks, analog photography aesthetic",
    "whenToUse": "Khi cần màu sắc pastel, tông màu da cực đẹp và cảm giác hoài cổ dịu nhẹ, lãng mạn. Màu Kodak Portra 400 là vua của nhiếp ảnh thời trang analog, phim thanh xuân, và các khoảnh khắc nhẹ nhàng trong ngày.",
    "bestPractices": "Mô tả 'màu pastel', 'độ nhiễu hạt phim nhẹ (fine grain)', và ánh sáng tự nhiên (đặc biệt là ánh sáng khuếch tán hoặc ánh sáng dịu). Rất thích hợp với cảnh quay ngoài trời, thiên nhiên và trang phục vintage.",
    "commonMistakes": [
      "Áp dụng cho bối cảnh Cyberpunk ban đêm tối tăm (Portra phát huy tốt nhất ở ánh sáng ban ngày/soft light).",
      "Thêm hiệu ứng quá sắc nét (oversharpening) kỹ thuật số, giết chết vẻ đẹp tương tự (analog)."
    ]
  },
  {
    "id": "gear-film-cinestill",
    "name": "Cinestill 800T",
    "definition": "A tungsten-balanced film stock repurposed from motion picture film. Famous for its prominent halation (red glowing halos around bright lights) and cool tones in daylight.",
    "category": "gear",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Cinestill 800T film stock, tungsten balanced, distinct red halation around highlights, cool teal shadows, cinematic film grain, night photography",
    "whenToUse": "CineStill 800T sinh ra để quay phim ban đêm với ánh sáng nhân tạo. Đặc trưng nổi bật là vầng hào quang màu đỏ/cam (halation) xung quanh các nguồn sáng chói (như bóng đèn, đèn neon) và tông màu lạnh/lam (cool/cyan) cho vùng tối.",
    "bestPractices": "Luôn kết hợp với bối cảnh ban đêm, đường phố mưa, trạm xăng, hoặc ánh sáng neon. Yêu cầu rõ 'red halation around highlights' và 'tungsten balanced film'.",
    "commonMistakes": [
      "Sử dụng dưới ánh sáng mặt trời tự nhiên giữa trưa sẽ tạo ra màu xanh dương sai lệch và không phát huy được hiệu ứng halation.",
      "Quên đưa nguồn sáng (bóng đèn, bảng hiệu) vào khung hình."
    ]
  },
  {
    "id": "env-cyberpunk",
    "name": "Cyberpunk",
    "definition": "A futuristic sci-fi aesthetic characterized by neon lights, rain-slicked streets, towering skyscrapers, holographic ads, and a gritty, high-tech/low-life atmosphere.",
    "category": "environment",
    "difficulty": "Intermediate",
    "mood": "Sci-Fi",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Cyberpunk environment, neon-lit rainy streets, towering megastructures, holographic advertisements, high-tech low-life, gritty futuristic aesthetic, vibrant cyan and magenta lights",
    "whenToUse": "Sử dụng cho các bối cảnh tương lai lạc hậu (high tech, low life), thành phố mưa axit, biển quảng cáo hologram, ánh sáng neon rực rỡ phản chiếu trên đường ướt. Tạo không khí bí ẩn, ngột ngạt và mang tính triết học về công nghệ.",
    "bestPractices": "Mô tả sự tương phản mạnh giữa ánh sáng neon (hồng, lam, tím) và bóng tối sâu thẳm. Kết hợp với mưa, khói sương, cáp quang, kim loại rỉ sét và thiết kế nhân vật cyborg.",
    "commonMistakes": [
      "Bối cảnh quá tươi sáng, sạch sẽ và hoàn hảo (đó là Utopia, không phải Cyberpunk).",
      "Chỉ dùng một màu đèn duy nhất khiến khung cảnh thiếu chiều sâu thị giác."
    ]
  },
  {
    "id": "env-steampunk",
    "name": "Steampunk",
    "definition": "A retro-futuristic style inspired by 19th-century industrial steam-powered machinery, featuring brass, copper, gears, Victorian fashion, and smoggy atmospheres.",
    "category": "environment",
    "difficulty": "Intermediate",
    "mood": "Retro",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Steampunk environment, brass and copper machinery, intricate gears, Victorian-era retro-futurism, steam vents, smoggy atmosphere, sepia tones",
    "whenToUse": "Lý tưởng cho bối cảnh giả tưởng thời kỳ Victoria cách mạng công nghiệp, nơi máy móc chạy bằng hơi nước, bánh răng, đồng thau và da thú thống trị. Mang lại cảm giác phiêu lưu, hoài cổ và cơ khí thẩm mỹ.",
    "bestPractices": "Nhấn mạnh các vật liệu như 'đồng thau (brass)', 'đồng đỏ (copper)', 'gỗ sồi' và 'khói hơi nước (steam)'. Ánh sáng nên dùng tông màu ấm (sepia, vàng cam) hoặc ánh sáng từ đèn lồng mờ ảo.",
    "commonMistakes": [
      "Thêm ánh sáng đèn LED hoặc màn hình kỹ thuật số (làm phá vỡ tính nguyên bản của hơi nước).",
      "Thiết kế quần áo quá hiện đại không phù hợp với kỷ nguyên Victoria."
    ]
  },
  {
    "id": "env-brutalism",
    "name": "Brutalism",
    "definition": "An architectural style characterized by massive, monolithic, and blocky appearances with a rigid geometric style and large-scale use of poured concrete.",
    "category": "environment",
    "difficulty": "Basic",
    "mood": "Minimalist",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Brutalist architecture environment, massive monolithic concrete structures, harsh geometric shapes, imposing scale, dystopian institutional aesthetic, minimalist textures",
    "whenToUse": "Khi muốn truyền tải sự áp bức, cảm giác vĩ đại nhưng lạnh lẽo, độc tài hoặc một tương lai phản địa đàng (Dystopia). Kiến trúc Brutalism với các khối bê tông thô khổng lồ, góc cạnh và thiếu vắng thiên nhiên.",
    "bestPractices": "Tập trung vào 'bê tông thô (raw concrete)', 'hình học khối', và 'sự hoành tráng áp đảo (monolithic)'. Sử dụng ánh sáng khắc nghiệt, bầu trời xám xịt hoặc sương mù để tăng thêm sự lạnh lẽo.",
    "commonMistakes": [
      "Thêm quá nhiều màu sắc sặc sỡ hoặc trang trí hoa văn mềm mại.",
      "Không gian quá chật hẹp; Brutalism cần không gian rộng để thể hiện sự thống trị của khối kiến trúc."
    ]
  },
  {
    "id": "env-post-apocalyptic",
    "name": "Post-Apocalyptic",
    "definition": "A setting that takes place after a catastrophic event, featuring ruined cities, overgrown nature reclaiming human structures, debris, and survivalist elements.",
    "category": "environment",
    "difficulty": "Intermediate",
    "mood": "Bleak",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Post-apocalyptic environment, ruined overgrown city, nature reclaiming concrete, debris and rust, desolate wasteland, survivalist aesthetic, muted earthy tones",
    "whenToUse": "Kể câu chuyện về sinh tồn, sự sụp đổ của nền văn minh và sự phục hồi của thiên nhiên hoặc sự hoang tàn của phóng xạ (ví dụ: The Last of Us, Mad Max).",
    "bestPractices": "Mô tả sự tàn phá: 'kiến trúc sụp đổ', 'thực vật mọc tràn (overgrown vegetation)' hoặc 'sa mạc hoang tàn'. Yêu cầu tông màu đất (vàng, nâu) hoặc màu xám tro. Ánh sáng xuyên qua mây mù bụi bặm.",
    "commonMistakes": [
      "Mọi thứ quá sạch sẽ hoặc quần áo nhân vật trông như vừa giặt ủi.",
      "Không có dấu vết cụ thể của nền văn minh cũ để tạo sự tương phản (ví dụ: một chiếc xe bus bị rỉ sét)."
    ]
  },
  {
    "id": "env-fog-volumetric",
    "name": "Volumetric Fog",
    "definition": "Thick, atmospheric fog that interacts with light sources, creating visible 'god rays' (light shafts) and adding immense depth and mood to a scene.",
    "category": "environment",
    "difficulty": "Intermediate",
    "mood": "Mysterious",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Heavy volumetric fog, atmospheric haze, light shafts piercing through the mist, god rays, dramatic atmospheric depth, mysterious mood, reduced visibility",
    "whenToUse": "Một công cụ mạnh mẽ để chia tách các lớp chiều sâu (tiền cảnh, trung cảnh, hậu cảnh), che giấu sự không hoàn hảo và tạo ra bầu không khí bí ẩn, kỳ ảo, hoặc rùng rợn. Hầu hết mọi cảnh điện ảnh đều cần một chút khói khí quyển (haze).",
    "bestPractices": "Yêu cầu 'volumetric lighting', 'god rays', hoặc 'cinematic haze'. Đặt một nguồn sáng mạnh ở phía sau (backlight) chiếu xuyên qua lớp sương mù để làm nổi bật khối khí và tạo tia sáng.",
    "commonMistakes": [
      "Sương mù quá đặc che khuất hoàn toàn chủ thể chính.",
      "Không có ánh sáng định hướng chiếu xuyên qua sương, khiến sương trông như một lớp bộ lọc (filter) xám xịt rẻ tiền."
    ]
  },
  {
    "id": "env-neon-rain",
    "name": "Neon Rain",
    "definition": "A staple of the cyberpunk genre, where rain acts as a reflective surface for vibrant neon lights, creating a colorful, glossy, and highly cinematic atmosphere.",
    "category": "environment",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Heavy rain falling, wet streets reflecting vibrant neon lights, glossy surfaces, cinematic rain, atmospheric moisture, light refracting through water drops",
    "whenToUse": "Khi muốn tạo ra sự phản chiếu tuyệt đẹp (reflections) và bầu không khí u sầu, cô đơn trong đô thị. Đèn neon và mưa là combo bất hủ của điện ảnh Neo-noir và Cyberpunk (Blade Runner, John Wick).",
    "bestPractices": "Yêu cầu 'mặt đường ướt (wet asphalt)', 'vũng nước phản chiếu ánh sáng (puddles reflecting neon)', và 'hạt mưa lấp lánh dưới đèn (backlit raindrops)'. Sử dụng ống kính có khẩu độ lớn để làm nhòe ánh đèn nền.",
    "commonMistakes": [
      "Cảnh mưa nhưng bề mặt vật liệu và quần áo nhân vật lại hoàn toàn khô ráo.",
      "Quên mô tả nguồn sáng neon màu sắc cụ thể (ví dụ: cyan và magenta) để tạo điểm nhấn."
    ]
  },
  {
    "id": "render-unreal5",
    "name": "Unreal Engine 5",
    "definition": "A powerful 3D creation tool known for its photorealistic graphics, Lumen global illumination, and Nanite virtualized geometry. Often used to force highly realistic 3D aesthetics.",
    "category": "rendering",
    "difficulty": "Basic",
    "mood": "3D",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Rendered in Unreal Engine 5, Lumen global illumination, Nanite micro-polygon geometry, photorealistic 3D render, next-gen graphics, hyper-detailed",
    "whenToUse": "Khi bạn muốn hình ảnh mang phong cách đồ họa máy tính siêu thực, nghệ thuật ý niệm cho Game AAA (Concept Art). Hình ảnh sẽ cực kỳ bóng bẩy, chi tiết, với ánh sáng động Lumen và hình học Nanite hoàn hảo.",
    "bestPractices": "Sử dụng các từ khóa 'Unreal Engine 5 render', 'Lumen global illumination', 'Nanite geometry', 'in-game engine'. Đề cập đến bối cảnh giả tưởng kỳ vĩ hoặc nhân vật CGI cực kỳ tinh xảo.",
    "commonMistakes": [
      "Cố gắng dùng prompt này để tạo ra một bức ảnh nhiếp ảnh đường phố quá đỗi đời thường (nó sẽ luôn có một chút cảm giác CGI)."
    ]
  },
  {
    "id": "render-octane",
    "name": "Octane Render",
    "definition": "A popular GPU-based render engine favored by digital artists (like Beeple) for its physically correct, stunning, and slightly glossy/cinematic look.",
    "category": "rendering",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Octane render, physically based rendering, glossy cinematic finish, flawless lighting, Cinema4D, high-end 3D art",
    "whenToUse": "Hoàn hảo cho nghệ thuật 3D trừu tượng, thiết kế đồ họa chuyển động (motion graphics), và chất liệu vật liệu bóng bẩy (kính, nhựa, kim loại phát sáng). Octane nổi tiếng với khả năng xử lý ánh sáng và vật liệu siêu chân thực.",
    "bestPractices": "Chỉ định 'Octane render', 'vật liệu khúc xạ (refractive materials)', 'kính mờ (frosted glass)', 'phản xạ ánh sáng (glossy reflections)'. Kết hợp với thiết kế 3D hiện đại.",
    "commonMistakes": [
      "Sử dụng cho chân dung nhiếp ảnh hiện thực (Octane mạnh nhất về vật liệu nhân tạo và nghệ thuật 3D, không phải mô phỏng máy ảnh cơ học)."
    ]
  },
  {
    "id": "render-raytracing",
    "name": "Ray Tracing",
    "definition": "A rendering technique that simulates the physical behavior of light, resulting in incredibly realistic reflections, refractions, and shadows.",
    "category": "rendering",
    "difficulty": "Intermediate",
    "mood": "Realistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Hardware ray tracing, physically accurate reflections, realistic light bounces, perfect refraction, sharp physically accurate shadows",
    "whenToUse": "Tập trung tối đa vào độ chính xác của ánh sáng, bóng đổ và sự phản xạ. Sử dụng khi bối cảnh có nhiều bề mặt phức tạp tương tác ánh sáng với nhau (nước, gương, kim loại, pha lê).",
    "bestPractices": "Nhấn mạnh 'raytraced reflections', 'accurate global illumination', và 'caustics'. Đưa nhiều vật thể có tính phản xạ hoặc trong suốt vào khung hình để khoe sức mạnh của Raytracing.",
    "commonMistakes": [
      "Áp dụng cho môi trường nhám, mờ hoặc hoàn toàn chìm trong bóng tối không có nguồn sáng nổi bật."
    ]
  },
  {
    "id": "render-sss",
    "name": "Subsurface Scattering",
    "definition": "A crucial rendering technique for organic materials (like human skin, wax, or marble) where light penetrates the surface, scatters inside, and exits, creating a soft, glowing translucency.",
    "category": "rendering",
    "difficulty": "Advanced",
    "mood": "Realistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Subsurface scattering, light penetrating translucent surfaces, highly realistic human skin rendering, soft organic glow, light bleeding through edges",
    "whenToUse": "Subsurface Scattering (SSS) là hiệu ứng ánh sáng đi xuyên qua một lớp vật liệu bán trong suốt (như da người, sáp nến, thạch, ngọc bích) rồi tán xạ ra ngoài. Cực kỳ quan trọng để tạo ra làn da CGI chân thực, hoặc sinh vật ngoài hành tinh.",
    "bestPractices": "Luôn đặt một nguồn sáng mạnh (backlight) phía sau chủ thể (ví dụ: chiếu vào tai hoặc ngón tay). Yêu cầu 'subsurface scattering', 'translucent skin', 'glowing from within'.",
    "commonMistakes": [
      "Sử dụng cho vật liệu kim loại hoặc đá đặc (chúng không cho ánh sáng xuyên qua).",
      "Chiếu sáng thẳng từ phía trước (frontal light) làm mất hoàn toàn hiệu ứng tán xạ bề mặt."
    ]
  },
  {
    "id": "render-masterpiece",
    "name": "Masterpiece / 8K",
    "definition": "General quality modifiers that tell the AI to maximize its output quality, resolution, and detail. Often combined with 'trending on ArtStation' for highly polished digital art.",
    "category": "rendering",
    "difficulty": "Basic",
    "mood": "High Quality",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Masterpiece, 8K resolution, hyper-realistic, highly detailed, insanely intricate, award-winning photography, trending on ArtStation",
    "whenToUse": "Khi bạn không cần quan tâm đến logic vật lý của máy ảnh, mà chỉ muốn AI tung hết sức mạnh để tạo ra một tác phẩm nghệ thuật kỹ thuật số lộng lẫy, chi tiết siêu thực và hoàn hảo nhất có thể.",
    "bestPractices": "Kết hợp với các từ khóa như 'trending on ArtStation', 'award-winning', 'hyper-detailed', 'insane resolution'. Hãy để trí tưởng tượng bay bổng và kết hợp nhiều phong cách nghệ thuật.",
    "commonMistakes": [
      "Sử dụng cùng với các thẻ mô phỏng lỗi máy ảnh (như noise, blur, vhs glitch) gây ra sự mâu thuẫn trong chỉ thị cho AI."
    ]
  },
  {
    "id": "detail-pores",
    "name": "Skin Pores & Texture",
    "definition": "Forces the AI to render microscopic skin details, preventing characters from looking like plastic mannequins or overly smoothed digital paintings.",
    "category": "details",
    "difficulty": "Advanced",
    "mood": "Realistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Visible skin pores, peach fuzz, microscopic skin imperfections, realistic skin texture, hyper-detailed epidermis, unretouched raw photography",
    "whenToUse": "Cực kỳ cần thiết cho nhiếp ảnh chân dung cận cảnh (macro beauty photography) nhằm khẳng định tính hiện thực cao độ, xóa bỏ cảm giác 'da nhựa giả' (plastic skin) thường thấy của AI.",
    "bestPractices": "Mô tả 'lỗ chân lông rõ nét (visible skin pores)', 'kết cấu da chân thực (realistic skin texture)', 'những khuyết điểm nhỏ (subtle imperfections)'. Kết hợp với ống kính macro và ánh sáng bên (side light) để tôn lên kết cấu.",
    "commonMistakes": [
      "Thêm quá nhiều từ khóa yêu cầu sự hoàn hảo ('perfect smooth skin', 'flawless') sẽ mâu thuẫn và triệt tiêu chi tiết lỗ chân lông."
    ]
  },
  {
    "id": "detail-wet",
    "name": "Wet Aesthetics / Sweat",
    "definition": "Adds moisture, sweat, or wetness to the subject, which significantly increases contrast, specular highlights, and visceral realism.",
    "category": "details",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Glistening with sweat, wet skin aesthetics, droplets of moisture, high specular highlights on skin, visceral realism, damp hair clinging to face",
    "whenToUse": "Sử dụng để tăng thêm sự kịch tính, sự mệt mỏi, hoặc sự quyến rũ. Da ướt, mồ hôi hay nước mưa bắt sáng cực kỳ tốt (specular highlights), làm hình ảnh có chiều sâu và sống động hơn gấp nhiều lần.",
    "bestPractices": "Yêu cầu 'da đẫm mồ hôi (sweat glistening)', 'da ướt (wet skin)', hoặc 'quần áo dính nước'. Nhất thiết phải có một nguồn sáng cứng (hard light) chiếu vào để tạo ra các điểm sáng phản quang trên da.",
    "commonMistakes": [
      "Quên ánh sáng tạo bóng; da ướt trong môi trường ánh sáng khuếch tán phẳng (flat light) sẽ trông như da bị nhờn chứ không phải ướt."
    ]
  },
  {
    "id": "detail-hair-wind",
    "name": "Hair in the Wind",
    "definition": "A dynamic modifier that adds movement and energy to a static image or a video prompt by having individual strands of hair interacting with the environment.",
    "category": "details",
    "difficulty": "Basic",
    "mood": "Dynamic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Individual strands of hair blowing gracefully in the wind, dynamic movement, flyaway hairs catching the backlight, kinetic energy",
    "whenToUse": "Tạo cảm giác động (dynamic motion) cho một bức ảnh tĩnh. Tóc bay trong gió biểu tượng cho sự tự do, hành động mãnh liệt, hoang dã hoặc thời tiết khắc nghiệt.",
    "bestPractices": "Kết hợp mô tả 'tóc tung bay dữ dội (hair wildly blowing in the wind)', 'chuyển động lơ lửng'. Đảm bảo quần áo hoặc môi trường xung quanh (như lá cây rụng) cũng đồng bộ với hướng gió.",
    "commonMistakes": [
      "Mô tả tóc bay trong bối cảnh hoàn toàn kín (như trong một hầm mộ) mà không có nguồn gió (ví dụ quạt công nghiệp) làm cảnh trở nên phi logic."
    ]
  },
  {
    "id": "detail-catchlight",
    "name": "Eye Catchlights",
    "definition": "The small reflection of a light source in a subject's eye. It brings characters to life; without it, eyes look dead and glassy.",
    "category": "details",
    "difficulty": "Advanced",
    "mood": "Intimate",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Sharp reflections in the pupils, distinct eye catchlights, glowing irises, deeply expressive eyes, micro-details in the cornea",
    "whenToUse": "Điểm phản sáng (Catchlight) trong đôi mắt là linh hồn của ảnh chân dung. Không có catchlight, ánh mắt nhân vật trông như đã chết hoặc vô hồn. Thêm vào để tạo chiều sâu cảm xúc.",
    "bestPractices": "Yêu cầu 'bright catchlights in eyes', 'ánh mắt long lanh'. Bạn có thể chỉ định hình dạng nguồn sáng (ví dụ: 'ring light reflection in eyes' hoặc 'window light reflecting in eyes').",
    "commonMistakes": [
      "Sử dụng ánh sáng hoàn toàn từ trên cao (top-down lighting) khiến hốc mắt bị tối sầm và không ánh sáng nào lọt vào được nhãn cầu."
    ]
  },
  {
    "id": "detail-rust-metal",
    "name": "Rusted Metal Texture",
    "definition": "A material specifier that forces intricate, decayed, and oxidized metallic surfaces, perfect for sci-fi, cyberpunk, or post-apocalyptic scenes.",
    "category": "details",
    "difficulty": "Basic",
    "mood": "Gritty",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Heavily rusted metal surfaces, oxidized iron, peeling paint, corroded edges, intricate gritty textures, industrial decay",
    "whenToUse": "Gia tăng tính lịch sử, sự hoang tàn, hoặc phong cách Grunge/Steampunk/Post-apocalyptic. Bề mặt kim loại rỉ sét kể câu chuyện về sự bào mòn của thời gian và thiên nhiên.",
    "bestPractices": "Mô tả 'kim loại rỉ sét nặng (heavily rusted metal)', 'lớp sơn bong tróc (peeling paint)', 'chi tiết ăn mòn (corrosion)'. Chụp cận cảnh (macro) để thấy rõ sự sần sùi của oxit sắt.",
    "commonMistakes": [
      "Áp dụng lên các vật liệu không bị rỉ sét (như nhựa, vàng, hoặc nhôm hiện đại) khiến AI bị bối rối."
    ]
  },
  {
    "id": "v-cinematic",
    "name": "Video 01. Cinematic Masterpiece",
    "definition": "Create a cinematic-quality video with immersive storytelling and premium visual production. Dynamic camera movements, dramatic framing, shallow depth of field, HDR visuals, volumetric light, film-style color grading, smooth transitions, Netflix documentary quality.",
    "category": "videostyles",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Cinematic-quality video of [Subject], dynamic camera movements, dramatic framing, shallow depth of field, volumetric light, film color grading, smooth B-roll transitions, natural Vietnamese voiceover narration, 4K HDR",
    "whenToUse": "Dùng khi muốn sản xuất video chuẩn điện ảnh bom tấn Netflix, giới thiệu sản phẩm cao cấp hoặc phim tài liệu hoành tráng.",
    "bestPractices": "Kết hợp quay góc rộng cinematic với ánh sáng thể tích và nhạc nền giao hưởng.",
    "commonMistakes": [
      "Sử dụng chuyển cảnh quá nhanh làm mất chất cinema."
    ]
  },
  {
    "id": "v-documentary",
    "name": "Video 02. Authentic Documentary",
    "definition": "Realistic documentary-style video focused on clarity, authenticity, and educational storytelling. Prioritize real-world footage, aerial views, maps, timelines, infographics, National Geographic production style.",
    "category": "videostyles",
    "difficulty": "Intermediate",
    "mood": "Documentary",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Authentic documentary video of [Subject], real-world footage, aerial drone shots, maps, timelines, animated infographics, true-to-life colors, calm native Vietnamese narration, National Geographic style",
    "whenToUse": "Phù hợp làm video giáo dục, lịch sử, địa lý, thuyết minh khoa học.",
    "bestPractices": "Bổ sung bản đồ, mốc thời gian và góc quay máy bay không người lái.",
    "commonMistakes": [
      "Quá nhiều hiệu ứng giả tưởng không đúng thực tế."
    ]
  },
  {
    "id": "v-film-noir",
    "name": "Video 03. Classic Film Noir",
    "definition": "Classic Film Noir video with dramatic storytelling, low-key high-contrast black-and-white, shadows, silhouettes, rainy streets, mystery atmosphere.",
    "category": "videostyles",
    "difficulty": "Advanced",
    "mood": "Dramatic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Classic Film Noir video of [Subject], high-contrast black-and-white, low-key lighting, deep shadows, silhouettes, rain reflections, vintage film grain, slow camera movement, suspenseful rhythm",
    "whenToUse": "Dùng cho video trinh thám, tâm lý tội phạm, không khí u uất và bí ẩn.",
    "bestPractices": "Đổ bóng mạnh qua khe cửa chớp và đường phố ẩm ướt đêm.",
    "commonMistakes": [
      "Dùng quá nhiều màu sắc sặc sỡ phá vỡ tone đen trắng."
    ]
  },
  {
    "id": "v-vintage-film",
    "name": "Video 04. Vintage Retro Film",
    "definition": "Nostalgic vintage film with warm storytelling, soft lighting, faded retro colors, film grain, dust particles, subtle flicker, analog aesthetic.",
    "category": "videostyles",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Nostalgic vintage film of [Subject], warm faded colors, authentic 16mm film grain, dust particles, subtle flicker, slow camera panning, archival B-roll, gentle retro aesthetic",
    "whenToUse": "Dùng làm video kỷ niệm, hồi tưởng quá khứ, câu chuyện gia đình thập niên 70-80.",
    "bestPractices": "Thêm hiệu ứng hạt phim và màu ấm ngả vàng vintage.",
    "commonMistakes": [
      "Để độ phân giải quá nét và tương phản quá gắt."
    ]
  },
  {
    "id": "v-neon-noir",
    "name": "Video 05. Cyberpunk Neon Noir",
    "definition": "Futuristic Neon Noir video with urban cyberpunk atmosphere, neon lights, rain reflections, magenta cyan color grade, synthwave music.",
    "category": "videostyles",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Cyberpunk Neon Noir video of [Subject], neon-lit rain streets, magenta cyan color grading, reflective puddles, fog, fast dynamic camera tracking, futuristic sci-fi aesthetic",
    "whenToUse": "Dùng cho video công nghệ, game sci-fi, thành phố tương lai về đêm.",
    "bestPractices": "Tối ưu độ tương phản giữa sắc hồng Neon và xanh Cyan.",
    "commonMistakes": [
      "Góc quay bị tối hoàn toàn không thấy chi tiết nhân vật."
    ]
  },
  {
    "id": "v-minimalist",
    "name": "Video 06. Clean Minimalist",
    "definition": "Minimalist video with clean visual storytelling, generous white space, soft natural lighting, neutral colors, Apple keynote documentary aesthetic.",
    "category": "videostyles",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Minimalist video of [Subject], clean uncluttered composition, generous white space, soft natural lighting, neutral color palette, slow intentional camera movement, Apple commercial style",
    "whenToUse": "Dùng giới thiệu sản phẩm công nghệ, thiết kế tối giản, triết lý sống.",
    "bestPractices": "Giữ khung hình gọn gàng, ít chi tiết rác.",
    "commonMistakes": [
      "Cho quá nhiều vật dụng vào cảnh quay."
    ]
  },
  {
    "id": "v-sci-fi",
    "name": "Video 07. Sci-Fi Blockbuster",
    "definition": "Futuristic sci-fi video with holographic interfaces, expansive space visual, cool blue teal grade, Dune Interstellar aesthetic.",
    "category": "videostyles",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Sci-Fi video of [Subject], futuristic architecture, holographic interfaces, volumetric teal blue lighting, sweeping camera motion, Dune and Interstellar visual style",
    "whenToUse": "Dùng làm video vũ trụ, công nghệ tương lai, AI, siêu máy tính.",
    "bestPractices": "Tăng ánh sáng xanh Teal và các giao diện Hologram.",
    "commonMistakes": [
      "Làm kỹ xảo quá giả không có chiều sâu không gian."
    ]
  },
  {
    "id": "v-fantasy",
    "name": "Video 08. Epic Fantasy",
    "definition": "Magical fantasy video with enchanted forests, castles, golden-hour light, glowing effects, Lord of the Rings and Studio Ghibli style.",
    "category": "videostyles",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Epic fantasy video of [Subject], enchanted forest, magical glowing particles, golden-hour lighting, sweeping aerial shots, Lord of the Rings aesthetic",
    "whenToUse": "Dùng cho truyện cổ tích, thế giới phép thuật, thần thoại.",
    "bestPractices": "Đưa vào ánh sáng vàng hoàng hôn và hiệu ứng phát sáng mờ ảo.",
    "commonMistakes": [
      "Ánh sáng quá gắt làm mất tính thần tiên."
    ]
  },
  {
    "id": "v-anime",
    "name": "Video 09. Anime Makoto Shinkai",
    "definition": "Anime-inspired video with vibrant compositions, expressive character moments, colorful skies, Studio Ghibli & Makoto Shinkai aesthetics.",
    "category": "videostyles",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Anime video of [Subject], Makoto Shinkai style, vibrant colorful sky, glowing clouds, expressive dramatic close-ups, soft gradients, emotional anime aesthetic",
    "whenToUse": "Dùng làm video hoạt hình Nhật Bản, câu chuyện thanh xuân, lãng mạn.",
    "bestPractices": "Vẽ bầu trời mây dải rực rỡ và ánh sáng mềm mại.",
    "commonMistakes": [
      "Nét vẽ bị méo dạng không giống phong cách Anime."
    ]
  },
  {
    "id": "v-comic-book",
    "name": "Video 10. Comic Book Spider-Verse",
    "definition": "Comic book graphic novel video with bold outlines, halftone textures, animated panels, Spider-Verse energy.",
    "category": "videostyles",
    "difficulty": "Advanced",
    "mood": "Action",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Comic book video of [Subject], Spider-Verse style, bold graphic novel outlines, halftone textures, vibrant pop colors, dynamic action framing",
    "whenToUse": "Dùng cho video siêu anh hùng, hành động tốc độ, truyện tranh.",
    "bestPractices": "Kết hợp các khung hình nét vẽ đậm và chấm Halftone.",
    "commonMistakes": [
      "Thiếu độ tương phản giữa viền đen và màu nền."
    ]
  },
  {
    "id": "v-horror",
    "name": "Video 11. Psychological Horror",
    "definition": "Psychological horror building fear through atmosphere, low-key light, cold color grading, eerie fog, A24 Conjuring style.",
    "category": "videostyles",
    "difficulty": "Advanced",
    "mood": "Horror",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Psychological horror video of [Subject], eerie abandoned location, deep shadows, cold blue color grade, creeping slow camera push, A24 film aesthetic",
    "whenToUse": "Dùng làm video kinh dị tâm lý, bí ẩn, câu chuyện rùng rợn.",
    "bestPractices": "Đẩy máy ảnh thật chậm vào khoảng tối để tăng sự hồi hộp.",
    "commonMistakes": [
      "Dùng máu me quá đà thay vì tập trung vào bầu không khí u ám."
    ]
  },
  {
    "id": "v-thriller",
    "name": "Video 12. Intense Thriller",
    "definition": "Suspenseful thriller with high contrast lighting, tracking shots, fast editing, Netflix series momentum.",
    "category": "videostyles",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Suspenseful thriller video of [Subject], tracking camera shot, dramatic close-ups, high contrast cold grading, fast-paced intense editing",
    "whenToUse": "Dùng cho video giật gân, rượt đuổi, điều tra án mạng.",
    "bestPractices": "Sử dụng cú bấm máy đi theo nhân vật (tracking shot) liên tục.",
    "commonMistakes": [
      "Nhịp dựng quá chậm làm mất đi độ gay cấn."
    ]
  },
  {
    "id": "v-romantic",
    "name": "Video 13. Dreamy Romantic",
    "definition": "Heartfelt romantic video, intimate close-ups, golden-hour light, pastel tones, dreamy cinematic bokeh.",
    "category": "videostyles",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Heartfelt romantic video of [Subject], soft golden-hour backlight, pastel color grading, dreamy bokeh, intimate slow-motion close-ups",
    "whenToUse": "Dùng cho video đám cưới, tình yêu, câu chuyện lãng mạn.",
    "bestPractices": "Tận dụng ánh nắng ngược trưa muộn (golden hour) để tạo viền sáng tóc.",
    "commonMistakes": [
      "Tông màu quá lạnh không đúng cảm giác ấm áp."
    ]
  },
  {
    "id": "v-black-white",
    "name": "Video 14. Monochrome Black & White",
    "definition": "Timeless monochrome black and white cinematic video, high contrast, elegant framing, film grain, Oscar winner style.",
    "category": "videostyles",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Classic black and white video of [Subject], monochrome contrast, artistic shadow framing, subtle 35mm film grain, elegant cinematic composition",
    "whenToUse": "Dùng cho video phỏng vấn sâu, suy ngẫm, tác phẩm nghệ thuật.",
    "bestPractices": "Tập trung vào đường nét hình học và ánh sáng chiếu từ góc ngang.",
    "commonMistakes": [
      "Độ xám bị xỉn, không có độ tương phản đen-trắng rõ ràng."
    ]
  },
  {
    "id": "v-retro-80s",
    "name": "Video 15. Synthwave Retro 80s",
    "definition": "1980s retro aesthetics, neon lights, VHS textures, scanlines, synthwave Stranger Things style.",
    "category": "videostyles",
    "difficulty": "Intermediate",
    "mood": "Nostalgic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Retro 80s video of [Subject], synthwave neon lights, VHS scanlines and color bleeding, magenta cyan aesthetic, Stranger Things vibe",
    "whenToUse": "Dùng làm video âm nhạc Synthwave, phong cách thập niên 80 năng động.",
    "bestPractices": "Thêm hiệu ứng dải nhiễu bằng băng VHS cổ điển.",
    "commonMistakes": [
      "Làm màu quá mờ không thấy rõ nét tân cổ điển."
    ]
  },
  {
    "id": "v-timelapse",
    "name": "Video 16. Hyper Timelapse",
    "definition": "Cinematic time-lapse of accelerated clouds, cities, stars, sunrise sunset, BBC Earth documentary quality.",
    "category": "videostyles",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Cinematic time-lapse video of [Subject], accelerated cloud motion, day to night lighting transition, smooth movement, BBC Earth quality",
    "whenToUse": "Dùng diễn tả sự di chuyển thời gian, sự phát triển đô thị hoặc thiên nhiên.",
    "bestPractices": "Đảm bảo máy ảnh trượt thật mượt trong khi bầu trời chuyển động nhanh.",
    "commonMistakes": [
      "Chuyển động bị giật hình không có độ nhoè chuyển động (motion blur)."
    ]
  },
  {
    "id": "v-slow-motion",
    "name": "Video 17. High Frame-rate Slow Motion",
    "definition": "Slow-motion video highlighting emotion, water droplets, sports action, high frame rate 120fps aesthetic.",
    "category": "videostyles",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Ultra slow-motion video of [Subject], 120fps high frame rate, shallow depth of field, detailed water particles, graceful motion",
    "whenToUse": "Dùng bắt trọn khoảnh khắc thể thao, giọt nước rơi, nụ cười biểu cảm.",
    "bestPractices": "Bắt các chi tiết nhỏ như giọt mồ hôi, hạt nước bắn hoặc vải bay.",
    "commonMistakes": [
      "Ánh sáng bị tối do tốc độ màn hình trập quá nhanh."
    ]
  },
  {
    "id": "v-drone-footage",
    "name": "Video 18. Epic Drone Aerial",
    "definition": "Sweeping drone aerial video, top-down perspective, IMAX nature documentary quality.",
    "category": "videostyles",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Epic aerial drone video of [Subject], 4K FPV flyover, sweeping top-down view, grand scale landscape, IMAX documentary style",
    "whenToUse": "Dùng giới thiệu bối cảnh núi rừng, biển cả, công trình kiến trúc đồ sộ.",
    "bestPractices": "Bay máy bay không người lái mượt mà lướt qua đỉnh núi hoặc tán cây.",
    "commonMistakes": [
      "Rung lắc góc quay làm người xem bị chóng mặt."
    ]
  },
  {
    "id": "v-pov",
    "name": "Video 19. First-Person POV",
    "definition": "First-person POV video fully immersing viewers, handheld motion, authentic personal perspective.",
    "category": "videostyles",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "",
    "videoRef": "",
    "promptTemplate": "First-person POV video of [Subject], immersive perspective, stabilized handheld motion, natural interactive movement",
    "whenToUse": "Dùng tạo cảm giác cho người xem nhập vai vào góc nhìn của nhân vật chính.",
    "bestPractices": "Hiển thị thêm bàn tay hoặc bước đi của người quay ở góc dưới.",
    "commonMistakes": [
      "Cắt cảnh ngắt quãng làm mất trải nghiệm liên tục."
    ]
  },
  {
    "id": "v-montage",
    "name": "Video 20. Cinematic Fast Montage",
    "definition": "Cinematic montage combining diverse B-roll, dynamic rhythmic editing, powerful storytelling sequence.",
    "category": "videostyles",
    "difficulty": "Advanced",
    "mood": "Action",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Dynamic cinematic montage of [Subject], fast rhythmic editing, diverse high-quality B-roll cuts, seamless transitions, inspiring pace",
    "whenToUse": "Dùng làm đoạn mở đầu (Intro) cuốn hút hoặc tổng kết hành trình.",
    "bestPractices": "Cắt dựng khớp chính xác với từng nhịp phách của âm nhạc.",
    "commonMistakes": [
      "Các cảnh cắt rời rạc không có mạch nội dung liên kết."
    ]
  },
  {
    "id": "audio-vietnamese-phin-coffee-drip",
    "name": "Vietnamese Phin Coffee Drip",
    "definition": "Audio direction for Vietnamese Phin Coffee Drip. Dùng cho: cà phê phin, cafe rang xay, quán cafe.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: close-mic coffee drip from a Vietnamese phin, gentle steam, tiny ceramic cup resonance.\n2-5s: soft spoon stir, cup lifted from wooden table, faint morning room tone.\n5-8s: warm cafe ambience enters quietly, distant city traffic far outside.\n8-10s: cup set down softly, low warm piano pad resolves.\nMix: coffee drip and ceramic sounds foreground, ambience low, music subtle and non-lyrical.",
    "whenToUse": "Dùng cho: cà phê phin, cafe rang xay, quán cafe.",
    "bestPractices": "Mix: coffee drip and ceramic sounds foreground, ambience low, music subtle and non-lyrical.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-ice-clink-fresh-drink",
    "name": "Ice Clink Fresh Drink",
    "definition": "Audio direction for Ice Clink Fresh Drink. Dùng cho: trà sữa, trà trái cây, nước ép, soda.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: crisp ice clinks inside a plastic cup, fresh fruit drops with a light splash.\n2-5s: liquid pour and bubbles fizz naturally, cup seal presses with a soft pop.\n5-8s: upbeat clean social beat enters lightly, friends laugh softly in the background.\n8-10s: final ice clink and refreshing music hit.\nMix: ice and liquid sounds sharp, background voices soft, music bright but not loud.",
    "whenToUse": "Dùng cho: trà sữa, trà trái cây, nước ép, soda.",
    "bestPractices": "Mix: ice and liquid sounds sharp, background voices soft, music bright but not loud.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-pan-sizzle-food-hook",
    "name": "Pan Sizzle Food Hook",
    "definition": "Audio direction for Pan Sizzle Food Hook. Dùng cho: món nóng, steak, cơm tấm, bếp nhà hàng, món xào.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: close-mic pan sizzle, oil bubbling naturally, a quick ingredient drop.\n2-5s: spatula scrape, steam burst, sauce hits hot surface.\n5-8s: restaurant kitchen ambience stays low, no loud voices.\n8-10s: plating sound, ceramic plate set down, music resolves warmly.\nMix: sizzle foreground, kitchen ambience low, no aggressive music.",
    "whenToUse": "Dùng cho: món nóng, steak, cơm tấm, bếp nhà hàng, món xào.",
    "bestPractices": "Mix: sizzle foreground, kitchen ambience low, no aggressive music.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-sauce-pour-asmr",
    "name": "Sauce Pour ASMR",
    "definition": "Audio direction for Sauce Pour ASMR. Dùng cho: sốt, dessert, steak, salad, món có texture.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: thick sauce begins pouring, glossy slow liquid sound close to microphone.\n2-5s: sauce spreads over food with soft wet texture, tiny plate resonance.\n5-8s: gentle knife or spoon contact, subtle appetite ambience.\n8-10s: clean final plate set-down with a soft premium chime.\nMix: sauce texture crisp and satisfying, ambience minimal, music low and elegant.",
    "whenToUse": "Dùng cho: sốt, dessert, steak, salad, món có texture.",
    "bestPractices": "Mix: sauce texture crisp and satisfying, ambience minimal, music low and elegant.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-crispy-banh-mi-crunch",
    "name": "Crispy Banh Mi Crunch",
    "definition": "Audio direction for Crispy Banh Mi Crunch. Dùng cho: bánh mì, snack giòn, đồ ăn đường phố.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: crispy bread crackle and light crumbs falling.\n2-5s: paper wrap rustle, vendor tools move quickly but cleanly.\n5-8s: first bite crunch, street ambience soft and warm.\n8-10s: wrapper fold and subtle upbeat ending hit.\nMix: crunch and paper sounds foreground, street ambience blurred, no distracting crowd voices.",
    "whenToUse": "Dùng cho: bánh mì, snack giòn, đồ ăn đường phố.",
    "bestPractices": "Mix: crunch and paper sounds foreground, street ambience blurred, no distracting crowd voices.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-noodle-bowl-steam",
    "name": "Noodle Bowl Steam",
    "definition": "Audio direction for Noodle Bowl Steam. Dùng cho: phở, bún, mì, ramen, món nước.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: gentle steam and broth ripple, soft ceramic bowl resonance.\n2-5s: chopsticks lift noodles with a subtle wet texture sound.\n5-8s: warm restaurant ambience, quiet spoon touch, no loud slurping.\n8-10s: bowl hero moment with soft music resolve.\nMix: broth and chopstick sounds clear, ambience warm and low, music minimal.",
    "whenToUse": "Dùng cho: phở, bún, mì, ramen, món nước.",
    "bestPractices": "Mix: broth and chopstick sounds clear, ambience warm and low, music minimal.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-bakery-fresh-out",
    "name": "Bakery Fresh Out",
    "definition": "Audio direction for Bakery Fresh Out. Dùng cho: bánh ngọt, bánh mì, pastry, cafe bakery.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: oven door opens softly, warm air whoosh, pastry crust crackle.\n2-5s: tongs lift pastry, tray slides gently.\n5-8s: cafe ambience and soft acoustic guitar enter lightly.\n8-10s: plate set-down and tiny fork touch.\nMix: crust and tray sounds tactile, cafe ambience cozy, music gentle and non-lyrical.",
    "whenToUse": "Dùng cho: bánh ngọt, bánh mì, pastry, cafe bakery.",
    "bestPractices": "Mix: crust and tray sounds tactile, cafe ambience cozy, music gentle and non-lyrical.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-family-dinner-table",
    "name": "Family Dinner Table",
    "definition": "Audio direction for Family Dinner Table. Dùng cho: gia vị, nước mắm, đồ ăn gia đình, FMCG.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: sauce drop into ceramic bowl, soft liquid plop.\n2-5s: chopsticks touch plate, rice bowl placed on table, quiet kitchen room tone.\n5-8s: warm family dinner murmur, natural and distant, no clear dialogue.\n8-10s: bottle set beside dishes, soft emotional music resolve.\nMix: tableware and product sounds clear, family ambience warm but low.",
    "whenToUse": "Dùng cho: gia vị, nước mắm, đồ ăn gia đình, FMCG.",
    "bestPractices": "Mix: tableware and product sounds clear, family ambience warm but low.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-night-market-street-food",
    "name": "Night Market Street Food",
    "definition": "Audio direction for Night Market Street Food. Dùng cho: street food, food tour, đặc sản địa phương.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: grill sizzle and steam burst under warm night market ambience.\n2-5s: vendor tools tap, paper bag rustle, food placed into packaging.\n5-8s: distant motorbikes, soft crowd movement, no readable vendor shouting.\n8-10s: final food handoff with a clean upbeat beat hit.\nMix: food sounds foreground, market ambience wide and realistic, crowd not chaotic.",
    "whenToUse": "Dùng cho: street food, food tour, đặc sản địa phương.",
    "bestPractices": "Mix: food sounds foreground, market ambience wide and realistic, crowd not chaotic.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-fresh-fruit-prep",
    "name": "Fresh Fruit Prep",
    "definition": "Audio direction for Fresh Fruit Prep. Dùng cho: nước ép, trái cây, healthy drink, detox.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: knife slices fresh fruit cleanly on a wooden board.\n2-5s: fruit drops into blender or glass, light juice splash.\n5-8s: gentle pour, ice clink, bright morning ambience.\n8-10s: clean refreshing music resolve.\nMix: fruit slicing and pour crisp, ambience bright, music fresh and low.",
    "whenToUse": "Dùng cho: nước ép, trái cây, healthy drink, detox.",
    "bestPractices": "Mix: fruit slicing and pour crisp, ambience bright, music fresh and low.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-serum-texture-luxury",
    "name": "Serum Texture Luxury",
    "definition": "Audio direction for Serum Texture Luxury. Dùng cho: serum, kem dưỡng, skincare.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: soft glass dropper click and one serum drop landing on skin or glass.\n2-5s: gentle fingertip glide with subtle skincare texture sound.\n5-8s: airy bathroom ambience, soft breath, no dialogue.\n8-10s: product bottle set down with a tiny glass clink and elegant pad resolve.\nMix: dropper and glass sounds delicate, ambience airy, music soft and premium.",
    "whenToUse": "Dùng cho: serum, kem dưỡng, skincare.",
    "bestPractices": "Mix: dropper and glass sounds delicate, ambience airy, music soft and premium.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-spray-mist-beauty",
    "name": "Spray Mist Beauty",
    "definition": "Audio direction for Spray Mist Beauty. Dùng cho: xịt khoáng, nước hoa, mist, room spray.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: crisp spray mist sound, fine droplets in close perspective.\n2-5s: soft fabric or skin movement, gentle inhale, airy room tone.\n5-8s: light shimmering pad enters subtly.\n8-10s: final clean spray echo fades softly.\nMix: spray SFX foreground, music and ambience very low, premium and clean.",
    "whenToUse": "Dùng cho: xịt khoáng, nước hoa, mist, room spray.",
    "bestPractices": "Mix: spray SFX foreground, music and ambience very low, premium and clean.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-lipstick-one-swipe",
    "name": "Lipstick One Swipe",
    "definition": "Audio direction for Lipstick One Swipe. Dùng cho: son, makeup, beauty local brand.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: lipstick cap clicks open, small metallic/plastic detail sound.\n2-5s: soft makeup application, subtle fabric movement.\n5-8s: gentle compact mirror close, beauty studio room tone.\n8-10s: tiny elegant chime for final packshot.\nMix: cap click and compact sound crisp, ambience minimal, no loud music.",
    "whenToUse": "Dùng cho: son, makeup, beauty local brand.",
    "bestPractices": "Mix: cap click and compact sound crisp, ambience minimal, no loud music.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-spa-warm-towel",
    "name": "Spa Warm Towel",
    "definition": "Audio direction for Spa Warm Towel. Dùng cho: spa, clinic, massage, gội đầu dưỡng sinh.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: warm towel fold, soft steam, slow inhale-like ambience.\n2-5s: gentle hand movement over towel or skincare surface, no harsh rubbing.\n5-8s: peaceful spa room tone, distant water feature very low.\n8-10s: soft bell-like resolve, calm and premium.\nMix: towel and water sounds close but gentle, ambience wide, music minimal.",
    "whenToUse": "Dùng cho: spa, clinic, massage, gội đầu dưỡng sinh.",
    "bestPractices": "Mix: towel and water sounds close but gentle, ambience wide, music minimal.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-hair-salon-shine",
    "name": "Hair Salon Shine",
    "definition": "Audio direction for Hair Salon Shine. Dùng cho: salon tóc, treatment, dầu gội.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: soft hair brush movement and fabric cape rustle.\n2-5s: scissors snip or comb glide, clean and precise.\n5-8s: hair swish as the subject turns slowly, salon ambience low.\n8-10s: subtle glossy reveal chime, no exaggerated sparkle.\nMix: hair and tool sounds natural, ambience low, music polished.",
    "whenToUse": "Dùng cho: salon tóc, treatment, dầu gội.",
    "bestPractices": "Mix: hair and tool sounds natural, ambience low, music polished.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-fragrance-spray-luxury",
    "name": "Fragrance Spray Luxury",
    "definition": "Audio direction for Fragrance Spray Luxury. Dùng cho: nước hoa, body mist, sản phẩm mùi hương.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: elegant perfume spray burst, close and clean.\n2-5s: soft fabric movement, quiet breath, room ambience almost silent.\n5-8s: low cinematic luxury pad enters, slow and expensive.\n8-10s: glass bottle set down with a refined clink.\nMix: spray and glass clink foreground, music low, no lyrical vocals.",
    "whenToUse": "Dùng cho: nước hoa, body mist, sản phẩm mùi hương.",
    "bestPractices": "Mix: spray and glass clink foreground, music low, no lyrical vocals.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-jewelry-tiny-shine",
    "name": "Jewelry Tiny Shine",
    "definition": "Audio direction for Jewelry Tiny Shine. Dùng cho: trang sức, đồng hồ, phụ kiện cao cấp.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: delicate metal touch, tiny chain movement, close-mic detail.\n2-5s: jewelry clasp closes softly, fabric rustle in background.\n5-8s: very subtle elegant chime, not magical or cartoonish.\n8-10s: final quiet luxury music resolve.\nMix: metal sounds crisp but gentle, music minimal, ambience clean.",
    "whenToUse": "Dùng cho: trang sức, đồng hồ, phụ kiện cao cấp.",
    "bestPractices": "Mix: metal sounds crisp but gentle, music minimal, ambience clean.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-fashion-fabric-swish",
    "name": "Fashion Fabric Swish",
    "definition": "Audio direction for Fashion Fabric Swish. Dùng cho: local brand, áo dài, streetwear, lookbook.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: close fabric swish and seam detail movement.\n2-5s: footsteps on pavement or wood floor, controlled and rhythmic.\n5-8s: urban or courtyard ambience low, cloth motion synced to model turn.\n8-10s: short stylish beat hit for final pose.\nMix: footsteps and fabric foreground, ambience low, music modern and clean.",
    "whenToUse": "Dùng cho: local brand, áo dài, streetwear, lookbook.",
    "bestPractices": "Mix: footsteps and fabric foreground, ambience low, music modern and clean.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-yoga-breath-mat",
    "name": "Yoga Breath & Mat",
    "definition": "Audio direction for Yoga Breath & Mat. Dùng cho: yoga, wellness, fitness nhẹ.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: yoga mat unrolls softly, room tone calm.\n2-5s: gentle breath, fabric movement, quiet foot placement.\n5-8s: subtle nature ambience or airy studio hum.\n8-10s: calm low pad resolves, no dramatic music.\nMix: breath natural and not too close, ambience peaceful, music very subtle.",
    "whenToUse": "Dùng cho: yoga, wellness, fitness nhẹ.",
    "bestPractices": "Mix: breath natural and not too close, ambience peaceful, music very subtle.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-clinic-clean-hush",
    "name": "Clinic Clean Hush",
    "definition": "Audio direction for Clinic Clean Hush. Dùng cho: clinic làm đẹp, nha khoa, thẩm mỹ không claim y tế.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Artistic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: soft door open, clean room tone, quiet air-conditioning hum.\n2-5s: gloves or tool tray move gently, professional and calm.\n5-8s: low reassuring ambience, no alarming medical beeps.\n8-10s: clean soft resolve for service hero frame.\nMix: clinic ambience sterile but warm, tool sounds subtle, no tense music.",
    "whenToUse": "Dùng cho: clinic làm đẹp, nha khoa, thẩm mỹ không claim y tế.",
    "bestPractices": "Mix: clinic ambience sterile but warm, tool sounds subtle, no tense music.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-premium-unboxing",
    "name": "Premium Unboxing",
    "definition": "Audio direction for Premium Unboxing. Dùng cho: mỹ phẩm, tech, quà tặng, sản phẩm cao cấp.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: premium box lid slides open with soft cardboard friction.\n2-5s: tissue paper rustle, ribbon pull, product tray lift.\n5-8s: product placed on table with a delicate material sound.\n8-10s: subtle luxury chime and clean music resolve.\nMix: packaging sounds tactile and foreground, music low, no random voice.",
    "whenToUse": "Dùng cho: mỹ phẩm, tech, quà tặng, sản phẩm cao cấp.",
    "bestPractices": "Mix: packaging sounds tactile and foreground, music low, no random voice.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-ecommerce-parcel-open",
    "name": "Ecommerce Parcel Open",
    "definition": "Audio direction for Ecommerce Parcel Open. Dùng cho: shop online, TikTok Shop, Shopee, local brand.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: shipping box tape peels, cardboard opens.\n2-5s: protective paper rustle, product emerges from packaging.\n5-8s: customer reaction breath or soft happy laugh in background.\n8-10s: product set down for final hero frame with upbeat social hit.\nMix: parcel sounds crisp, reaction subtle, music light and positive.",
    "whenToUse": "Dùng cho: shop online, TikTok Shop, Shopee, local brand.",
    "bestPractices": "Mix: parcel sounds crisp, reaction subtle, music light and positive.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-tech-button-click",
    "name": "Tech Button Click",
    "definition": "Audio direction for Tech Button Click. Dùng cho: phụ kiện điện thoại, app, thiết bị công nghệ.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: crisp button click or device snap-on sound.\n2-5s: subtle electronic UI blip, keyboard taps, clean desk room tone.\n5-8s: low modern synth pulse enters as workflow becomes smoother.\n8-10s: final tech chime, short and premium.\nMix: tech SFX foreground, synth low, no fake notification chaos.",
    "whenToUse": "Dùng cho: phụ kiện điện thoại, app, thiết bị công nghệ.",
    "bestPractices": "Mix: tech SFX foreground, synth low, no fake notification chaos.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-creator-desk-workflow",
    "name": "Creator Desk Workflow",
    "definition": "Audio direction for Creator Desk Workflow. Dùng cho: khóa học AI, phần mềm, creator setup.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: keyboard taps and mouse click close to mic.\n2-5s: pen tick on storyboard paper, paper slide, laptop fan very low.\n5-8s: soft success chime as the video result appears.\n8-10s: music resolves with clean CTA-ready ending.\nMix: desk foley clear, music warm and low, no generated spoken text.",
    "whenToUse": "Dùng cho: khóa học AI, phần mềm, creator setup.",
    "bestPractices": "Mix: desk foley clear, music warm and low, no generated spoken text.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-smart-appliance-calm-home",
    "name": "Smart Appliance Calm Home",
    "definition": "Audio direction for Smart Appliance Calm Home. Dùng cho: máy lọc không khí, robot hút bụi, đèn thông minh, đồ gia dụng.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: subtle product power-on tone, soft mechanical start.\n2-5s: gentle appliance hum, room ambience becomes calmer.\n5-8s: quiet home tone, footsteps or fabric movement in background.\n8-10s: clean product hero chime, not loud.\nMix: appliance hum present but pleasant, no harsh beeps, music minimal.",
    "whenToUse": "Dùng cho: máy lọc không khí, robot hút bụi, đèn thông minh, đồ gia dụng.",
    "bestPractices": "Mix: appliance hum present but pleasant, no harsh beeps, music minimal.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-cleaning-spray-wipe",
    "name": "Cleaning Spray & Wipe",
    "definition": "Audio direction for Cleaning Spray & Wipe. Dùng cho: nước lau sàn, xịt bếp, nước rửa chén, khăn lau.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: spray bottle trigger sound, fine mist hits surface.\n2-5s: cloth wipe across surface, realistic friction.\n5-8s: room tone becomes brighter and cleaner, subtle airy lift.\n8-10s: bottle set down with a clean satisfying finish.\nMix: spray and wipe sounds foreground, ambience fresh, no exaggerated sparkle.",
    "whenToUse": "Dùng cho: nước lau sàn, xịt bếp, nước rửa chén, khăn lau.",
    "bestPractices": "Mix: spray and wipe sounds foreground, ambience fresh, no exaggerated sparkle.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-handmade-craft-detail",
    "name": "Handmade Craft Detail",
    "definition": "Audio direction for Handmade Craft Detail. Dùng cho: gốm, mây tre, handmade, nến, sổ tay.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: close texture sound of clay, bamboo, paper, or wax.\n2-5s: artisan hand tool movement, slow and precise.\n5-8s: warm workshop ambience, faint natural room tone.\n8-10s: product set down gently, soft acoustic resolve.\nMix: material texture foreground, workshop ambience low, music organic.",
    "whenToUse": "Dùng cho: gốm, mây tre, handmade, nến, sổ tay.",
    "bestPractices": "Mix: material texture foreground, workshop ambience low, music organic.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-notebook-paper-pen",
    "name": "Notebook Paper & Pen",
    "definition": "Audio direction for Notebook Paper & Pen. Dùng cho: giáo dục, template, planner, workshop.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: paper page turns, pen cap click.\n2-5s: pen writes or ticks a checkbox, close and satisfying.\n5-8s: quiet desk ambience, subtle focused lo-fi pad.\n8-10s: final pen tap and gentle music resolve.\nMix: paper and pen sounds crisp, music low, no voice unless added in post.",
    "whenToUse": "Dùng cho: giáo dục, template, planner, workshop.",
    "bestPractices": "Mix: paper and pen sounds crisp, music low, no voice unless added in post.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-camera-shutter-creator",
    "name": "Camera Shutter Creator",
    "definition": "Audio direction for Camera Shutter Creator. Dùng cho: creator course, content studio, camera gear.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: camera shutter click, lens ring turn.\n2-5s: tripod adjustment, soft room tone.\n5-8s: keyboard tap and video playback start sound.\n8-10s: clean digital chime for final result.\nMix: camera and desk foley foreground, music modern and subtle.",
    "whenToUse": "Dùng cho: creator course, content studio, camera gear.",
    "bestPractices": "Mix: camera and desk foley foreground, music modern and subtle.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-product-reveal-hit",
    "name": "Product Reveal Hit",
    "definition": "Audio direction for Product Reveal Hit. Dùng cho: mọi sản phẩm cần final reveal mạnh.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: low cinematic whoosh building softly.\n2-5s: product material sound synced to reveal, such as glass clink, cap click, or fabric swish.\n5-8s: music rises gently, no heavy trailer boom.\n8-10s: clean premium hit and short reverb tail for final hero frame.\nMix: reveal hit elegant, not aggressive; product SFX remains recognizable.",
    "whenToUse": "Dùng cho: mọi sản phẩm cần final reveal mạnh.",
    "bestPractices": "Mix: reveal hit elegant, not aggressive; product SFX remains recognizable.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-rainy-cafe-window",
    "name": "Rainy Cafe Window",
    "definition": "Audio direction for Rainy Cafe Window. Dùng cho: cafe, phim ngắn, trà, brand mood.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: soft rain on window, distant traffic muffled outside.\n2-5s: ceramic cup clink and gentle spoon stir close to mic.\n5-8s: warm cafe murmur very low, no distinct conversations.\n8-10s: rain continues under a soft piano resolve.\nMix: rain and cup sounds warm, cafe ambience low, no dramatic music.",
    "whenToUse": "Dùng cho: cafe, phim ngắn, trà, brand mood.",
    "bestPractices": "Mix: rain and cup sounds warm, cafe ambience low, no dramatic music.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-beach-resort-morning",
    "name": "Beach Resort Morning",
    "definition": "Audio direction for Beach Resort Morning. Dùng cho: resort, homestay biển, wellness travel.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: gentle ocean waves and soft curtain movement.\n2-5s: footsteps on wooden floor, cup placed on balcony table.\n5-8s: seabreeze and distant birds, calm and natural.\n8-10s: airy music pad resolves softly.\nMix: waves wide and low, foreground foley clear, music minimal.",
    "whenToUse": "Dùng cho: resort, homestay biển, wellness travel.",
    "bestPractices": "Mix: waves wide and low, foreground foley clear, music minimal.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-mountain-homestay-rain",
    "name": "Mountain Homestay Rain",
    "definition": "Audio direction for Mountain Homestay Rain. Dùng cho: Đà Lạt, homestay núi, retreat.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: light rain on roof and leaves, cozy interior room tone.\n2-5s: kettle pour or cup lift, fabric blanket rustle.\n5-8s: distant nature ambience, no loud insects or storm.\n8-10s: warm acoustic guitar resolves.\nMix: rain soft and comforting, interior sounds close, music gentle.",
    "whenToUse": "Dùng cho: Đà Lạt, homestay núi, retreat.",
    "bestPractices": "Mix: rain soft and comforting, interior sounds close, music gentle.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-apartment-walkthrough",
    "name": "Apartment Walkthrough",
    "definition": "Audio direction for Apartment Walkthrough. Dùng cho: bất động sản, nội thất, căn hộ.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: door handle turn and soft door open.\n2-5s: gentle footsteps on wood or tile floor, room tone natural.\n5-8s: curtain movement and distant city hum from window.\n8-10s: quiet premium resolve for wide hero frame.\nMix: footsteps and door foreground, city hum subtle, no distracting music.",
    "whenToUse": "Dùng cho: bất động sản, nội thất, căn hộ.",
    "bestPractices": "Mix: footsteps and door foreground, city hum subtle, no distracting music.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-hotel-lobby-premium",
    "name": "Hotel Lobby Premium",
    "definition": "Audio direction for Hotel Lobby Premium. Dùng cho: khách sạn, resort, nhà hàng cao cấp.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: suitcase wheel on polished floor, soft lobby air.\n2-5s: distant concierge greeting ambience, not distinct dialogue.\n5-8s: gentle piano lobby music, low and elegant.\n8-10s: footsteps pause, music resolves softly.\nMix: lobby ambience wide, suitcase/footsteps clear, music refined.",
    "whenToUse": "Dùng cho: khách sạn, resort, nhà hàng cao cấp.",
    "bestPractices": "Mix: lobby ambience wide, suitcase/footsteps clear, music refined.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-vietnamese-city-street",
    "name": "Vietnamese City Street",
    "definition": "Audio direction for Vietnamese City Street. Dùng cho: fashion, local brand, travel, street interview.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: distant motorbikes and soft city traffic, not too loud.\n2-5s: footsteps, fabric movement, handheld street realism.\n5-8s: city ambience continues with natural space.\n8-10s: short modern beat hit for final pose or product frame.\nMix: city traffic background only, subject foley foreground, music clean.",
    "whenToUse": "Dùng cho: fashion, local brand, travel, street interview.",
    "bestPractices": "Mix: city traffic background only, subject foley foreground, music clean.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-night-market-ambience",
    "name": "Night Market Ambience",
    "definition": "Audio direction for Night Market Ambience. Dùng cho: street food, travel, local experience.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: grill sizzle and distant market crowd, warm night ambience.\n2-5s: plastic bag rustle, vendor tools tap, food handoff.\n5-8s: muffled crowd movement, motorbike pass far away.\n8-10s: upbeat local travel beat resolves.\nMix: food and handoff sounds clear, crowd low and wide, no chaotic shouting.",
    "whenToUse": "Dùng cho: street food, travel, local experience.",
    "bestPractices": "Mix: food and handoff sounds clear, crowd low and wide, no chaotic shouting.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-quiet-office-productivity",
    "name": "Quiet Office Productivity",
    "definition": "Audio direction for Quiet Office Productivity. Dùng cho: app, SaaS, khóa học, productivity.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: keyboard taps, mouse click, soft office hum.\n2-5s: paper slide, pen tick, abstract UI blip.\n5-8s: low focused electronic pulse enters subtly.\n8-10s: clean success chime for final result.\nMix: work sounds crisp, office ambience low, music focused and non-distracting.",
    "whenToUse": "Dùng cho: app, SaaS, khóa học, productivity.",
    "bestPractices": "Mix: work sounds crisp, office ambience low, music focused and non-distracting.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-luxury-vietnamese-voice-over",
    "name": "Luxury Vietnamese Voice-Over",
    "definition": "Audio direction for Luxury Vietnamese Voice-Over. Dùng cho: nước hoa, skincare, trang sức, resort.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Voice-over: calm Vietnamese female voice, warm and premium, says one short line: \"[short brand line under 10 words]\".\nAmbience: elegant quiet room tone.\nSFX: one refined product sound synced to the hero shot, such as glass clink or spray mist.\nMusic cue: low cinematic pad, no lyrics.\nMix: voice-over clear and close, music low, product SFX subtle but crisp.",
    "whenToUse": "Dùng cho: nước hoa, skincare, trang sức, resort.",
    "bestPractices": "Mix: voice-over clear and close, music low, product SFX subtle but crisp.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-founder-trust-voice-over",
    "name": "Founder Trust Voice-Over",
    "definition": "Audio direction for Founder Trust Voice-Over. Dùng cho: khóa học, startup, local brand, dịch vụ.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Voice-over: calm Vietnamese founder voice, sincere and confident, says one short sentence: \"[short promise]\".\nAmbience: warm creator studio room tone.\nFoley: keyboard tap, pen tick, or product placed gently on table.\nMusic cue: soft optimistic piano or warm synth pad.\nMix: voice-over foreground, music under voice, foley natural and not distracting.",
    "whenToUse": "Dùng cho: khóa học, startup, local brand, dịch vụ.",
    "bestPractices": "Mix: voice-over foreground, music under voice, foley natural and not distracting.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-documentary-local-voice",
    "name": "Documentary Local Voice",
    "definition": "Audio direction for Documentary Local Voice. Dùng cho: đặc sản vùng miền, handmade, nông sản, brand story.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Voice-over: warm Vietnamese narrator, documentary style, slow and grounded, one short line only.\nAmbience: natural local environment, wind, birds, workshop, or farm tone depending on scene.\nFoley: hands working with material or ingredient.\nMusic cue: subtle acoustic texture, no lyrics.\nMix: narrator clear, ambience authentic, music very low.",
    "whenToUse": "Dùng cho: đặc sản vùng miền, handmade, nông sản, brand story.",
    "bestPractices": "Mix: narrator clear, ambience authentic, music very low.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-ugc-natural-dialogue",
    "name": "UGC Natural Dialogue",
    "definition": "Audio direction for UGC Natural Dialogue. Dùng cho: review creator, testimonial, social selling.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Dialogue: the creator says one short natural Vietnamese line, conversational and not scripted: \"[short line]\".\nAmbience: real room tone, soft phone-camera realism.\nFoley: product handling sound synced to the hand action.\nMusic cue: optional very low social beat.\nMix: dialogue clear, room tone natural, product SFX audible but not exaggerated.",
    "whenToUse": "Dùng cho: review creator, testimonial, social selling.",
    "bestPractices": "Mix: dialogue clear, room tone natural, product SFX audible but not exaggerated.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-silent-premium-product",
    "name": "Silent Premium Product",
    "definition": "Audio direction for Silent Premium Product. Dùng cho: khi không muốn thoại, chỉ muốn âm sản phẩm sang.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "No dialogue and no voice-over.\nAmbience: quiet premium room tone.\nProduct SFX: one or two close-mic sounds only, such as cap click, glass clink, spray mist, fabric swish, or liquid pour.\nMusic cue: low non-lyrical pad with a clean ending.\nMix: product SFX foreground, music low, plenty of silence for premium feel.",
    "whenToUse": "Dùng cho: khi không muốn thoại, chỉ muốn âm sản phẩm sang.",
    "bestPractices": "Mix: product SFX foreground, music low, plenty of silence for premium feel.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-short-cta-voice",
    "name": "Short CTA Voice",
    "definition": "Audio direction for Short CTA Voice. Dùng cho: lead magnet, course, workshop, social ads.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Voice-over: friendly Vietnamese voice says one short CTA line at the end: \"[CTA under 8 words]\".\n0-8s: music and SFX support the visual story without speech.\n8-10s: voice-over CTA enters clearly over a clean final frame.\nMix: reduce music slightly under the CTA, keep ending clean for caption overlay.",
    "whenToUse": "Dùng cho: lead magnet, course, workshop, social ads.",
    "bestPractices": "Mix: reduce music slightly under the CTA, keep ending clean for caption overlay.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-premium-beauty-pad",
    "name": "Premium Beauty Pad",
    "definition": "Audio direction for Premium Beauty Pad. Dùng cho: skincare, beauty, jewelry, spa.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Music cue: soft premium ambient pad, slow tempo, airy and elegant, no lyrics.\nSFX: delicate product sounds synced to actions: dropper click, cap click, spray mist, glass clink.\nAmbience: clean studio or bathroom room tone.\nMix: music creates luxury mood but stays behind the product SFX.",
    "whenToUse": "Dùng cho: skincare, beauty, jewelry, spa.",
    "bestPractices": "Mix: music creates luxury mood but stays behind the product SFX.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-social-commerce-beat",
    "name": "Social Commerce Beat",
    "definition": "Audio direction for Social Commerce Beat. Dùng cho: TikTok Shop, snack, đồ uống, UGC review.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Music cue: upbeat clean social beat, medium tempo, no lyrics, light percussion.\nSFX: product action hits on beat, such as ice clink, box open, cap click, or bite crunch.\nAmbience: realistic room or shop tone.\nMix: beat supports pacing but does not cover product sounds or voice-over.",
    "whenToUse": "Dùng cho: TikTok Shop, snack, đồ uống, UGC review.",
    "bestPractices": "Mix: beat supports pacing but does not cover product sounds or voice-over.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-trailer-riser-10s",
    "name": "Trailer Riser 10s",
    "definition": "Audio direction for Trailer Riser 10s. Dùng cho: launch sản phẩm, event, khóa học, teaser.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: low cinematic pulse begins quietly.\n2-5s: subtle riser builds with each visual reveal.\n5-8s: percussion layer enters softly, increasing anticipation.\n8-10s: clean trailer hit resolves on the final hero frame, short reverb tail.\nMix: dramatic but controlled, no overblown bass, no horror tone unless requested.",
    "whenToUse": "Dùng cho: launch sản phẩm, event, khóa học, teaser.",
    "bestPractices": "Mix: dramatic but controlled, no overblown bass, no horror tone unless requested.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-emotional-piano-lift",
    "name": "Emotional Piano Lift",
    "definition": "Audio direction for Emotional Piano Lift. Dùng cho: brand film, mẹ & bé, quà tặng, course transformation.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Music cue: soft emotional piano with warm pad underneath, slow and hopeful, no lyrics.\nFoley: small human sounds like paper rustle, fabric movement, cup set-down.\nAmbience: warm room tone.\nMix: music emotional but restrained, foley natural, no melodrama.",
    "whenToUse": "Dùng cho: brand film, mẹ & bé, quà tặng, course transformation.",
    "bestPractices": "Mix: music emotional but restrained, foley natural, no melodrama.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-clean-tech-pulse",
    "name": "Clean Tech Pulse",
    "definition": "Audio direction for Clean Tech Pulse. Dùng cho: app, SaaS, phụ kiện công nghệ, creator tool.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Music cue: minimal electronic pulse, clean and modern, medium-low tempo, no lyrics.\nSFX: crisp UI blips, keyboard taps, device click, but no chaotic notification sounds.\nAmbience: quiet office or studio hum.\nMix: tech SFX sharp, music low and focused, ending with a clean success chime.",
    "whenToUse": "Dùng cho: app, SaaS, phụ kiện công nghệ, creator tool.",
    "bestPractices": "Mix: tech SFX sharp, music low and focused, ending with a clean success chime.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-no-music-diegetic-only",
    "name": "No Music Diegetic Only",
    "definition": "Audio direction for No Music Diegetic Only. Dùng cho: phim ngắn, documentary, premium realism.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Diegetic sound only, no music score.\nAmbience: realistic environment sound that matches the location.\nFoley: footsteps, fabric, object touch, breath, paper, or cup sounds as appropriate.\nMix: natural dynamic range, quiet pauses, no artificial chimes or music hits.",
    "whenToUse": "Dùng cho: phim ngắn, documentary, premium realism.",
    "bestPractices": "Mix: natural dynamic range, quiet pauses, no artificial chimes or music hits.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-rain-on-tin-roof",
    "name": "Rain On Tin Roof",
    "definition": "Audio direction for Rain On Tin Roof. Dùng cho: homestay, phim ngắn, cafe mưa, mood Việt.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: soft rain tapping on a tin roof, cozy and close.\n2-5s: kettle pour or cup clink inside the room.\n5-8s: distant motorbike passes outside, muffled by rain.\n8-10s: warm acoustic resolve, very subtle.\nMix: rain comforting, not stormy; indoor foley close, outdoor sounds distant.",
    "whenToUse": "Dùng cho: homestay, phim ngắn, cafe mưa, mood Việt.",
    "bestPractices": "Mix: rain comforting, not stormy; indoor foley close, outdoor sounds distant.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-vietnamese-morning-alley",
    "name": "Vietnamese Morning Alley",
    "definition": "Audio direction for Vietnamese Morning Alley. Dùng cho: cafe, streetwear, local brand, vlog, phim ngắn.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Ambience: quiet Vietnamese morning alley with distant motorbikes, soft voices far away, and a light breeze.\nFoley: footsteps on pavement, fabric movement, cup or bag in hand.\nMusic cue: optional low lo-fi beat.\nMix: ambience realistic and low, subject foley clear, no loud horns.",
    "whenToUse": "Dùng cho: cafe, streetwear, local brand, vlog, phim ngắn.",
    "bestPractices": "Mix: ambience realistic and low, subject foley clear, no loud horns.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-ceramic-tea-cup",
    "name": "Ceramic Tea Cup",
    "definition": "Audio direction for Ceramic Tea Cup. Dùng cho: trà, cafe, gia vị, bàn ăn, lifestyle.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: ceramic cup clinks gently on saucer.\n2-5s: tea or coffee pours softly, liquid warm and close.\n5-8s: quiet home or cafe ambience.\n8-10s: cup set down and soft music resolve.\nMix: ceramic and liquid foreground, ambience low, music warm.",
    "whenToUse": "Dùng cho: trà, cafe, gia vị, bàn ăn, lifestyle.",
    "bestPractices": "Mix: ceramic and liquid foreground, ambience low, music warm.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-rice-cooker-steam-home",
    "name": "Rice Cooker Steam Home",
    "definition": "Audio direction for Rice Cooker Steam Home. Dùng cho: đồ gia dụng, gạo, gia vị, bữa cơm Việt.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: rice cooker click and soft steam release.\n2-5s: bowl placed on table, chopsticks touch ceramic.\n5-8s: warm kitchen room tone, family murmur very low.\n8-10s: soft home-style music resolve.\nMix: steam and tableware clear, family ambience subtle, no loud dialogue.",
    "whenToUse": "Dùng cho: đồ gia dụng, gạo, gia vị, bữa cơm Việt.",
    "bestPractices": "Mix: steam and tableware clear, family ambience subtle, no loud dialogue.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-motorbike-delivery-handoff",
    "name": "Motorbike Delivery Handoff",
    "definition": "Audio direction for Motorbike Delivery Handoff. Dùng cho: shop online, đồ ăn giao hàng, local delivery.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: distant motorbike approaches softly, not too loud.\n2-5s: package handoff, paper bag rustle, phone notification blip very subtle.\n5-8s: door opens and customer receives package.\n8-10s: upbeat delivery success hit.\nMix: package sounds foreground, motorbike background, no chaotic street noise.",
    "whenToUse": "Dùng cho: shop online, đồ ăn giao hàng, local delivery.",
    "bestPractices": "Mix: package sounds foreground, motorbike background, no chaotic street noise.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-tet-gift-soft-festive",
    "name": "Tet Gift Soft Festive",
    "definition": "Audio direction for Tet Gift Soft Festive. Dùng cho: quà Tết, bánh kẹo, hộp quà, đặc sản.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: ribbon pull and gift box lid lift.\n2-5s: paper rustle, ceramic cup clink, warm room tone.\n5-8s: subtle festive percussion or soft traditional-inspired pluck, no recognizable song.\n8-10s: clean warm chime for final gift hero frame.\nMix: festive but premium, no loud firecrackers, no copyrighted melody.",
    "whenToUse": "Dùng cho: quà Tết, bánh kẹo, hộp quà, đặc sản.",
    "bestPractices": "Mix: festive but premium, no loud firecrackers, no copyrighted melody.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-ao-dai-courtyard",
    "name": "Ao Dai Courtyard",
    "definition": "Audio direction for Ao Dai Courtyard. Dùng cho: áo dài, thời trang truyền thời đại, brand film.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: soft fabric swish, gentle breeze.\n2-5s: footsteps on stone or wooden floor, courtyard ambience.\n5-8s: distant birds and light room tone, elegant and calm.\n8-10s: soft acoustic or string-like resolve, no dramatic score.\nMix: fabric and footsteps foreground, ambience airy, music subtle.",
    "whenToUse": "Dùng cho: áo dài, thời trang truyền thời đại, brand film.",
    "bestPractices": "Mix: fabric and footsteps foreground, ambience airy, music subtle.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-vietnamese-family-chopsticks",
    "name": "Vietnamese Family Chopsticks",
    "definition": "Audio direction for Vietnamese Family Chopsticks. Dùng cho: nước mắm, gia vị, món ăn gia đình.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: chopsticks touch ceramic bowl, sauce drop into dipping dish.\n2-5s: rice bowl placed on table, soft plate movement.\n5-8s: family dinner murmur warm but indistinct.\n8-10s: gentle home music resolve.\nMix: table foley clear, voices low and warm, music not sentimental.",
    "whenToUse": "Dùng cho: nước mắm, gia vị, món ăn gia đình.",
    "bestPractices": "Mix: table foley clear, voices low and warm, music not sentimental.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-local-market-morning",
    "name": "Local Market Morning",
    "definition": "Audio direction for Local Market Morning. Dùng cho: đặc sản, nông sản, street food, travel.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Ambience: Vietnamese morning market with soft vendor movement, distant voices, bags rustling, and motorbikes far away.\nFoley: ingredient handling, basket movement, paper or leaf wrap.\nMusic cue: optional light documentary texture, no lyrics.\nMix: authentic but clean, crowd ambience low, product handling foreground.",
    "whenToUse": "Dùng cho: đặc sản, nông sản, street food, travel.",
    "bestPractices": "Mix: authentic but clean, crowd ambience low, product handling foreground.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "audio-cafe-spoon-stir-cta",
    "name": "Cafe Spoon Stir CTA",
    "definition": "Audio direction for Cafe Spoon Stir CTA. Dùng cho: cafe, course creator, làm việc sáng, lead magnet.",
    "category": "audio",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/audio-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "0-2s: spoon stirs coffee in ceramic cup, close and satisfying.\n2-5s: keyboard taps or notebook page turn, calm focus.\n5-8s: warm cafe murmur low, soft lo-fi beat enters.\n8-10s: cup set down and music resolves, leaving clean space for CTA voice or caption.\nMix: spoon and cup crisp, cafe ambience low, CTA space clean.",
    "whenToUse": "Dùng cho: cafe, course creator, làm việc sáng, lead magnet.",
    "bestPractices": "Mix: spoon and cup crisp, cafe ambience low, CTA space clean.",
    "commonMistakes": [
      "Nhạc quá to, che hết sản phẩm hoặc tiếng nói.",
      "Ambience không khớp bối cảnh hiển thị trong visual.",
      "SFX không đồng bộ đúng với hành động cụ thể."
    ]
  },
  {
    "id": "omni-8-layer-standard-coffee-cup",
    "name": "8-Layer Standard Coffee Cup",
    "definition": "Gemini Omni Flash / Veo3.1 video template for 8-Layer Standard Coffee Cup. Dùng cho: cà phê nóng, giới thiệu moodboard, quảng cáo tĩnh lặng.",
    "category": "omni",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "A small ceramic coffee cup sits on a quiet wooden table at dawn. Steam slowly rises and curls into the cool air. Slow push-in, shallow depth of field, warm morning light, premium and calm mood. Subtle room tone, no dialogue, no on-screen text. One continuous shot, realistic steam movement, 10 seconds.",
    "whenToUse": "Dùng cho: cà phê nóng, giới thiệu moodboard, quảng cáo tĩnh lặng.",
    "bestPractices": "Mix: keep cup sound close, ambient morning birds low, no music.",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-water-and-ice-physics",
    "name": "Water and Ice Physics",
    "definition": "Gemini Omni Flash / Veo3.1 video template for Water and Ice Physics. Dùng cho: nước giải khát, nước khoáng, rót nước ASMR.",
    "category": "omni",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "A clear glass filled with ice sits on a wooden table. Sparkling water is poured into it. The ice cubes shift from impact and buoyancy, droplets splash over the rim following gravity and momentum, and light refracts through the glass. Macro close-up, realistic fluid dynamics, crisp pouring sound, 8 seconds.",
    "whenToUse": "Dùng cho: nước giải khát, nước khoáng, rót nước ASMR.",
    "bestPractices": "Mix: glass splash and pour foreground, room tone very low, no music.",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-fabric-and-wind-motion",
    "name": "Fabric and Wind Motion",
    "definition": "Gemini Omni Flash / Veo3.1 video template for Fabric and Wind Motion. Dùng cho: local brand thời trang, áo dài, lookbook ngoài trời.",
    "category": "omni",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "A person walks through a field wearing a lightweight linen shirt. The fabric drapes naturally, wrinkles form with body movement, and the breeze lifts the loose edges without making the cloth stiff or frozen. Golden-hour backlight, slow tracking shot, soft wind and fabric rustle, 10 seconds.",
    "whenToUse": "Dùng cho: local brand thời trang, áo dài, lookbook ngoài trời.",
    "bestPractices": "Mix: fabric rustle and wind low, no music.",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-rolling-ball-momentum",
    "name": "Rolling Ball Momentum",
    "definition": "Gemini Omni Flash / Veo3.1 video template for Rolling Ball Momentum. Dùng cho: thể thao, chuyển động động năng, VFX cơ bản.",
    "category": "omni",
    "difficulty": "Basic",
    "mood": "Action",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "A tennis ball rolls down a grassy slope, slows briefly on a small incline, then accelerates downhill. It bounces lightly over uneven ground. Friction, gravity and momentum govern the motion. Low tracking camera, natural outdoor ambience, 8 seconds.",
    "whenToUse": "Dùng cho: thể thao, chuyển động động năng, VFX cơ bản.",
    "bestPractices": "Mix: ball impact and grass friction foreground, natural wind background.",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-minimal-product-bottle",
    "name": "Minimal Product Bottle",
    "definition": "Gemini Omni Flash / Veo3.1 video template for Minimal Product Bottle. Dùng cho: chai nước, bình giữ nhiệt, đồ gia dụng tối giản.",
    "category": "omni",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "A matte black water bottle stands on a wet stone in a quiet mountain stream. Sunlight flickers through leaves. Tiny droplets slide down the bottle as the water moves around it. Slow lateral camera move, premium outdoor-ad mood, crisp natural sound of flowing water, no dialogue, no text, 8 seconds.",
    "whenToUse": "Dùng cho: chai nước, bình giữ nhiệt, đồ gia dụng tối giản.",
    "bestPractices": "Mix: water stream sound crisp, no dialogue, no music.",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-neighborhood-baker-sunrise",
    "name": "Neighborhood Baker Sunrise",
    "definition": "Gemini Omni Flash / Veo3.1 video template for Neighborhood Baker Sunrise. Dùng cho: tiệm bánh, ẩm thực khởi nghiệp, review cửa hàng.",
    "category": "omni",
    "difficulty": "Basic",
    "mood": "Nostalgic",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "A young baker opens a small neighborhood bakery just before sunrise. She lifts the metal shutter, switches on warm lights, and smiles as the first light enters. Handheld but stable tracking shot, intimate and hopeful mood, subtle street ambience and the sound of the shutter, no dialogue, 10 seconds.",
    "whenToUse": "Dùng cho: tiệm bánh, ẩm thực khởi nghiệp, review cửa hàng.",
    "bestPractices": "Mix: shutter metal sound and light street noise, acoustic guitar low.",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-character-emotion-shift",
    "name": "Character Emotion Shift",
    "definition": "Gemini Omni Flash / Veo3.1 video template for Character Emotion Shift. Dùng cho: phim ngắn, kể chuyện thương hiệu, diễn xuất khuôn mặt.",
    "category": "omni",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "[0-2s] A woman walks along a quiet street at dusk, holding a closed letter. [2-5s] She stops beneath a streetlight and opens it. [5-8s] Her face shifts from curiosity to surprise. [8-10s] She presses the letter to her chest and looks up. No dialogue. Footsteps, paper rustle and distant wind. Subtle contemplative music.",
    "whenToUse": "Dùng cho: phim ngắn, kể chuyện thương hiệu, diễn xuất khuôn mặt.",
    "bestPractices": "Mix: footsteps and paper rustle foreground, music pad under.",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-educational-brewing-montage",
    "name": "Educational Brewing Montage",
    "definition": "Gemini Omni Flash / Veo3.1 video template for Educational Brewing Montage. Dùng cho: video giáo dục, so sánh sản phẩm, montage 5 nhịp.",
    "category": "omni",
    "difficulty": "Basic",
    "mood": "Dramatic",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Create a 10-second educational montage showing five coffee brewing methods, one method every two seconds. Each method appears in its own realistic setting with a clear on-screen label. Quick clean cuts, readable sans-serif text, upbeat but restrained music, consistent color palette.",
    "whenToUse": "Dùng cho: video giáo dục, so sánh sản phẩm, montage 5 nhịp.",
    "bestPractices": "Mix: clean music beat, quick swoosh transitions synced to cuts.",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-integrated-store-sign-text",
    "name": "Integrated Store Sign Text",
    "definition": "Gemini Omni Flash / Veo3.1 video template for Integrated Store Sign Text. Dùng cho: bảng hiệu cửa hàng, lồng ghép text thực tế.",
    "category": "omni",
    "difficulty": "Basic",
    "mood": "Modern",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "A small independent cafe opens at morning rush. Include one readable storefront sign saying \"MỘC CAFE\" above the entrance and a simple menu board inside. Use a clean sans-serif font, warm cream text on dark green signs, natural perspective, no extra words or misspelled text. Slow street-level tracking shot, 8 seconds.",
    "whenToUse": "Dùng cho: bảng hiệu cửa hàng, lồng ghép text thực tế.",
    "bestPractices": "Mix: light chatter and street ambience, low jazz guitar.",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-immersive-forest-trail-audio",
    "name": "Immersive Forest Trail Audio",
    "definition": "Gemini Omni Flash / Veo3.1 video template for Immersive Forest Trail Audio. Dùng cho: du lịch, khám phá thiên nhiên, trekking.",
    "category": "omni",
    "difficulty": "Basic",
    "mood": "Modern",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "A person hikes along a damp forest trail. The audio is entirely natural: footsteps compressing wet leaves, distant birds, wind moving through the canopy, occasional branch creaks and a faint stream. No dialogue, no music, no artificial sound effects. Slow handheld follow shot, immersive realistic atmosphere, 10 seconds.",
    "whenToUse": "Dùng cho: du lịch, khám phá thiên nhiên, trekking.",
    "bestPractices": "Mix: environmental foley only, no score.",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-template-a-text-to-video",
    "name": "Template A - Text-to-Video",
    "definition": "Gemini Omni Flash / Veo3.1 video template for Template A - Text-to-Video. Dùng cho: Viết prompt tạo video từ ý tưởng chữ từ đầu.",
    "category": "omni",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Create a [duration] video of [subject] [main action] in [setting/time]. [Camera movement]. [Lighting/look]. The mood is [emotion]. Audio: [dialogue/music/ambience]. [One key constraint].",
    "whenToUse": "Dùng cho: Viết prompt tạo video từ ý tưởng chữ từ đầu.",
    "bestPractices": "Mix: [priority and loudness relationship].",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-template-b-image-to-video",
    "name": "Template B - Image-to-Video",
    "definition": "Gemini Omni Flash / Veo3.1 video template for Template B - Image-to-Video. Dùng cho: Tạo chuyển động cho một bức ảnh sản phẩm/chân dung có sẵn.",
    "category": "omni",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Use the provided image as the exact reference for [subject]. Keep [features] unchanged. Animate [one main movement]. [Camera]. [Lighting/mood]. Audio: [sound]. Do not add or change [constraint].",
    "whenToUse": "Dùng cho: Tạo chuyển động cho một bức ảnh sản phẩm/chân dung có sẵn.",
    "bestPractices": "Mix: [priority and loudness relationship].",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-template-c-multi-turn-edit",
    "name": "Template C - Multi-turn Edit",
    "definition": "Gemini Omni Flash / Veo3.1 video template for Template C - Multi-turn Edit. Dùng cho: Lệnh hội thoại để điều chỉnh chỉnh sửa video lượt sau.",
    "category": "omni",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Keep the subject, setting, framing and camera movement unchanged. Change only [one variable] to [desired result].",
    "whenToUse": "Dùng cho: Lệnh hội thoại để điều chỉnh chỉnh sửa video lượt sau.",
    "bestPractices": "Mix: [priority and loudness relationship].",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-template-d-physics-interaction",
    "name": "Template D - Physics Interaction",
    "definition": "Gemini Omni Flash / Veo3.1 video template for Template D - Physics Interaction. Dùng cho: Mô phỏng vật lý chân thực của chất lỏng, vải vóc, va chạm.",
    "category": "omni",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Show [object/material] interacting with [force/event]. It responds with realistic [gravity/momentum/friction/buoyancy/wind/material behavior]. [Camera]. [Audio].",
    "whenToUse": "Dùng cho: Mô phỏng vật lý chân thực của chất lỏng, vải vóc, va chạm.",
    "bestPractices": "Mix: [priority and loudness relationship].",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-template-e-story-beats-timeline",
    "name": "Template E - Story Beats Timeline",
    "definition": "Gemini Omni Flash / Veo3.1 video template for Template E - Story Beats Timeline. Dùng cho: Video ngắn có diễn tiến câu chuyện/montage chia nhịp giây.",
    "category": "omni",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "[0-2s] [setup]. [2-5s] [first change]. [5-8s] [turning point]. [8-10s] [end state]. Mood: [emotion]. Audio: [sound plan].",
    "whenToUse": "Dùng cho: Video ngắn có diễn tiến câu chuyện/montage chia nhịp giây.",
    "bestPractices": "Mix: [priority and loudness relationship].",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-template-f-text-and-audio-sync",
    "name": "Template F - Text and Audio Sync",
    "definition": "Gemini Omni Flash / Veo3.1 video template for Template F - Text and Audio Sync. Dùng cho: Tích hợp chữ viết hiển thị và âm thanh đồng bộ chính xác.",
    "category": "omni",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "/img/cinematique/omni-placeholder.webp",
    "videoRef": "",
    "promptTemplate": "Include readable text \"[exact words]\" at [location], using [font/style/color]. No extra text. Audio consists of [primary sound], with [no dialogue/no music/music cue].",
    "whenToUse": "Dùng cho: Tích hợp chữ viết hiển thị và âm thanh đồng bộ chính xác.",
    "bestPractices": "Mix: [priority and loudness relationship].",
    "commonMistakes": [
      "Bỏ qua lực vật lý (physics) thực tế của vật thể.",
      "Làm cảnh quá rộng, có quá nhiều câu chuyện hoặc chủ thể rời rạc.",
      "Sử dụng các câu thoại voice-over quá dài trong clip ngắn 10 giây."
    ]
  },
  {
    "id": "omni-food-pho-steam-memory",
    "name": "Pho Steam Memory (Tô Phở Bốc Khói)",
    "definition": "Prompt video ẩm thực ASMR 10 giây: Quá trình tạo nên tô phở hoàn hảo từ bếp ra bàn ăn. Từng lớp chuyển động sắc nét: rót nước dùng trong vắt bốc khói, bày đĩa rau ớt tươi, đũa gắp bánh phở óng ả và cảnh hero shot bàn ăn sáng ấm cúng. Tối ưu âm thanh thực tế bản địa (native audio) cho Gemini Omni.",
    "category": "food",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: a cinematic bowl of [Subject] from kitchen to table. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Macro shot of clear broth pouring into a bowl, steam curling under warm kitchen light.\n2.0-4.0s: Herbs, lime, and chili are placed beside the bowl with crisp tactile motion.\n4.0-7.0s: Chopsticks lift noodles slowly; steam catches a soft backlight, broth shimmering.\n7.0-10.0s: Table hero shot: the bowl sits in a cozy morning setting, inviting and realistic.\nVisual style: cinematic food ASMR, warm documentary realism, 9:16 vertical.\nAudio: broth pour, herb rustle, noodle lift, soft ambient kitchen.\nAvoid: messy bowl, distorted chopsticks, unreadable signage.",
    "whenToUse": "Quảng cáo nhà hàng, video ngắn TikTok/Reels ẩm thực Việt Nam, video món nước truyền thống với cảm giác chân thực và kích thích vị giác cực mạnh.",
    "bestPractices": "Giữ prompt tiếng Anh nguyên bản để AI hiểu chính xác cấu trúc timeline. Thay [Subject] bằng tên món ăn/thương hiệu. Dùng ánh sáng ngược (backlight) bắt khói để tạo độ sâu.",
    "commonMistakes": [
      "Bát phở bị lộn xộn, đũa bị méo mó ngón tay",
      "Nước dùng bị mờ đục hoặc khói chuyển động phi tự nhiên",
      "Có chữ hoặc bảng hiệu vô nghĩa trong hậu cảnh"
    ],
    "recommendedMotion": "MACRO PUSH-IN / SLOW LIFT",
    "audioCue": "Broth pour, herb rustle, noodle lift, soft ambient kitchen"
  },
  {
    "id": "omni-food-matcha-ritual-glow",
    "name": "Matcha Ritual Glow (Nghi Thức Pha Matcha)",
    "definition": "Prompt video đồ uống ASMR 10 giây: Nghệ thuật pha trà matcha cao cấp với kết cấu xúc giác sống động. Bột trà xanh rây mịn màng, dòng nước sôi rót vào bát gốm, chổi tre đánh bọt xoay tròn tạo lớp bọt mịn màng óng ả và hero shot tách trà bên cạnh chiếc bánh ngọt tối giản.",
    "category": "food",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: premium [Subject] preparation with satisfying textures. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Fine green matcha powder falls through a sieve into a ceramic bowl, macro detail.\n2.0-4.0s: Hot water pours in; bamboo whisk begins a smooth circular motion.\n4.0-7.0s: Foam forms into a glossy surface; camera pushes in with soft morning light.\n7.0-10.0s: Finished matcha cup placed beside a minimal pastry on a calm table.\nVisual style: minimal beverage ASMR, clean natural light, tactile ceramic, 9:16 vertical.\nAudio: powder sift, water pour, whisking, quiet lo-fi music.\nAvoid: neon green color, warped whisk, cluttered background.",
    "whenToUse": "Video quảng bá quán cà phê/trà đạo, phong cách tối giản Nhật Bản, nội dung thư giãn ASMR cho Reels, Shorts, TikTok.",
    "bestPractices": "Tập trung vào ánh sáng tự nhiên dịu nhẹ buổi sáng, chất liệu gốm thô và kết cấu bọt trà. Thay [Subject] thành matcha latte, hojicha hoặc cold whisk matcha.",
    "commonMistakes": [
      "Màu xanh lá bị rực quá đà (neon green)",
      "Chổi tre đánh trà bị biến dạng nan tre",
      "Không gian nền bị rối rắm làm mất tính thiền định"
    ],
    "recommendedMotion": "MACRO FOCUS / SMOOTH ZOOM-IN",
    "audioCue": "Powder sift, water pour, whisking, quiet lo-fi music"
  },
  {
    "id": "omni-food-pizza-fire-pull",
    "name": "Pizza Fire Pull (Kéo Phô Mai Lò Củi)",
    "definition": "Prompt video thương mại món ăn 10 giây: Quá trình nướng và thưởng thức bánh pizza nướng củi đậm chất Ý. Cận cảnh ngọn lửa rực sáng trong lò gạch, vỏ bánh phồng xém giòn tan, nhát kéo miếng pizza với phô mai mozzarella kéo sợi tự nhiên cùng lá húng tây óng ánh dầu ô liu.",
    "category": "food",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: wood-fired [Subject] reveal with cheese stretch. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Flames move inside a brick oven; pizza crust bubbles in close-up.\n2.0-4.0s: A peel pulls the pizza out, charred edges crisp and steam rising.\n4.0-7.0s: Slice lifted slowly, cheese stretches naturally with basil and oil glistening.\n7.0-10.0s: Hero shot on a wooden table, warm restaurant bokeh behind.\nVisual style: rustic cinematic food commercial, high appetite appeal, 9:16 vertical.\nAudio: fire crackle, peel scrape, cheese stretch, soft crowd ambience.\nAvoid: unsafe flames, rubbery cheese, distorted hands.",
    "whenToUse": "Video TVC nhà hàng Ý, ẩm thực nướng củi, menu pizza thủ công, quảng cáo món ăn kích thích vị giác cao.",
    "bestPractices": "Nhấn mạnh âm thanh tí tách của củi cháy và tiếng xẻng xúc bánh. Thay [Subject] bằng pizza Napoletana, phô mai truffle hoặc bánh sourdough.",
    "commonMistakes": [
      "Phô mai bị kéo sợi trông giả như cao su",
      "Bàn tay nhấc bánh bị lỗi ngón tay AI",
      "Ngọn lửa quá hung hãn che mất chi tiết món ăn"
    ],
    "recommendedMotion": "CLOSE-UP PULL / SLOW-MOTION TILT",
    "audioCue": "Fire crackle, peel scrape, cheese stretch, soft crowd ambience"
  },
  {
    "id": "omni-food-ramen-bar-night",
    "name": "Ramen Bar Night (Quầy Ramen Đêm Mưa)",
    "definition": "Prompt phim tài liệu ẩm thực phong cách Noir 10 giây: Khung cảnh quán ramen đêm ấm cúng đối lập với cơn mưa ngoài phố. Ánh đèn neon phản chiếu trên cửa kính đọng hơi sương, đầu bếp chan muôi nước dùng đậm đà, xếp trứng ngâm và thịt chashu tỉ mỉ, khách gắp mì trong làn hơi bốc khói.",
    "category": "food",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: moody [Subject] preparation in a night shop. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Neon rain reflects outside while steam fogs a ramen shop window.\n2.0-4.0s: Chef pours broth over noodles, close-up of steam and oil droplets.\n4.0-7.0s: Toppings placed with precision: egg, scallion, seaweed, meat or tofu.\n7.0-10.0s: Customer lifts noodles; warm bowl light contrasts with cool rainy street.\nVisual style: noir food documentary, cinematic steam, 9:16 vertical.\nAudio: rain, broth pour, chopsticks, quiet shop ambience.\nAvoid: readable signs, distorted noodles, messy counter.",
    "whenToUse": "Quảng bá quán ăn đêm, quán ramen, ẩm thực đường phố Tokyo phong cách điện ảnh cao cấp.",
    "bestPractices": "Tận dụng độ tương phản màu sắc giữa ánh sáng vàng ấm bên trong và tông màu xanh lạnh mưa đêm bên ngoài để tạo chiều sâu cảm xúc.",
    "commonMistakes": [
      "Sợi mì bị dính bệt hoặc chuyển động méo mó",
      "Mặt quầy bếp bị bừa bộn mất thẩm mỹ",
      "Chữ tiếng Nhật bị biến dạng trên biển hiệu"
    ],
    "recommendedMotion": "RACK FOCUS / CINEMATIC TRACKING",
    "audioCue": "Rain, broth pour, chopsticks, quiet shop ambience"
  },
  {
    "id": "omni-food-tropical-smoothie-bowl",
    "name": "Tropical Smoothie Bowl (Smoothie Nhiệt Đới Tươi Mát)",
    "definition": "Prompt video quảng cáo tươi sáng 10 giây: Trái cây nhiệt đới xoài, thanh long, chuối và quả mọng rơi slow-motion trong căn bếp ngập tràn ánh nắng. Phần sinh tố sánh mịn xoáy vào bát, hạt chia và hoa quả xếp tầng đều đặn và thìa múc tràn đầy năng lượng buổi sáng.",
    "category": "food",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: fresh healthy ingredients assemble in slow motion. Subject: [Subject]. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Mango, dragon fruit, banana, and berries fall in slow motion against a bright sunlit kitchen.\n2.0-4.0s: Smoothie base swirls into a bowl with glossy thick texture.\n4.0-7.0s: Toppings arrange themselves in a satisfying radial pattern, realistic gravity.\n7.0-10.0s: Spoon dips into the bowl; final fresh hero shot with morning energy.\nVisual style: bright fresh food ad, vibrant but natural color, 9:16 vertical.\nAudio: fruit drop, blender fade, spoon tap, upbeat light music.\nAvoid: oversaturated colors, floating impossible ingredients, text.",
    "whenToUse": "Video quảng cáo thực phẩm healthy, đồ ăn sáng, quán sinh tố/juice bar, nội dung lối sống lành mạnh.",
    "bestPractices": "Giữ màu sắc tươi sáng tự nhiên, không đẩy bão hòa màu quá mức. Dùng hiệu ứng chuyển động chậm (slow motion) để bắt trọn giọt nước trên vỏ quả.",
    "commonMistakes": [
      "Trái cây bay lơ lửng bất quy tắc trái trọng lực",
      "Màu sắc quá rực (oversaturated) làm mất cảm giác hữu cơ tươi sạch",
      "Hiện các dòng chữ nhãn hiệu không mong muốn"
    ],
    "recommendedMotion": "SLOW-MOTION DROP / RADIAL ROTATION",
    "audioCue": "Fruit drop, blender fade, spoon tap, upbeat light music"
  },
  {
    "id": "omni-food-chocolate-lava-break",
    "name": "Chocolate Lava Break (Bánh Lava Socola Chảy)",
    "definition": "Prompt video tráng miệng sang trọng ASMR 10 giây: Cận cảnh đường bột tuyết trắng rắc lên chiếc bánh socola đen mềm mịn. Chiếc muỗng nhẹ nhàng ấn nứt lớp vỏ ngoài, dòng socola ấm nóng tan chảy từ từ bên trong và hero shot bánh cạnh quả mọng dưới ánh nến lung linh.",
    "category": "food",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: luxury dessert macro reveal with flowing center. Subject: [Subject]. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Close-up of powdered sugar falling over a dark chocolate cake like snow.\n2.0-4.0s: Spoon presses into the cake crust, texture cracking gently.\n4.0-7.0s: Warm chocolate center flows out slowly, glossy and rich.\n7.0-10.0s: Final plated hero shot with berries, candle bokeh, and soft restaurant light.\nVisual style: luxury dessert ASMR, macro lens, warm low light, 9:16 vertical.\nAudio: sugar dust, spoon crack, chocolate flow, soft piano.\nAvoid: messy spill, plastic texture, distorted spoon.",
    "whenToUse": "Video quảng bá tiệm bánh cao cấp, thực đơn món tráng miệng nhà hàng sang trọng, Reels ASMR ẩm thực ngọt ngào.",
    "bestPractices": "Sử dụng ống kính Macro và ánh sáng nến mờ ảo (candle bokeh) để tôn lên độ bóng sánh mịn của dòng sốt socola chảy.",
    "commonMistakes": [
      "Socola chảy quá nhanh làm tràn đĩa lem luốc",
      "Kết cấu socola nhìn giống chất dẻo hoặc nhựa",
      "Chiếc thìa múc bị biến dạng trong lúc chuyển động"
    ],
    "recommendedMotion": "MACRO PUSH-IN / SHALLOW DOF CRACK",
    "audioCue": "Sugar dust, spoon crack, chocolate flow, soft piano"
  },
  {
    "id": "omni-food-neon-citrus-mocktail",
    "name": "Neon Citrus Mocktail (Mocktail Cam Neon Sôi Động)",
    "definition": "Prompt video thương mại đồ uống đêm 10 giây: Đá viên rơi vào ly highball dưới ánh sáng neon xanh ngọc và san hô. Nước ép cam quýt và soda có ga rót phân tầng sủi bọt chân thực, vỏ cam xoắn nhẹ bắn ra những giọt tinh dầu li ti và chiếc ly trượt trên quầy bar bóng loáng đọng sương.",
    "category": "food",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: refreshing drink build with vibrant nightlife look. Subject: [Subject]. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Ice cubes tumble into a highball glass under teal and coral neon highlights.\n2.0-4.0s: Citrus syrup and sparkling water pour in layers, bubbles crisp and realistic.\n4.0-7.0s: Garnish twists above the glass, releasing tiny droplets in slow motion.\n7.0-10.0s: Glass slides across a polished bar top, condensation glowing in neon reflections.\nVisual style: premium beverage commercial, neon macro, 9:16 vertical.\nAudio: ice clink, fizz, garnish twist, smooth lounge beat.\nAvoid: brand labels, unrealistic liquid physics, overly dark drink.",
    "whenToUse": "Video quảng cáo quán bar, lounge, mocktail mùa hè, video thương mại đồ uống giải khát với phong cách hiện đại sôi động.",
    "bestPractices": "Kết hợp phản chiếu neon với bọt khí sủi bọt (fizz) và giọt nước đọng trên thành ly để tạo cảm giác mát lạnh tức thì.",
    "commonMistakes": [
      "Chuyển động chất lỏng bị đơ hoặc phi vật lý",
      "Ánh sáng nền quá tối che khuất màu sắc rực rỡ của ly nước",
      "Hiện nhãn mác thương hiệu không rõ nguồn gốc"
    ],
    "recommendedMotion": "DYNAMIC SLIDE / MACRO SPLASH",
    "audioCue": "Ice clink, fizz, garnish twist, smooth lounge beat"
  },
  {
    "id": "omni-food-chef-sauce-signature",
    "name": "Chef Sauce Signature (Nét Rưới Sốt Fine Dining)",
    "definition": "Prompt video ẩm thực cao cấp 10 giây: Đĩa gốm đen tối giản dưới ánh đèn ấm áp của gian bếp cao cấp. Bếp trưởng dùng nhíp gắp món chính đặt chuẩn xác từng milimet, dòng sốt sánh bóng được rưới theo đường vòng cung nghệ thuật quanh món ăn bốc khói cùng rau mầm trang trí.",
    "category": "food",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: fine dining plate finished with a precise sauce pour. Subject: [Subject]. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Dark plate under warm pass light, empty space composed like fine art.\n2.0-4.0s: Chef places the main element of [Subject] with tweezers or tongs, careful and calm.\n4.0-7.0s: Sauce is poured in a clean arc, forming a glossy elegant line around the food.\n7.0-10.0s: Camera pushes into final plate as steam and microgreens create depth.\nVisual style: fine dining cinematic commercial, shallow depth, 9:16 vertical.\nAudio: kitchen hush, plate tap, sauce pour, elegant jazz note.\nAvoid: messy sauce, extra fingers, readable menus.",
    "whenToUse": "Video quảng cáo nhà hàng Michelin, fine dining, tôn vinh kỹ năng đầu bếp và sự tinh tế trong trình bày món ăn thượng hạng.",
    "bestPractices": "Tận dụng độ sâu trường ảnh nông (shallow depth of field) và ánh sáng tập trung (spotlight) để biến đĩa ăn thành một tác phẩm nghệ thuật.",
    "commonMistakes": [
      "Nét rưới sốt bị run tay hoặc tràn vệt lem luốc",
      "Bàn tay đầu bếp bị vẽ thừa ngón tay",
      "Menu nhà hàng lộ rõ chữ bị biến dạng"
    ],
    "recommendedMotion": "SLOW PUSH-IN / PRECISE TILT",
    "audioCue": "Kitchen hush, plate tap, sauce pour, elegant jazz note"
  },
  {
    "id": "omni-food-croissant-morning-crackle",
    "name": "Croissant Morning Crackle (Bánh Croissant Giòn Tan Buổi Sáng)",
    "definition": "Prompt video tiệm bánh ASMR 10 giây: Cửa lò nướng mở ra, những chiếc bánh sừng bò croissant vàng óng tỏa sáng dưới nắng sớm. Thợ bánh nhấc chiếc bánh nở phồng, các lớp vỏ vụn rơi slow-motion, cận cảnh tách đôi chiếc bánh lộ ruột tổ ong xốp mềm bên tách cà phê thơm ngát.",
    "category": "food",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: bakery [Subject] texture and warmth. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Oven door opens; golden croissants glow in warm morning light.\n2.0-4.0s: Baker lifts one croissant, flakes falling in crisp slow motion.\n4.0-7.0s: Close-up of the croissant being gently pulled open, airy layers visible.\n7.0-10.0s: Croissant placed beside coffee on a small table near a sunny bakery window.\nVisual style: cozy bakery ASMR, warm natural light, 9:16 vertical.\nAudio: oven door, crust crackle, paper bag rustle, acoustic music.\nAvoid: burnt texture, warped hands, brand signage.",
    "whenToUse": "Video quảng cáo tiệm bánh ngọt (bakery), quán cà phê sáng, nội dung ASMR âm thanh giòn tan kích thích người xem.",
    "bestPractices": "Đặc tả âm thanh giòn rụm (crackle) của vỏ bánh và lớp ruột tổ ong (honeycomb structure). Thay [Subject] thành pain au chocolat, sourdough hoặc bánh ngọt ưa thích.",
    "commonMistakes": [
      "Vỏ bánh bị cháy đen hoặc mất độ xốp lớp lớp",
      "Bàn tay kéo bánh bị méo khớp",
      "Ánh sáng quá gắt làm mất tông màu ấm cúng của tiệm bánh"
    ],
    "recommendedMotion": "MACRO CRACKLE / SLOW PULL-APART",
    "audioCue": "Oven door, crust crackle, paper bag rustle, acoustic music"
  },
  {
    "id": "omni-food-street-skewer-flame-kiss",
    "name": "Street Skewer Flame Kiss (Xiên Que Nướng Lửa Chợ Đêm)",
    "definition": "Prompt phim tài liệu ẩm thực đường phố 10 giây: Những xiên que thịt nướng xèo xèo trên than hồng rực lửa, mỡ và sốt ướp thơm lừng. Ngọn lửa bùng lên soi rõ bàn tay thoăn thoắt của người bán hàng, lớp sốt quét bóng bẩy dưới ánh đèn lồng chợ đêm ấm áp và nhộn nhịp.",
    "category": "food",
    "difficulty": "Intermediate",
    "mood": "Dramatic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: night market [Subject] with fire and steam. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Close-up of skewers turning over charcoal, fat and sauce sizzling.\n2.0-4.0s: Flame flares briefly, illuminating the vendor’s hands and smoke.\n4.0-7.0s: Sauce is brushed on in glossy strokes, steam rising into warm lantern light.\n7.0-10.0s: Finished skewers handed to a customer; background crowd remains softly blurred.\nVisual style: street food documentary, warm night market, 9:16 vertical.\nAudio: sizzle, brush stroke, crowd murmur, lively percussion.\nAvoid: unsafe fire, readable signs, distorted hands.",
    "whenToUse": "Video ẩm thực đường phố (street food), chợ đêm châu Á, món nướng BBQ than hoa, video ẩm thực du lịch hấp dẫn.",
    "bestPractices": "Nhấn mạnh âm thanh xèo xèo (sizzle) và vệt quét sốt sáng bóng. Thay [Subject] thành xiên thịt nướng, hải sản nướng mỡ hành hoặc yakitori.",
    "commonMistakes": [
      "Lửa bốc quá dữ dội làm cháy đen hình ảnh",
      "Hậu cảnh quá lộn xộn gây mất tập trung khỏi món ăn",
      "Bàn tay người bán hàng bị lỗi giải phẫu"
    ],
    "recommendedMotion": "DYNAMIC ROTATION / SMOKE TRACKING",
    "audioCue": "Sizzle, brush stroke, crowd murmur, lively percussion"
  },
  {
    "id": "vn-01-quan-ca-phe-via-he-sau-mua",
    "name": "01. Quan ca phe via he sau mua (Phố Phường & Đời Sống Đô Thị)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Phố Phường & Đời Sống Đô Thị]: A cozy Vietnamese sidewalk coffee stall after the rain, tiny plastic stools, stainless steel phin filters, wet pavement reflecting warm street lights, morning steam rising from cups, candid lifestyle photography, cinematic 35mm lens, soft contrast, realistic details",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A cozy Vietnamese sidewalk coffee stall after the rain, tiny plastic stools, stainless steel phin filters, wet pavement reflecting warm street lights, morning steam rising from cups, candid lifestyle photography, cinematic 35mm lens, soft contrast, realistic details --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Phố Phường & Đời Sống Đô Thị). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Phố Phường & Đời Sống Đô Thị"
  },
  {
    "id": "vn-02-hem-sai-gon-luc-binh-minh",
    "name": "02. Hem Sai Gon luc binh minh (Phố Phường & Đời Sống Đô Thị)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Phố Phường & Đời Sống Đô Thị]: A narrow Saigon alley at sunrise, motorbikes parked close together, old yellow walls, hanging laundry, a woman watering plants on a balcony, soft golden light entering the alley, documentary street photography, natural colors, cinematic realism",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A narrow Saigon alley at sunrise, motorbikes parked close together, old yellow walls, hanging laundry, a woman watering plants on a balcony, soft golden light entering the alley, documentary street photography, natural colors, cinematic realism --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Phố Phường & Đời Sống Đô Thị). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Phố Phường & Đời Sống Đô Thị"
  },
  {
    "id": "vn-03-pho-co-ha-noi-mua-thu",
    "name": "03. Pho co Ha Noi mua thu (Phố Phường & Đời Sống Đô Thị)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Phố Phường & Đời Sống Đô Thị]: Hanoi Old Quarter in autumn, yellow leaves falling on a quiet street, a bicycle carrying flowers, old French colonial facades, warm morning light, gentle mist, nostalgic cinematic photography, 50mm lens, soft film grain",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Hanoi Old Quarter in autumn, yellow leaves falling on a quiet street, a bicycle carrying flowers, old French colonial facades, warm morning light, gentle mist, nostalgic cinematic photography, 50mm lens, soft film grain --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Phố Phường & Đời Sống Đô Thị). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Phố Phường & Đời Sống Đô Thị"
  },
  {
    "id": "vn-04-cau-long-bien-buoi-som",
    "name": "04. Cau Long Bien buoi som (Phố Phường & Đời Sống Đô Thị)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Phố Phường & Đời Sống Đô Thị]: Long Bien Bridge at early morning, a vendor riding a bicycle with baskets of vegetables, red steel structure fading into fog, river below, peaceful Vietnamese urban atmosphere, wide cinematic composition, muted colors, realistic texture",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Long Bien Bridge at early morning, a vendor riding a bicycle with baskets of vegetables, red steel structure fading into fog, river below, peaceful Vietnamese urban atmosphere, wide cinematic composition, muted colors, realistic texture --ar 21:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Phố Phường & Đời Sống Đô Thị). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Phố Phường & Đời Sống Đô Thị"
  },
  {
    "id": "vn-05-chuyen-xe-buyt-chieu-muon",
    "name": "05. Chuyen xe buyt chieu muon (Phố Phường & Đời Sống Đô Thị)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Phố Phường & Đời Sống Đô Thị]: Inside a Vietnamese city bus during golden hour, soft sunlight through dusty windows, students in white shirts sitting quietly, motorbike traffic outside, emotional slice-of-life photography, shallow depth of field, cinematic realism",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Inside a Vietnamese city bus during golden hour, soft sunlight through dusty windows, students in white shirts sitting quietly, motorbike traffic outside, emotional slice-of-life photography, shallow depth of field, cinematic realism --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Phố Phường & Đời Sống Đô Thị). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Phố Phường & Đời Sống Đô Thị"
  },
  {
    "id": "vn-06-pho-dem-mua-nhe",
    "name": "06. Pho dem mua nhe (Phố Phường & Đời Sống Đô Thị)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Phố Phường & Đời Sống Đô Thị]: A Vietnamese street at night under light rain, neon signs reflected on wet asphalt, food carts glowing with warm bulbs, people wearing raincoats on motorbikes, cinematic street photography, moody atmosphere, realistic reflections",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese street at night under light rain, neon signs reflected on wet asphalt, food carts glowing with warm bulbs, people wearing raincoats on motorbikes, cinematic street photography, moody atmosphere, realistic reflections --ar 9:16",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Phố Phường & Đời Sống Đô Thị). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Phố Phường & Đời Sống Đô Thị"
  },
  {
    "id": "vn-07-tiem-tap-hoa-nho",
    "name": "07. Tiem tap hoa nho (Phố Phường & Đời Sống Đô Thị)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Phố Phường & Đời Sống Đô Thị]: A small Vietnamese neighborhood grocery store, colorful snack packs hanging from the ceiling, a friendly shop owner behind the counter, old fan, plastic baskets, warm afternoon light, authentic everyday life, detailed editorial photography",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A small Vietnamese neighborhood grocery store, colorful snack packs hanging from the ceiling, a friendly shop owner behind the counter, old fan, plastic baskets, warm afternoon light, authentic everyday life, detailed editorial photography --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Phố Phường & Đời Sống Đô Thị). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Phố Phường & Đời Sống Đô Thị"
  },
  {
    "id": "vn-08-ganh-hang-rong-giua-pho",
    "name": "08. Ganh hang rong giua pho (Phố Phường & Đời Sống Đô Thị)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Phố Phường & Đời Sống Đô Thị]: A Vietnamese street vendor carrying a traditional shoulder pole with fresh fruit, crossing a busy city street, motion blur of motorbikes around her, warm cinematic sunlight, human-centered documentary photography, vibrant but natural colors",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese street vendor carrying a traditional shoulder pole with fresh fruit, crossing a busy city street, motion blur of motorbikes around her, warm cinematic sunlight, human-centered documentary photography, vibrant but natural colors --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Phố Phường & Đời Sống Đô Thị). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Phố Phường & Đời Sống Đô Thị"
  },
  {
    "id": "vn-09-quan-com-binh-dan-gio-trua",
    "name": "09. Quan com binh dan gio trua (Phố Phường & Đời Sống Đô Thị)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Phố Phường & Đời Sống Đô Thị]: A busy Vietnamese local rice eatery at lunchtime, trays of home-style dishes, office workers eating quickly, steam rising from soup bowls, warm fluorescent light mixed with daylight, realistic food documentary style, lively composition",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A busy Vietnamese local rice eatery at lunchtime, trays of home-style dishes, office workers eating quickly, steam rising from soup bowls, warm fluorescent light mixed with daylight, realistic food documentary style, lively composition --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Phố Phường & Đời Sống Đô Thị). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Phố Phường & Đời Sống Đô Thị"
  },
  {
    "id": "vn-10-ban-cong-chung-cu-cu",
    "name": "10. Ban cong chung cu cu (Phố Phường & Đời Sống Đô Thị)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Phố Phường & Đời Sống Đô Thị]: Old Vietnamese apartment balconies filled with potted plants, bird cages, laundry, and warm interior lights at dusk, layered urban texture, cinematic telephoto shot, nostalgic mood, realistic architecture details",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Old Vietnamese apartment balconies filled with potted plants, bird cages, laundry, and warm interior lights at dusk, layered urban texture, cinematic telephoto shot, nostalgic mood, realistic architecture details --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Phố Phường & Đời Sống Đô Thị). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Phố Phường & Đời Sống Đô Thị"
  },
  {
    "id": "vn-11-canh-dong-lua-mua-gat",
    "name": "11. Canh dong lua mua gat (Làng Quê & Thiên Nhiên Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Làng Quê & Thiên Nhiên Việt Nam]: A Vietnamese rice field during harvest season, farmers wearing conical hats, golden rice stretching to the horizon, buffalo resting near a small path, warm sunset, cinematic rural landscape, natural haze, realistic details",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese rice field during harvest season, farmers wearing conical hats, golden rice stretching to the horizon, buffalo resting near a small path, warm sunset, cinematic rural landscape, natural haze, realistic details --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Làng Quê & Thiên Nhiên Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Làng Quê & Thiên Nhiên Việt Nam"
  },
  {
    "id": "vn-12-duong-lang-sau-con-mua",
    "name": "12. Duong lang sau con mua (Làng Quê & Thiên Nhiên Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Làng Quê & Thiên Nhiên Việt Nam]: A quiet Vietnamese village road after rain, wet red brick path, bamboo fences, banana trees, small puddles reflecting the sky, a child riding a bicycle, peaceful rural mood, soft natural light, documentary realism",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A quiet Vietnamese village road after rain, wet red brick path, bamboo fences, banana trees, small puddles reflecting the sky, a child riding a bicycle, peaceful rural mood, soft natural light, documentary realism --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Làng Quê & Thiên Nhiên Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Làng Quê & Thiên Nhiên Việt Nam"
  },
  {
    "id": "vn-13-bep-nha-que-buoi-sang",
    "name": "13. Bep nha que buoi sang (Làng Quê & Thiên Nhiên Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Làng Quê & Thiên Nhiên Việt Nam]: A traditional Vietnamese countryside kitchen in the morning, wood stove, clay pots, sunlight through bamboo walls, steam from a pot of rice, grandmother preparing breakfast, warm intimate atmosphere, cinematic close-up photography",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A traditional Vietnamese countryside kitchen in the morning, wood stove, clay pots, sunlight through bamboo walls, steam from a pot of rice, grandmother preparing breakfast, warm intimate atmosphere, cinematic close-up photography --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Làng Quê & Thiên Nhiên Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Làng Quê & Thiên Nhiên Việt Nam"
  },
  {
    "id": "vn-14-ao-sen-mua-he",
    "name": "14. Ao sen mua he (Làng Quê & Thiên Nhiên Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Làng Quê & Thiên Nhiên Việt Nam]: A lotus pond in rural Vietnam during early summer, pink lotus flowers, green leaves covered in dew, a woman in a simple ao ba ba collecting lotus stems, soft morning mist, poetic cinematic photography",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A lotus pond in rural Vietnam during early summer, pink lotus flowers, green leaves covered in dew, a woman in a simple ao ba ba collecting lotus stems, soft morning mist, poetic cinematic photography --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Làng Quê & Thiên Nhiên Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Làng Quê & Thiên Nhiên Việt Nam"
  },
  {
    "id": "vn-15-doi-che-xanh",
    "name": "15. Doi che xanh (Làng Quê & Thiên Nhiên Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Làng Quê & Thiên Nhiên Việt Nam]: Rolling green tea hills in northern Vietnam, workers picking tea leaves with woven baskets, morning fog drifting between rows, soft diffused light, peaceful landscape photography, cinematic wide shot, rich natural greens",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Rolling green tea hills in northern Vietnam, workers picking tea leaves with woven baskets, morning fog drifting between rows, soft diffused light, peaceful landscape photography, cinematic wide shot, rich natural greens --ar 21:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Làng Quê & Thiên Nhiên Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Làng Quê & Thiên Nhiên Việt Nam"
  },
  {
    "id": "vn-16-cho-que-som",
    "name": "16. Cho que som (Làng Quê & Thiên Nhiên Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Làng Quê & Thiên Nhiên Việt Nam]: A small rural Vietnamese morning market, baskets of vegetables, fresh herbs, fish, and flowers, vendors chatting under old umbrellas, soft sunrise light, authentic documentary style, warm and lively atmosphere",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A small rural Vietnamese morning market, baskets of vegetables, fresh herbs, fish, and flowers, vendors chatting under old umbrellas, soft sunrise light, authentic documentary style, warm and lively atmosphere --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Làng Quê & Thiên Nhiên Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Làng Quê & Thiên Nhiên Việt Nam"
  },
  {
    "id": "vn-17-dong-song-que",
    "name": "17. Dong song que (Làng Quê & Thiên Nhiên Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Làng Quê & Thiên Nhiên Việt Nam]: A quiet river in the Vietnamese countryside, wooden boat drifting slowly, coconut trees along the bank, golden light on the water, a fisherman casting a net, peaceful cinematic composition, realistic reflections",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A quiet river in the Vietnamese countryside, wooden boat drifting slowly, coconut trees along the bank, golden light on the water, a fisherman casting a net, peaceful cinematic composition, realistic reflections --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Làng Quê & Thiên Nhiên Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Làng Quê & Thiên Nhiên Việt Nam"
  },
  {
    "id": "vn-18-san-nha-co-hong-nang",
    "name": "18. San nha co hong nang (Làng Quê & Thiên Nhiên Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Làng Quê & Thiên Nhiên Việt Nam]: A traditional Vietnamese house courtyard at noon, red tiled roof, clay water jars, areca trees, sunlight creating sharp shadows on the brick floor, calm nostalgic mood, realistic architectural photography",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A traditional Vietnamese house courtyard at noon, red tiled roof, clay water jars, areca trees, sunlight creating sharp shadows on the brick floor, calm nostalgic mood, realistic architectural photography --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Làng Quê & Thiên Nhiên Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Làng Quê & Thiên Nhiên Việt Nam"
  },
  {
    "id": "vn-19-trau-va-tre-nho",
    "name": "19. Trau va tre nho (Làng Quê & Thiên Nhiên Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Làng Quê & Thiên Nhiên Việt Nam]: A Vietnamese child walking beside a buffalo on a muddy field path, distant mountains, soft cloudy sky, natural rural colors, emotional documentary photography, gentle cinematic framing",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese child walking beside a buffalo on a muddy field path, distant mountains, soft cloudy sky, natural rural colors, emotional documentary photography, gentle cinematic framing --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Làng Quê & Thiên Nhiên Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Làng Quê & Thiên Nhiên Việt Nam"
  },
  {
    "id": "vn-20-mua-vang-tay-bac",
    "name": "20. Mua vang Tay Bac (Làng Quê & Thiên Nhiên Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Làng Quê & Thiên Nhiên Việt Nam]: Terraced rice fields in northwest Vietnam during golden season, small villages on the mountainside, clouds touching the peaks, farmers walking along narrow paths, epic cinematic landscape, warm sunlight, ultra-detailed realism",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Terraced rice fields in northwest Vietnam during golden season, small villages on the mountainside, clouds touching the peaks, farmers walking along narrow paths, epic cinematic landscape, warm sunlight, ultra-detailed realism --ar 21:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Làng Quê & Thiên Nhiên Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Làng Quê & Thiên Nhiên Việt Nam"
  },
  {
    "id": "vn-21-pho-bo-sang-som",
    "name": "21. Pho bo sang som (Ẩm Thực Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ẩm Thực Việt Nam]: A steaming bowl of Vietnamese beef pho on a wooden table, fresh herbs, lime, chili, chopsticks, morning light from a street stall, rich broth texture, cinematic food photography, shallow depth of field, appetizing realism",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A steaming bowl of Vietnamese beef pho on a wooden table, fresh herbs, lime, chili, chopsticks, morning light from a street stall, rich broth texture, cinematic food photography, shallow depth of field, appetizing realism --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ẩm Thực Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ẩm Thực Việt Nam"
  },
  {
    "id": "vn-22-banh-mi-via-he",
    "name": "22. Banh mi via he (Ẩm Thực Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ẩm Thực Việt Nam]: A crispy Vietnamese banh mi being prepared at a sidewalk cart, grilled pork, pickled vegetables, fresh cilantro, golden bread crust, hands assembling the sandwich naturally, warm street light, editorial food photography",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A crispy Vietnamese banh mi being prepared at a sidewalk cart, grilled pork, pickled vegetables, fresh cilantro, golden bread crust, hands assembling the sandwich naturally, warm street light, editorial food photography --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ẩm Thực Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ẩm Thực Việt Nam"
  },
  {
    "id": "vn-23-bun-cha-ha-noi",
    "name": "23. Bun cha Ha Noi (Ẩm Thực Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ẩm Thực Việt Nam]: Vietnamese bun cha served on a small metal table in Hanoi, smoky grilled pork, dipping sauce, fresh herbs, vermicelli noodles, charcoal smoke in the background, authentic street food photography, cinematic close-up",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Vietnamese bun cha served on a small metal table in Hanoi, smoky grilled pork, dipping sauce, fresh herbs, vermicelli noodles, charcoal smoke in the background, authentic street food photography, cinematic close-up --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ẩm Thực Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ẩm Thực Việt Nam"
  },
  {
    "id": "vn-24-goi-cuon-tuoi-mat",
    "name": "24. Goi cuon tuoi mat (Ẩm Thực Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ẩm Thực Việt Nam]: Fresh Vietnamese spring rolls on a ceramic plate, shrimp, herbs, rice paper texture, peanut sauce in a small bowl, clean natural daylight, minimal composition, fresh healthy food photography, crisp details",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Fresh Vietnamese spring rolls on a ceramic plate, shrimp, herbs, rice paper texture, peanut sauce in a small bowl, clean natural daylight, minimal composition, fresh healthy food photography, crisp details --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ẩm Thực Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ẩm Thực Việt Nam"
  },
  {
    "id": "vn-25-com-tam-sai-gon",
    "name": "25. Com tam Sai Gon (Ẩm Thực Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ẩm Thực Việt Nam]: A plate of Saigon broken rice with grilled pork chop, egg, pickled vegetables, fish sauce, and scallion oil, placed on a stainless steel table, lunchtime street food mood, realistic cinematic food shot",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A plate of Saigon broken rice with grilled pork chop, egg, pickled vegetables, fish sauce, and scallion oil, placed on a stainless steel table, lunchtime street food mood, realistic cinematic food shot --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ẩm Thực Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ẩm Thực Việt Nam"
  },
  {
    "id": "vn-26-che-ba-mau-mua-he",
    "name": "26. Che ba mau mua he (Ẩm Thực Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ẩm Thực Việt Nam]: A colorful glass of Vietnamese three-color dessert, crushed ice, coconut milk, jelly, mung bean, red beans, condensation on the glass, summer afternoon light, playful food photography, vibrant but natural colors",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A colorful glass of Vietnamese three-color dessert, crushed ice, coconut milk, jelly, mung bean, red beans, condensation on the glass, summer afternoon light, playful food photography, vibrant but natural colors --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ẩm Thực Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ẩm Thực Việt Nam"
  },
  {
    "id": "vn-27-ca-phe-sua-da",
    "name": "27. Ca phe sua da (Ẩm Thực Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ẩm Thực Việt Nam]: Vietnamese iced milk coffee in a glass with melting ice, condensed milk layers, stainless steel phin filter beside it, sunlight on a cafe table, refreshing cinematic product photography, crisp highlights",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Vietnamese iced milk coffee in a glass with melting ice, condensed milk layers, stainless steel phin filter beside it, sunlight on a cafe table, refreshing cinematic product photography, crisp highlights --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ẩm Thực Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ẩm Thực Việt Nam"
  },
  {
    "id": "vn-28-mam-com-gia-dinh",
    "name": "28. Mam com gia dinh (Ẩm Thực Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ẩm Thực Việt Nam]: A warm Vietnamese family dinner table with rice, canh chua, ca kho to, stir-fried morning glory, small bowls and chopsticks, hands reaching for food, cozy home lighting, authentic lifestyle food photography",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A warm Vietnamese family dinner table with rice, canh chua, ca kho to, stir-fried morning glory, small bowls and chopsticks, hands reaching for food, cozy home lighting, authentic lifestyle food photography --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ẩm Thực Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ẩm Thực Việt Nam"
  },
  {
    "id": "vn-29-banh-xeo-mien-tay",
    "name": "29. Banh xeo mien Tay (Ẩm Thực Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ẩm Thực Việt Nam]: A crispy Vietnamese banh xeo sizzling in a hot pan, turmeric-yellow crepe, shrimp and bean sprouts visible, fresh herbs on the side, steam and oil sparkle, dynamic cinematic food photography",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A crispy Vietnamese banh xeo sizzling in a hot pan, turmeric-yellow crepe, shrimp and bean sprouts visible, fresh herbs on the side, steam and oil sparkle, dynamic cinematic food photography --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ẩm Thực Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ẩm Thực Việt Nam"
  },
  {
    "id": "vn-30-hang-oc-dem",
    "name": "30. Hang oc dem (Ẩm Thực Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ẩm Thực Việt Nam]: A lively Vietnamese street snail restaurant at night, small plastic tables, plates of spicy seafood, beer glasses, warm bulbs, friends laughing, cinematic social food scene, realistic street atmosphere",
    "category": "vietnam",
    "difficulty": "Basic",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A lively Vietnamese street snail restaurant at night, small plastic tables, plates of spicy seafood, beer glasses, warm bulbs, friends laughing, cinematic social food scene, realistic street atmosphere --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ẩm Thực Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ẩm Thực Việt Nam"
  },
  {
    "id": "vn-31-cho-hoa-tet",
    "name": "31. Cho hoa Tet (Tết & Lễ Hội)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Tết & Lễ Hội]: A Vietnamese Tet flower market filled with yellow apricot blossoms and peach blossoms, families choosing flowers, red decorations, warm afternoon sunlight, joyful cinematic street photography, vibrant festive colors",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese Tet flower market filled with yellow apricot blossoms and peach blossoms, families choosing flowers, red decorations, warm afternoon sunlight, joyful cinematic street photography, vibrant festive colors --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Tết & Lễ Hội). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Tết & Lễ Hội"
  },
  {
    "id": "vn-32-goi-banh-chung",
    "name": "32. Goi banh chung (Tết & Lễ Hội)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Tết & Lễ Hội]: A Vietnamese family wrapping banh chung before Tet, banana leaves, sticky rice, mung beans, pork, hands working together on a wooden table, warm home lighting, emotional documentary photography",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese family wrapping banh chung before Tet, banana leaves, sticky rice, mung beans, pork, hands working together on a wooden table, warm home lighting, emotional documentary photography --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Tết & Lễ Hội). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Tết & Lễ Hội"
  },
  {
    "id": "vn-33-dem-giao-thua",
    "name": "33. Dem giao thua (Tết & Lễ Hội)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Tết & Lễ Hội]: Vietnamese Lunar New Year's Eve on a city street, fireworks reflecting in people's eyes, red lanterns, families standing together, cinematic night photography, emotional atmosphere, realistic crowd details",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Vietnamese Lunar New Year's Eve on a city street, fireworks reflecting in people's eyes, red lanterns, families standing together, cinematic night photography, emotional atmosphere, realistic crowd details --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Tết & Lễ Hội). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Tết & Lễ Hội"
  },
  {
    "id": "vn-34-mung-tuoi-dau-nam",
    "name": "34. Mung tuoi dau nam (Tết & Lễ Hội)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Tết & Lễ Hội]: A Vietnamese child in traditional clothes receiving a red lucky envelope from grandparents, warm living room, peach blossom branches in the background, intimate family moment, soft cinematic lighting",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese child in traditional clothes receiving a red lucky envelope from grandparents, warm living room, peach blossom branches in the background, intimate family moment, soft cinematic lighting --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Tết & Lễ Hội). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Tết & Lễ Hội"
  },
  {
    "id": "vn-35-mam-ngu-qua",
    "name": "35. Mam ngu qua (Tết & Lễ Hội)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Tết & Lễ Hội]: A beautiful Vietnamese Tet fruit tray on a wooden altar table, incense smoke, yellow flowers, red envelopes, warm candlelight, respectful cultural still life photography, cinematic detail",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A beautiful Vietnamese Tet fruit tray on a wooden altar table, incense smoke, yellow flowers, red envelopes, warm candlelight, respectful cultural still life photography, cinematic detail --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Tết & Lễ Hội). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Tết & Lễ Hội"
  },
  {
    "id": "vn-36-ao-dai-ngay-tet",
    "name": "36. Ao dai ngay Tet (Tết & Lễ Hội)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Tết & Lễ Hội]: A young Vietnamese woman wearing a red ao dai walking through a Tet flower street, yellow apricot blossoms around her, soft sunlight, elegant cinematic portrait, natural smile, graceful movement",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A young Vietnamese woman wearing a red ao dai walking through a Tet flower street, yellow apricot blossoms around her, soft sunlight, elegant cinematic portrait, natural smile, graceful movement --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Tết & Lễ Hội). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Tết & Lễ Hội"
  },
  {
    "id": "vn-37-pho-vang-sang-mung-mot",
    "name": "37. Pho vang sang mung mot (Tết & Lễ Hội)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Tết & Lễ Hội]: A quiet Vietnamese street on the first morning of Tet, closed shopfronts, red decorations, soft empty-road atmosphere, golden sunlight, peaceful cinematic urban landscape, nostalgic mood",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A quiet Vietnamese street on the first morning of Tet, closed shopfronts, red decorations, soft empty-road atmosphere, golden sunlight, peaceful cinematic urban landscape, nostalgic mood --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Tết & Lễ Hội). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Tết & Lễ Hội"
  },
  {
    "id": "vn-38-tet-o-mien-tay",
    "name": "38. Tet o mien Tay (Tết & Lễ Hội)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Tết & Lễ Hội]: A Mekong Delta family celebrating Tet beside a river house, yellow flowers, coconut trees, wooden boat, children wearing new clothes, warm tropical sunlight, joyful documentary photography",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Mekong Delta family celebrating Tet beside a river house, yellow flowers, coconut trees, wooden boat, children wearing new clothes, warm tropical sunlight, joyful documentary photography --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Tết & Lễ Hội). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Tết & Lễ Hội"
  },
  {
    "id": "vn-39-lam-mut-tet",
    "name": "39. Lam mut Tet (Tết & Lễ Hội)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Tết & Lễ Hội]: Vietnamese homemade candied fruits being prepared for Tet, colorful ginger, coconut, kumquat, glass jars, hands arranging sweets, warm kitchen light, cozy editorial food photography",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Vietnamese homemade candied fruits being prepared for Tet, colorful ginger, coconut, kumquat, glass jars, hands arranging sweets, warm kitchen light, cozy editorial food photography --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Tết & Lễ Hội). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Tết & Lễ Hội"
  },
  {
    "id": "vn-40-le-hoi-long-den",
    "name": "40. Le hoi long den (Tết & Lễ Hội)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Tết & Lễ Hội]: A Vietnamese lantern festival at night, children holding colorful lanterns, old town streets glowing warmly, reflections on wet stone pavement, magical cinematic atmosphere, realistic faces and lights",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese lantern festival at night, children holding colorful lanterns, old town streets glowing warmly, reflections on wet stone pavement, magical cinematic atmosphere, realistic faces and lights --ar 9:16",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Tết & Lễ Hội). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Tết & Lễ Hội"
  },
  {
    "id": "vn-41-ao-dai-trang-nu-sinh",
    "name": "41. Ao dai trang nu sinh (Áo Dài & Thời Trang Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Áo Dài & Thời Trang Việt Nam]: Vietnamese high school students wearing white ao dai, cycling under a row of old trees, soft morning light, gentle breeze, clean elegant composition, nostalgic youth photography, cinematic realism",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Vietnamese high school students wearing white ao dai, cycling under a row of old trees, soft morning light, gentle breeze, clean elegant composition, nostalgic youth photography, cinematic realism --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Áo Dài & Thời Trang Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Áo Dài & Thời Trang Việt Nam"
  },
  {
    "id": "vn-42-ao-dai-ben-ho-sen",
    "name": "42. Ao dai ben ho sen (Áo Dài & Thời Trang Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Áo Dài & Thời Trang Việt Nam]: A Vietnamese woman wearing a pastel ao dai beside a lotus pond, soft dawn mist, lotus flowers and green leaves, graceful pose, poetic portrait photography, natural skin tones, cinematic soft light",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese woman wearing a pastel ao dai beside a lotus pond, soft dawn mist, lotus flowers and green leaves, graceful pose, poetic portrait photography, natural skin tones, cinematic soft light --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Áo Dài & Thời Trang Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Áo Dài & Thời Trang Việt Nam"
  },
  {
    "id": "vn-43-ao-dai-cach-tan-thanh-thi",
    "name": "43. Ao dai cach tan thanh thi (Áo Dài & Thời Trang Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Áo Dài & Thời Trang Việt Nam]: A modern Vietnamese woman wearing a contemporary ao dai in a minimalist cafe, warm wood interior, soft daylight, confident expression, editorial fashion photography, elegant and approachable",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A modern Vietnamese woman wearing a contemporary ao dai in a minimalist cafe, warm wood interior, soft daylight, confident expression, editorial fashion photography, elegant and approachable --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Áo Dài & Thời Trang Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Áo Dài & Thời Trang Việt Nam"
  },
  {
    "id": "vn-44-ao-dai-trong-pho-co",
    "name": "44. Ao dai trong pho co (Áo Dài & Thời Trang Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Áo Dài & Thời Trang Việt Nam]: A Vietnamese woman in a deep blue ao dai walking through Hanoi Old Quarter, old yellow walls, wooden shutters, bicycle with flowers, cinematic street fashion portrait, warm autumn light",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese woman in a deep blue ao dai walking through Hanoi Old Quarter, old yellow walls, wooden shutters, bicycle with flowers, cinematic street fashion portrait, warm autumn light --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Áo Dài & Thời Trang Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Áo Dài & Thời Trang Việt Nam"
  },
  {
    "id": "vn-45-ao-dai-cuoi",
    "name": "45. Ao dai cuoi (Áo Dài & Thời Trang Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Áo Dài & Thời Trang Việt Nam]: A Vietnamese bride wearing a traditional red wedding ao dai with subtle gold embroidery, standing in a family courtyard, soft lantern light, elegant cultural wedding photography, emotional realism",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese bride wearing a traditional red wedding ao dai with subtle gold embroidery, standing in a family courtyard, soft lantern light, elegant cultural wedding photography, emotional realism --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Áo Dài & Thời Trang Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Áo Dài & Thời Trang Việt Nam"
  },
  {
    "id": "vn-46-thoi-trang-tre-sai-gon",
    "name": "46. Thoi trang tre Sai Gon (Áo Dài & Thời Trang Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Áo Dài & Thời Trang Việt Nam]: Young Vietnamese creatives in stylish casual outfits sitting outside a Saigon cafe, motorbikes and street plants around them, golden hour light, modern lifestyle editorial photography, relaxed confidence",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Young Vietnamese creatives in stylish casual outfits sitting outside a Saigon cafe, motorbikes and street plants around them, golden hour light, modern lifestyle editorial photography, relaxed confidence --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Áo Dài & Thời Trang Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Áo Dài & Thời Trang Việt Nam"
  },
  {
    "id": "vn-47-ao-ba-ba-mien-tay",
    "name": "47. Ao ba ba mien Tay (Áo Dài & Thời Trang Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Áo Dài & Thời Trang Việt Nam]: A Vietnamese woman wearing ao ba ba on a wooden boat in the Mekong Delta, water coconut trees, floating market atmosphere, natural smile, warm morning light, authentic lifestyle portrait",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese woman wearing ao ba ba on a wooden boat in the Mekong Delta, water coconut trees, floating market atmosphere, natural smile, warm morning light, authentic lifestyle portrait --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Áo Dài & Thời Trang Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Áo Dài & Thời Trang Việt Nam"
  },
  {
    "id": "vn-48-non-la-va-anh-nang",
    "name": "48. Non la va anh nang (Áo Dài & Thời Trang Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Áo Dài & Thời Trang Việt Nam]: A close-up portrait of a Vietnamese woman holding a conical hat, sunlight casting delicate patterns on her face, simple background, soft cinematic light, elegant beauty photography, natural texture",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A close-up portrait of a Vietnamese woman holding a conical hat, sunlight casting delicate patterns on her face, simple background, soft cinematic light, elegant beauty photography, natural texture --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Áo Dài & Thời Trang Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Áo Dài & Thời Trang Việt Nam"
  },
  {
    "id": "vn-49-fashion-tren-cau-thang-cu",
    "name": "49. Fashion tren cau thang cu (Áo Dài & Thời Trang Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Áo Dài & Thời Trang Việt Nam]: A Vietnamese fashion portrait on the staircase of an old apartment building, patterned tiles, peeling pastel walls, modern outfit mixed with vintage setting, editorial lighting, cinematic urban style",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese fashion portrait on the staircase of an old apartment building, patterned tiles, peeling pastel walls, modern outfit mixed with vintage setting, editorial lighting, cinematic urban style --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Áo Dài & Thời Trang Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Áo Dài & Thời Trang Việt Nam"
  },
  {
    "id": "vn-50-ao-dai-lua-trong-gio",
    "name": "50. Ao dai lua trong gio (Áo Dài & Thời Trang Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Áo Dài & Thời Trang Việt Nam]: A flowing silk ao dai moving in the wind on a coastal road in Vietnam, ocean behind, sunrise light, graceful full-body fashion shot, cinematic motion, elegant minimal composition",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A flowing silk ao dai moving in the wind on a coastal road in Vietnam, ocean behind, sunrise light, graceful full-body fashion shot, cinematic motion, elegant minimal composition --ar 9:16",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Áo Dài & Thời Trang Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Áo Dài & Thời Trang Việt Nam"
  },
  {
    "id": "vn-51-ha-long-binh-minh",
    "name": "51. Ha Long binh minh (Du Lịch Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Du Lịch Việt Nam]: Ha Long Bay at sunrise, limestone karsts rising from calm water, a small wooden boat in the foreground, soft orange mist, cinematic travel photography, epic wide angle, realistic natural light",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Ha Long Bay at sunrise, limestone karsts rising from calm water, a small wooden boat in the foreground, soft orange mist, cinematic travel photography, epic wide angle, realistic natural light --ar 21:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Du Lịch Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Du Lịch Việt Nam"
  },
  {
    "id": "vn-52-hoi-an-dem-den-long",
    "name": "52. Hoi An dem den long (Du Lịch Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Du Lịch Việt Nam]: Hoi An ancient town at night, colorful lanterns glowing over the river, wooden boats, warm reflections on water, people walking slowly, romantic cinematic travel photography, rich atmosphere",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Hoi An ancient town at night, colorful lanterns glowing over the river, wooden boats, warm reflections on water, people walking slowly, romantic cinematic travel photography, rich atmosphere --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Du Lịch Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Du Lịch Việt Nam"
  },
  {
    "id": "vn-53-da-lat-som-suong",
    "name": "53. Da Lat som suong (Du Lịch Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Du Lịch Việt Nam]: Da Lat pine forest in early morning fog, a small coffee cart beside a quiet road, cool blue atmosphere, soft sunlight breaking through trees, cinematic travel mood, peaceful realism",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Da Lat pine forest in early morning fog, a small coffee cart beside a quiet road, cool blue atmosphere, soft sunlight breaking through trees, cinematic travel mood, peaceful realism --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Du Lịch Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Du Lịch Việt Nam"
  },
  {
    "id": "vn-54-sa-pa-mua-may",
    "name": "54. Sa Pa mua may (Du Lịch Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Du Lịch Việt Nam]: Sa Pa mountain village above a sea of clouds, terraced fields, traditional stilt houses, morning light on distant peaks, cinematic landscape photography, dramatic depth, realistic details",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Sa Pa mountain village above a sea of clouds, terraced fields, traditional stilt houses, morning light on distant peaks, cinematic landscape photography, dramatic depth, realistic details --ar 21:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Du Lịch Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Du Lịch Việt Nam"
  },
  {
    "id": "vn-55-ninh-binh-song-nui",
    "name": "55. Ninh Binh song nui (Du Lịch Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Du Lịch Việt Nam]: Ninh Binh river landscape, a sampan boat moving between limestone mountains, green rice fields, reflections on calm water, soft cloudy sky, cinematic Vietnamese travel photography",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Ninh Binh river landscape, a sampan boat moving between limestone mountains, green rice fields, reflections on calm water, soft cloudy sky, cinematic Vietnamese travel photography --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Du Lịch Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Du Lịch Việt Nam"
  },
  {
    "id": "vn-56-phu-quoc-hoang-hon",
    "name": "56. Phu Quoc hoang hon (Du Lịch Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Du Lịch Việt Nam]: Phu Quoc beach at sunset, fishing boats on the horizon, golden water, a simple seafood table on the sand, tropical calm mood, cinematic travel lifestyle photography, warm colors",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Phu Quoc beach at sunset, fishing boats on the horizon, golden water, a simple seafood table on the sand, tropical calm mood, cinematic travel lifestyle photography, warm colors --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Du Lịch Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Du Lịch Việt Nam"
  },
  {
    "id": "vn-57-hue-mua-nhe",
    "name": "57. Hue mua nhe (Du Lịch Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Du Lịch Việt Nam]: Hue imperial city under gentle rain, old stone walls, lotus pond, woman with umbrella walking past ancient gates, muted colors, poetic cinematic travel photography, soft reflections",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Hue imperial city under gentle rain, old stone walls, lotus pond, woman with umbrella walking past ancient gates, muted colors, poetic cinematic travel photography, soft reflections --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Du Lịch Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Du Lịch Việt Nam"
  },
  {
    "id": "vn-58-da-nang-cau-rong",
    "name": "58. Da Nang cau Rong (Du Lịch Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Du Lịch Việt Nam]: Da Nang Dragon Bridge at blue hour, river reflections, modern skyline, motorbike trails, vibrant but clean cityscape photography, cinematic long exposure mood, realistic lighting",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Da Nang Dragon Bridge at blue hour, river reflections, modern skyline, motorbike trails, vibrant but clean cityscape photography, cinematic long exposure mood, realistic lighting --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Du Lịch Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Du Lịch Việt Nam"
  },
  {
    "id": "vn-59-mui-ne-doi-cat",
    "name": "59. Mui Ne doi cat (Du Lịch Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Du Lịch Việt Nam]: Mui Ne sand dunes at sunrise, soft wind patterns on the sand, a traveler walking alone, distant fishing village, cinematic desert-like Vietnamese landscape, warm minimal composition",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Mui Ne sand dunes at sunrise, soft wind patterns on the sand, a traveler walking alone, distant fishing village, cinematic desert-like Vietnamese landscape, warm minimal composition --ar 21:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Du Lịch Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Du Lịch Việt Nam"
  },
  {
    "id": "vn-60-cao-bang-thac-nuoc",
    "name": "60. Cao Bang thac nuoc (Du Lịch Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Du Lịch Việt Nam]: Ban Gioc waterfall in Cao Bang, turquoise water, limestone cliffs, mist rising, local bamboo rafts, lush green scenery, epic cinematic nature photography, ultra-realistic details",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Ban Gioc waterfall in Cao Bang, turquoise water, limestone cliffs, mist rising, local bamboo rafts, lush green scenery, epic cinematic nature photography, ultra-realistic details --ar 21:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Du Lịch Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Du Lịch Việt Nam"
  },
  {
    "id": "vn-61-bua-sang-gia-dinh",
    "name": "61. Bua sang gia dinh (Gia Đình & Đời Sống Gần Gũi)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Gia Đình & Đời Sống Gần Gũi]: A Vietnamese family having breakfast together at home, bowls of pho and cups of coffee, morning light through curtains, casual clothes, warm genuine expressions, cozy lifestyle photography",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese family having breakfast together at home, bowls of pho and cups of coffee, morning light through curtains, casual clothes, warm genuine expressions, cozy lifestyle photography --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Gia Đình & Đời Sống Gần Gũi). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Gia Đình & Đời Sống Gần Gũi"
  },
  {
    "id": "vn-62-ba-va-chau",
    "name": "62. Ba va chau (Gia Đình & Đời Sống Gần Gũi)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Gia Đình & Đời Sống Gần Gũi]: A Vietnamese grandmother teaching her grandchild how to fold paper boats, wooden table, old family photos on the wall, warm afternoon light, emotional intimate portrait, cinematic realism",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese grandmother teaching her grandchild how to fold paper boats, wooden table, old family photos on the wall, warm afternoon light, emotional intimate portrait, cinematic realism --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Gia Đình & Đời Sống Gần Gũi). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Gia Đình & Đời Sống Gần Gũi"
  },
  {
    "id": "vn-63-me-don-con-tan-truong",
    "name": "63. Me don con tan truong (Gia Đình & Đời Sống Gần Gũi)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Gia Đình & Đời Sống Gần Gũi]: A Vietnamese mother picking up her child from school, white uniforms, motorbikes waiting outside the school gate, soft late-afternoon light, everyday emotional documentary photography",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese mother picking up her child from school, white uniforms, motorbikes waiting outside the school gate, soft late-afternoon light, everyday emotional documentary photography --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Gia Đình & Đời Sống Gần Gũi). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Gia Đình & Đời Sống Gần Gũi"
  },
  {
    "id": "vn-64-gia-dinh-di-sieu-thi",
    "name": "64. Gia dinh di sieu thi (Gia Đình & Đời Sống Gần Gũi)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Gia Đình & Đời Sống Gần Gũi]: A young Vietnamese family shopping at a local supermarket, child sitting in a cart, colorful fresh produce, bright clean lighting, realistic lifestyle commercial photography, friendly and modern",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A young Vietnamese family shopping at a local supermarket, child sitting in a cart, colorful fresh produce, bright clean lighting, realistic lifestyle commercial photography, friendly and modern --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Gia Đình & Đời Sống Gần Gũi). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Gia Đình & Đời Sống Gần Gũi"
  },
  {
    "id": "vn-65-ba-nau-com",
    "name": "65. Ba nau com (Gia Đình & Đời Sống Gần Gũi)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Gia Đình & Đời Sống Gần Gũi]: A Vietnamese father cooking dinner in a small apartment kitchen, daughter helping wash vegetables, warm practical lighting, casual family moment, authentic modern lifestyle photography",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese father cooking dinner in a small apartment kitchen, daughter helping wash vegetables, warm practical lighting, casual family moment, authentic modern lifestyle photography --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Gia Đình & Đời Sống Gần Gũi). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Gia Đình & Đời Sống Gần Gũi"
  },
  {
    "id": "vn-66-ngay-chu-nhat-o-nha",
    "name": "66. Ngay chu nhat o nha (Gia Đình & Đời Sống Gần Gũi)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Gia Đình & Đời Sống Gần Gũi]: A peaceful Sunday morning in a Vietnamese apartment, family plants on balcony, sunlight on tiled floor, someone reading, someone making coffee, calm lifestyle photography, soft cinematic mood",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A peaceful Sunday morning in a Vietnamese apartment, family plants on balcony, sunlight on tiled floor, someone reading, someone making coffee, calm lifestyle photography, soft cinematic mood --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Gia Đình & Đời Sống Gần Gũi). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Gia Đình & Đời Sống Gần Gũi"
  },
  {
    "id": "vn-67-con-hoc-bai",
    "name": "67. Con hoc bai (Gia Đình & Đời Sống Gần Gũi)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Gia Đình & Đời Sống Gần Gũi]: A Vietnamese child studying at a wooden desk, school books, pencil case, warm desk lamp, mother quietly bringing a glass of milk, emotional education-themed photography, realistic home setting",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese child studying at a wooden desk, school books, pencil case, warm desk lamp, mother quietly bringing a glass of milk, emotional education-themed photography, realistic home setting --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Gia Đình & Đời Sống Gần Gũi). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Gia Đình & Đời Sống Gần Gũi"
  },
  {
    "id": "vn-68-chup-anh-gia-dinh-tet",
    "name": "68. Chup anh gia dinh Tet (Gia Đình & Đời Sống Gần Gũi)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Gia Đình & Đời Sống Gần Gũi]: A Vietnamese extended family taking a Tet family portrait in the living room, grandparents in the center, children in colorful clothes, flowers and red decorations, warm happy atmosphere",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese extended family taking a Tet family portrait in the living room, grandparents in the center, children in colorful clothes, flowers and red decorations, warm happy atmosphere --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Gia Đình & Đời Sống Gần Gũi). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Gia Đình & Đời Sống Gần Gũi"
  },
  {
    "id": "vn-69-ong-sua-xe-dap",
    "name": "69. Ong sua xe dap (Gia Đình & Đời Sống Gần Gũi)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Gia Đình & Đời Sống Gần Gũi]: An elderly Vietnamese man repairing a bicycle in front of a small house, tools on the ground, neighborhood kids watching, warm afternoon light, humble everyday documentary photography",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "An elderly Vietnamese man repairing a bicycle in front of a small house, tools on the ground, neighborhood kids watching, warm afternoon light, humble everyday documentary photography --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Gia Đình & Đời Sống Gần Gũi). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Gia Đình & Đời Sống Gần Gũi"
  },
  {
    "id": "vn-70-chuyen-xe-ve-que",
    "name": "70. Chuyen xe ve que (Gia Đình & Đời Sống Gần Gũi)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Gia Đình & Đời Sống Gần Gũi]: A Vietnamese family traveling back to their hometown, seen through a train window, rice fields passing outside, soft evening light, quiet emotional travel photography, cinematic reflection",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese family traveling back to their hometown, seen through a train window, rice fields passing outside, soft evening light, quiet emotional travel photography, cinematic reflection --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Gia Đình & Đời Sống Gần Gũi). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Gia Đình & Đời Sống Gần Gũi"
  },
  {
    "id": "vn-71-ca-phe-rang-xay-viet-nam",
    "name": "71. Ca phe rang xay Viet Nam (Sản Phẩm & Thương Mại Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Sản Phẩm & Thương Mại Việt Nam]: A premium Vietnamese coffee brand photoshoot, roasted coffee beans, phin filter, ceramic cup, dark wooden table, soft morning steam, warm brown tones, elegant product photography, crisp commercial lighting",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A premium Vietnamese coffee brand photoshoot, roasted coffee beans, phin filter, ceramic cup, dark wooden table, soft morning steam, warm brown tones, elegant product photography, crisp commercial lighting --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Sản Phẩm & Thương Mại Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Sản Phẩm & Thương Mại Việt Nam"
  },
  {
    "id": "vn-72-nuoc-mam-cao-cap",
    "name": "72. Nuoc mam cao cap (Sản Phẩm & Thương Mại Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Sản Phẩm & Thương Mại Việt Nam]: A premium Vietnamese fish sauce bottle on a rustic wooden table, amber liquid glowing in backlight, sea salt, anchovies, ceramic bowl, coastal mood, luxury food product photography, clean composition",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A premium Vietnamese fish sauce bottle on a rustic wooden table, amber liquid glowing in backlight, sea salt, anchovies, ceramic bowl, coastal mood, luxury food product photography, clean composition --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Sản Phẩm & Thương Mại Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Sản Phẩm & Thương Mại Việt Nam"
  },
  {
    "id": "vn-73-tra-thao-moc",
    "name": "73. Tra thao moc (Sản Phẩm & Thương Mại Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Sản Phẩm & Thương Mại Việt Nam]: Vietnamese herbal tea product photography, glass teapot, lemongrass, ginger, lotus seeds, dried herbs, warm sunlight, wellness lifestyle mood, clean natural commercial image",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Vietnamese herbal tea product photography, glass teapot, lemongrass, ginger, lotus seeds, dried herbs, warm sunlight, wellness lifestyle mood, clean natural commercial image --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Sản Phẩm & Thương Mại Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Sản Phẩm & Thương Mại Việt Nam"
  },
  {
    "id": "vn-74-my-pham-thien-nhien",
    "name": "74. My pham thien nhien (Sản Phẩm & Thương Mại Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Sản Phẩm & Thương Mại Việt Nam]: A Vietnamese natural skincare product surrounded by lotus petals, rice grains, green tea leaves, soft water reflections, minimal premium beauty photography, fresh clean lighting, elegant composition",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese natural skincare product surrounded by lotus petals, rice grains, green tea leaves, soft water reflections, minimal premium beauty photography, fresh clean lighting, elegant composition --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Sản Phẩm & Thương Mại Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Sản Phẩm & Thương Mại Việt Nam"
  },
  {
    "id": "vn-75-ao-dai-brand-campaign",
    "name": "75. Ao dai brand campaign (Sản Phẩm & Thương Mại Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Sản Phẩm & Thương Mại Việt Nam]: A Vietnamese ao dai fashion campaign, model standing in an old courtyard with red tiles and yellow walls, silk fabric texture visible, elegant pose, premium editorial lighting, modern heritage mood",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese ao dai fashion campaign, model standing in an old courtyard with red tiles and yellow walls, silk fabric texture visible, elegant pose, premium editorial lighting, modern heritage mood --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Sản Phẩm & Thương Mại Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Sản Phẩm & Thương Mại Việt Nam"
  },
  {
    "id": "vn-76-quan-ca-phe-local",
    "name": "76. Quan ca phe local (Sản Phẩm & Thương Mại Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Sản Phẩm & Thương Mại Việt Nam]: A branding image for a cozy Vietnamese local coffee shop, wooden counter, phin coffee, handwritten menu board without readable text, plants, warm afternoon light, friendly lifestyle commercial photography",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A branding image for a cozy Vietnamese local coffee shop, wooden counter, phin coffee, handwritten menu board without readable text, plants, warm afternoon light, friendly lifestyle commercial photography --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Sản Phẩm & Thương Mại Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Sản Phẩm & Thương Mại Việt Nam"
  },
  {
    "id": "vn-77-banh-trung-thu-handmade",
    "name": "77. Banh trung thu handmade (Sản Phẩm & Thương Mại Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Sản Phẩm & Thương Mại Việt Nam]: Handmade Vietnamese mooncakes arranged on ceramic plates, tea set, lotus flowers, warm autumn light, refined festive product photography, detailed pastry texture, premium but familiar mood",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Handmade Vietnamese mooncakes arranged on ceramic plates, tea set, lotus flowers, warm autumn light, refined festive product photography, detailed pastry texture, premium but familiar mood --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Sản Phẩm & Thương Mại Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Sản Phẩm & Thương Mại Việt Nam"
  },
  {
    "id": "vn-78-trai-cay-nhiet-doi",
    "name": "78. Trai cay nhiet doi (Sản Phẩm & Thương Mại Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Sản Phẩm & Thương Mại Việt Nam]: A vibrant Vietnamese tropical fruit basket with mango, dragon fruit, rambutan, lychee, and longan, placed on woven bamboo mat, fresh morning light, colorful commercial still life photography",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A vibrant Vietnamese tropical fruit basket with mango, dragon fruit, rambutan, lychee, and longan, placed on woven bamboo mat, fresh morning light, colorful commercial still life photography --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Sản Phẩm & Thương Mại Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Sản Phẩm & Thương Mại Việt Nam"
  },
  {
    "id": "vn-79-du-lich-homestay",
    "name": "79. Du lich homestay (Sản Phẩm & Thương Mại Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Sản Phẩm & Thương Mại Việt Nam]: A Vietnamese countryside homestay promotional image, wooden house, rice fields, bicycle at the gate, warm lanterns at dusk, inviting travel lifestyle photography, cozy and authentic",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese countryside homestay promotional image, wooden house, rice fields, bicycle at the gate, warm lanterns at dusk, inviting travel lifestyle photography, cozy and authentic --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Sản Phẩm & Thương Mại Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Sản Phẩm & Thương Mại Việt Nam"
  },
  {
    "id": "vn-80-quan-an-gia-dinh",
    "name": "80. Quan an gia dinh (Sản Phẩm & Thương Mại Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Sản Phẩm & Thương Mại Việt Nam]: A warm restaurant branding photo for a Vietnamese family eatery, steaming dishes on a shared table, wooden furniture, friendly staff in simple uniforms, golden interior light, appetizing lifestyle photography",
    "category": "vietnam",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A warm restaurant branding photo for a Vietnamese family eatery, steaming dishes on a shared table, wooden furniture, friendly staff in simple uniforms, golden interior light, appetizing lifestyle photography --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Sản Phẩm & Thương Mại Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Sản Phẩm & Thương Mại Việt Nam"
  },
  {
    "id": "vn-81-nghe-nhan-lam-non-la",
    "name": "81. Nghe nhan lam non la (Văn Hóa & Truyền Thống)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Văn Hóa & Truyền Thống]: A Vietnamese artisan making a conical hat by hand, bamboo frame, palm leaves, focused expression, workshop with soft window light, detailed cultural documentary photography, respectful intimate mood",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Documentary",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese artisan making a conical hat by hand, bamboo frame, palm leaves, focused expression, workshop with soft window light, detailed cultural documentary photography, respectful intimate mood --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Văn Hóa & Truyền Thống). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Văn Hóa & Truyền Thống"
  },
  {
    "id": "vn-82-gom-bat-trang",
    "name": "82. Gom Bat Trang (Văn Hóa & Truyền Thống)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Văn Hóa & Truyền Thống]: A Bat Trang ceramic artisan shaping clay on a pottery wheel, wet clay texture, shelves of handmade ceramics behind, warm studio light, cinematic craft photography, authentic Vietnamese heritage",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Documentary",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Bat Trang ceramic artisan shaping clay on a pottery wheel, wet clay texture, shelves of handmade ceramics behind, warm studio light, cinematic craft photography, authentic Vietnamese heritage --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Văn Hóa & Truyền Thống). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Văn Hóa & Truyền Thống"
  },
  {
    "id": "vn-83-tranh-dong-ho",
    "name": "83. Tranh Dong Ho (Văn Hóa & Truyền Thống)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Văn Hóa & Truyền Thống]: A Vietnamese Dong Ho folk painting workshop, colorful woodblock prints drying on bamboo racks, artisan hands applying natural pigments, warm cultural documentary photography, rich texture and detail",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Documentary",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese Dong Ho folk painting workshop, colorful woodblock prints drying on bamboo racks, artisan hands applying natural pigments, warm cultural documentary photography, rich texture and detail --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Văn Hóa & Truyền Thống). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Văn Hóa & Truyền Thống"
  },
  {
    "id": "vn-84-mua-roi-nuoc",
    "name": "84. Mua roi nuoc (Văn Hóa & Truyền Thống)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Văn Hóa & Truyền Thống]: Vietnamese water puppet theater performance, colorful puppets on water, musicians in traditional costumes, stage lights reflecting on ripples, cinematic cultural performance photography, dynamic motion",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Documentary",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Vietnamese water puppet theater performance, colorful puppets on water, musicians in traditional costumes, stage lights reflecting on ripples, cinematic cultural performance photography, dynamic motion --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Văn Hóa & Truyền Thống). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Văn Hóa & Truyền Thống"
  },
  {
    "id": "vn-85-dan-bau",
    "name": "85. Dan bau (Văn Hóa & Truyền Thống)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Văn Hóa & Truyền Thống]: A Vietnamese musician playing the dan bau on a small stage, soft spotlight, traditional fabric backdrop, emotional expression, cinematic music portrait, warm cultural atmosphere",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Documentary",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese musician playing the dan bau on a small stage, soft spotlight, traditional fabric backdrop, emotional expression, cinematic music portrait, warm cultural atmosphere --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Văn Hóa & Truyền Thống). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Văn Hóa & Truyền Thống"
  },
  {
    "id": "vn-86-cho-noi-mien-tay",
    "name": "86. Cho noi mien Tay (Văn Hóa & Truyền Thống)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Văn Hóa & Truyền Thống]: Mekong Delta floating market at sunrise, boats full of fruits and vegetables, vendors exchanging goods, river mist, warm orange sky, authentic Vietnamese cultural photography, cinematic wide shot",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Documentary",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Mekong Delta floating market at sunrise, boats full of fruits and vegetables, vendors exchanging goods, river mist, warm orange sky, authentic Vietnamese cultural photography, cinematic wide shot --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Văn Hóa & Truyền Thống). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Văn Hóa & Truyền Thống"
  },
  {
    "id": "vn-87-lang-nghe-det-lua",
    "name": "87. Lang nghe det lua (Văn Hóa & Truyền Thống)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Văn Hóa & Truyền Thống]: A Vietnamese silk weaving village, artisan working at a traditional loom, colorful threads, soft window light, detailed hands, cultural craft documentary photography, elegant texture",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Documentary",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese silk weaving village, artisan working at a traditional loom, colorful threads, soft window light, detailed hands, cultural craft documentary photography, elegant texture --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Văn Hóa & Truyền Thống). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Văn Hóa & Truyền Thống"
  },
  {
    "id": "vn-88-chua-co-buoi-som",
    "name": "88. Chua co buoi som (Văn Hóa & Truyền Thống)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Văn Hóa & Truyền Thống]: An old Vietnamese pagoda in the early morning, incense smoke drifting through sunlight, mossy stone steps, red lanterns, quiet spiritual atmosphere, cinematic architectural photography",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Documentary",
    "image": "",
    "videoRef": "",
    "promptTemplate": "An old Vietnamese pagoda in the early morning, incense smoke drifting through sunlight, mossy stone steps, red lanterns, quiet spiritual atmosphere, cinematic architectural photography --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Văn Hóa & Truyền Thống). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Văn Hóa & Truyền Thống"
  },
  {
    "id": "vn-89-mua-lan-trong-hem",
    "name": "89. Mua lan trong hem (Văn Hóa & Truyền Thống)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Văn Hóa & Truyền Thống]: A lion dance performance in a Vietnamese neighborhood alley, children watching excitedly, red and yellow costume in motion, firecrackers on the ground, festive cinematic street photography",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Documentary",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A lion dance performance in a Vietnamese neighborhood alley, children watching excitedly, red and yellow costume in motion, firecrackers on the ground, festive cinematic street photography --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Văn Hóa & Truyền Thống). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Văn Hóa & Truyền Thống"
  },
  {
    "id": "vn-90-thuyen-thung-mien-bien",
    "name": "90. Thuyen thung mien bien (Văn Hóa & Truyền Thống)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Văn Hóa & Truyền Thống]: Vietnamese basket boats on a central coast beach, fishermen preparing nets at sunrise, blue wooden boats, ocean mist, authentic coastal culture, cinematic travel documentary photography",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Documentary",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Vietnamese basket boats on a central coast beach, fishermen preparing nets at sunrise, blue wooden boats, ocean mist, authentic coastal culture, cinematic travel documentary photography --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Văn Hóa & Truyền Thống). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Văn Hóa & Truyền Thống"
  },
  {
    "id": "vn-91-pho-bo-phat-sang",
    "name": "91. Pho bo phat sang (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam]: A magical Vietnamese pho stall at midnight, each bowl of pho glowing softly like a tiny lantern, steam turning into delicate golden clouds, quiet alley, cinematic fantasy realism, warm street light",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A magical Vietnamese pho stall at midnight, each bowl of pho glowing softly like a tiny lantern, steam turning into delicate golden clouds, quiet alley, cinematic fantasy realism, warm street light --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam"
  },
  {
    "id": "vn-92-ca-rong-tren-song-sai-gon",
    "name": "92. Ca rong tren song Sai Gon (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam]: A transparent dragon made of river light flying above the Saigon River at night, modern skyline below, reflections shimmering on water, cinematic magical realism, elegant and awe-inspiring",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A transparent dragon made of river light flying above the Saigon River at night, modern skyline below, reflections shimmering on water, cinematic magical realism, elegant and awe-inspiring --ar 21:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam"
  },
  {
    "id": "vn-93-thu-vien-trong-nha-co",
    "name": "93. Thu vien trong nha co (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam]: An old Vietnamese house transformed into a floating library, wooden shelves, paper lanterns, books gently levitating, tiled courtyard below, warm nostalgic light, cinematic surreal realism",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "An old Vietnamese house transformed into a floating library, wooden shelves, paper lanterns, books gently levitating, tiled courtyard below, warm nostalgic light, cinematic surreal realism --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam"
  },
  {
    "id": "vn-94-ao-dai-lam-tu-suong-som",
    "name": "94. Ao dai lam tu suong som (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam]: A Vietnamese woman wearing an ao dai made of morning mist, standing in a rice field at sunrise, fabric dissolving into soft clouds, poetic fantasy fashion portrait, cinematic backlight",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese woman wearing an ao dai made of morning mist, standing in a rice field at sunrise, fabric dissolving into soft clouds, poetic fantasy fashion portrait, cinematic backlight --ar 4:5",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam"
  },
  {
    "id": "vn-95-chiec-xe-may-ky-uc",
    "name": "95. Chiec xe may ky uc (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam]: An old Vietnamese motorbike parked under a street lamp, memories appearing as tiny glowing scenes around it, rainy night, nostalgic magical realism, cinematic close-up, emotional atmosphere",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "An old Vietnamese motorbike parked under a street lamp, memories appearing as tiny glowing scenes around it, rainy night, nostalgic magical realism, cinematic close-up, emotional atmosphere --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam"
  },
  {
    "id": "vn-96-cho-hoa-tren-may",
    "name": "96. Cho hoa tren may (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam]: A Vietnamese Tet flower market floating above the clouds, boats carrying apricot blossoms and peach blossoms, warm sunrise, joyful magical realism, cinematic wide shot, vibrant festive colors",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A Vietnamese Tet flower market floating above the clouds, boats carrying apricot blossoms and peach blossoms, warm sunrise, joyful magical realism, cinematic wide shot, vibrant festive colors --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam"
  },
  {
    "id": "vn-97-quan-ca-phe-thoi-gian",
    "name": "97. Quan ca phe thoi gian (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam]: A small Vietnamese cafe where every table shows a different decade, old radio, modern laptop, vintage phin coffee, sunlight through plants, cinematic surreal interior, cozy magical realism",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A small Vietnamese cafe where every table shows a different decade, old radio, modern laptop, vintage phin coffee, sunlight through plants, cinematic surreal interior, cozy magical realism --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam"
  },
  {
    "id": "vn-98-vung-bien-sao-roi",
    "name": "98. Vung bien sao roi (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam]: A quiet Vietnamese fishing village under a sky full of falling stars, basket boats glowing with small lanterns, ocean reflecting the galaxy, peaceful cinematic fantasy landscape",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A quiet Vietnamese fishing village under a sky full of falling stars, basket boats glowing with small lanterns, ocean reflecting the galaxy, peaceful cinematic fantasy landscape --ar 21:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam"
  },
  {
    "id": "vn-99-canh-dong-lua-va-robot-hien-lanh",
    "name": "99. Canh dong lua va robot hien lanh (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam]: A gentle farming robot helping Vietnamese farmers harvest rice, golden fields, conical hats, buffalo nearby, warm sunset, hopeful future-of-agriculture mood, cinematic realism, human-centered",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "A gentle farming robot helping Vietnamese farmers harvest rice, golden fields, conical hats, buffalo nearby, warm sunset, hopeful future-of-agriculture mood, cinematic realism, human-centered --ar 16:9",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam"
  },
  {
    "id": "vn-100-sai-gon-trong-mua-anh-sang",
    "name": "100. Sai Gon trong mua anh sang (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam)",
    "definition": "Ý tưởng tạo ảnh/video điện ảnh Việt Nam thuộc nhóm [Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam]: Saigon after a summer rain, thousands of tiny glowing reflections rising from puddles like fireflies, motorbikes passing slowly, warm street food lights, cinematic magical realism, emotional urban beauty",
    "category": "vietnam",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Saigon after a summer rain, thousands of tiny glowing reflections rising from puddles like fireflies, motorbikes passing slowly, warm street food lights, cinematic magical realism, emotional urban beauty --ar 9:16",
    "whenToUse": "Thích hợp tạo ảnh minh họa bài viết, carousel, ảnh bìa, phong cách nhiếp ảnh điện ảnh đời sống Việt Nam (Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam). Dùng tốt trên Midjourney v6/v7, DALL-E 3, Flux 1.1, Stable Diffusion, Leonardo, Ideogram.",
    "bestPractices": "Giữ prompt tiếng Anh để model hiểu tốt nhất. Có thể thay đổi tỉ lệ khung hình (--ar 16:9 cho phong cảnh, --ar 4:5 cho Instagram/Facebook, --ar 9:16 cho TikTok/Reels). Thêm vào cuối: 'no watermark, no extra fingers, no distorted text'.",
    "commonMistakes": [
      "Để chi tiết chữ tiếng Việt bị vẽ nguệch ngoạc vô nghĩa",
      "Khuôn mặt hoặc bàn tay bị méo mó nếu không kèm negative prompt",
      "Ánh sáng bị phẳng, thiếu phân lớp tiền cảnh - trung cảnh - hậu cảnh"
    ],
    "recommendedMotion": "CINEMATIC PAN / SLOW ZOOM",
    "group": "Ý Tưởng Lạ, Đẹp & Điện Ảnh Vẫn Gần Gũi Việt Nam"
  },
  {
    "id": "omni-travel-bangkok-rooftop-monsoon",
    "name": "Bangkok Rooftop Monsoon (Mưa Nhiệt Đới Tầng Thượng Bangkok)",
    "definition": "Prompt video du lịch sang trọng 10 giây: Cảnh hoàng hôn Bangkok chuyển mưa giông nhiệt đới trên hồ bơi vô cực tầng thượng. Những đám mây tím vần vũ trên các tòa chọc trời, giọt mưa gợn sóng phản chiếu ánh đèn neon lấp lánh, du khách đứng dưới mái kính ngắm tia chớp và làn sương mờ điện ảnh.",
    "category": "travel",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: luxury rooftop during a sudden tropical rain. Subject: [Subject]. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Wide shot of a Bangkok-style skyline at dusk, storm clouds glowing violet above high-rises.\n2.0-4.0s: Rain begins on a rooftop infinity pool; droplets ripple across reflected city lights.\n4.0-7.0s: A traveler steps under a glass canopy, looking out as neon and lightning brighten the scene.\n7.0-10.0s: Camera glides along the pool edge toward the skyline, rain calming into a cinematic mist.\nVisual style: luxury travel film, moody tropical city, glossy reflections, 9:16 vertical.\nAudio: rain, distant thunder, rooftop ambience, elegant chill beat.\nAvoid: readable hotel logos, unsafe lightning, distorted skyline.",
    "whenToUse": "Video quảng bá khách sạn 5 sao, rooftop bar, travel cinematic vlog, Reels/TikTok du lịch Đông Nam Á phong cách sang trọng.",
    "bestPractices": "Đặc tả phản chiếu mặt nước hồ bơi và ánh sáng neon xuyên qua làn mưa. Giữ prompt tiếng Anh để AI hiểu rõ chuyển động máy quay theo timeline.",
    "commonMistakes": [
      "Logo khách sạn bị vẽ sai lệch vô nghĩa",
      "Tia sét quá chói làm cháy sáng khung hình",
      "Đường chân trời bị méo mó các tòa cao ốc"
    ],
    "recommendedMotion": "SMOOTH POOL GLIDE / WIDE PAN",
    "audioCue": "Rain, distant thunder, rooftop ambience, elegant chill beat"
  },
  {
    "id": "omni-travel-hoi-an-lantern-glide",
    "name": "Hoi An Lantern Glide (Thuyền Đèn Lồng Phố Cổ Hội An)",
    "definition": "Prompt video du lịch lãng mạn 10 giây: Hành trình xuôi dòng sông Hoài ngắm hoa đăng phố cổ Hội An lúc chập tối. Cận cảnh hoa đăng thủ công phát sáng màu cam ấm áp, bóng đèn lồng lững lờ trôi trên mặt nước xanh biếc, du khách sải bước trên cầu cổ và góc máy lướt từ trên cao mơ màng.",
    "category": "travel",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: romantic lantern river sequence with cinematic pacing. Subject: [Subject]. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Macro shot of a handmade lantern glowing warm orange, fabric texture visible.\n2.0-4.0s: Camera tilts down to lantern reflections floating on a calm river at blue hour.\n4.0-7.0s: A traveler walks across a small bridge, silhouette framed by rows of lanterns and old architecture.\n7.0-10.0s: Slow overhead glide above boats and reflections, dreamy but realistic.\nVisual style: cinematic destination reel, warm lantern bokeh, 9:16 vertical.\nAudio: soft water, distant market ambience, gentle traditional-inspired strings.\nAvoid: readable shop signs, stereotypes, overcrowded frame.",
    "whenToUse": "Quảng bá du lịch di sản Việt Nam, video cặp đôi lãng mạn, Reels/Shorts du lịch văn hóa Hội An với hiệu ứng bokeh huyền ảo.",
    "bestPractices": "Tận dụng thời điểm Blue Hour (giờ xanh) tương phản với ánh sáng cam vàng của đèn lồng để tạo bảng màu điện ảnh kinh điển Teal & Orange.",
    "commonMistakes": [
      "Khung hình quá đông đúc làm mất đi tính thi vị",
      "Biển hiệu cửa hàng có chữ tiếng Việt bị vẽ nguệch ngoạc",
      "Màu đèn lồng quá bão hòa gây cảm giác nhân tạo"
    ],
    "recommendedMotion": "SLOW TILT-DOWN / OVERHEAD GLIDE",
    "audioCue": "Soft water, distant market ambience, gentle traditional-inspired strings"
  },
  {
    "id": "omni-travel-iceland-glacier-campfire",
    "name": "Iceland Glacier Campfire (Lửa Trại Cực Quang Băng Đảo)",
    "definition": "Prompt video du lịch thám hiểm thượng lưu 10 giây: Cắm trại cao cấp bên sông băng Iceland dưới dải cực quang lộng lẫy. Bàn tay sưởi ấm bên ngọn lửa bập bùng, tàn lửa bay vào không trung lạnh giá, dải lụa cực quang xanh ngọc uốn lượn và du khách khoác chăn ngắm nhìn thiên nhiên hùng vĩ.",
    "category": "travel",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: adventure luxury under aurora and glacier landscape. Subject: [Subject]. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Wide shot of a small luxury camp near a glacier, blue twilight and dramatic ice textures.\n2.0-4.0s: Close-up of hands warming near a fire pit, sparks floating into cold air.\n4.0-7.0s: Camera rises to reveal green aurora curtains moving above the camp.\n7.0-10.0s: Traveler stands wrapped in a blanket, tiny against the vast glacier and sky.\nVisual style: epic travel cinematography, natural aurora, high contrast, 9:16 vertical.\nAudio: wind, fire crackle, distant low cinematic drone.\nAvoid: fake neon aurora, unsafe glacier walking, logos.",
    "whenToUse": "Quảng cáo tour thám hiểm cao cấp (luxury adventure), du lịch Bắc Âu, video thiên nhiên vũ trụ kỳ vĩ trên nền nhạc điện ảnh sâu lắng.",
    "bestPractices": "Độ tương phản cao giữa màu xanh lam lạnh lẽo của khối băng và sắc cam ấm áp của đốm lửa trại giúp chủ thể nổi bật tuyệt đối.",
    "commonMistakes": [
      "Cực quang vẽ dạng màu neon giả tạo phi tự nhiên",
      "Băng tuyết bị mờ hoặc thiếu chi tiết vân nứt bề mặt",
      "Tỷ lệ con người và phong cảnh không cân xứng"
    ],
    "recommendedMotion": "CAMERA CRANE UP / SLOW REVEAL",
    "audioCue": "Wind, fire crackle, distant low cinematic drone"
  },
  {
    "id": "omni-travel-snow-ryokan-morning",
    "name": "Snow Ryokan Morning (Buổi Sáng Ryokan Tuyết Trắng)",
    "definition": "Prompt video nghỉ dưỡng tối giản 10 giây: Buổi sáng mùa đông thanh bình tại lữ quán Ryokan Nhật Bản. Khói nghi ngút bốc lên từ tách trà gốm cạnh khung cửa sổ mờ sương tuyết, cánh cửa trượt mở ra khu vườn tuyết rơi tĩnh lặng và du khách chậm rãi bước ra hiên gỗ ngắm thiên nhiên tĩnh tại.",
    "category": "travel",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: peaceful Japanese-style inn morning in winter. Subject: [Subject]. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Close-up of steam rising from a ceramic tea cup near a frosted window.\n2.0-4.5s: Sliding door opens to a snowy garden, soft flakes falling in silence.\n4.5-7.0s: A guest steps onto a wooden veranda in slippers, slow and contemplative.\n7.0-10.0s: Wide shot of a warm inn interior framing the cold white garden outside.\nVisual style: quiet luxury travel, minimalist composition, soft winter light, 9:16 vertical.\nAudio: tea pour, snow hush, wooden floor creak, calm koto-like notes.\nAvoid: cultural clichés, readable signage, warped architecture.",
    "whenToUse": "Video quảng bá onsen/ryokan, phong cách nghỉ dưỡng Wabi-sabi Nhật Bản, nội dung thư giãn chữa lành (healing/slow living).",
    "bestPractices": "Tận dụng cấu trúc đóng khung (frame within frame) từ cửa trượt shoji để làm nổi bật cảnh tuyết rơi bên ngoài.",
    "commonMistakes": [
      "Kiến trúc nhà gỗ bị méo mó khung cửa",
      "Bông tuyết rơi quá nhanh như mưa bão",
      "Chèn các chi tiết sáo rỗng làm mất vẻ thanh tịnh"
    ],
    "recommendedMotion": "SLOW SLIDE / CONTEMPLATIVE REVEAL",
    "audioCue": "Tea pour, snow hush, wooden floor creak, calm koto-like notes"
  },
  {
    "id": "omni-travel-desert-stargazing-dome",
    "name": "Desert Stargazing Dome (Lều Vòm Ngắm Sao Sa Mạc)",
    "definition": "Prompt video glamping tương lai 10 giây: Căn lều vòm mái kính trong suốt giữa cồn cát vàng sa mạc. Bên trong giường nệm êm ái và đèn lồng ấm cúng đối lập với sắc xanh huyền bí của màn đêm sa mạc, chuyển cảnh timelapse hoàng hôn hòa vào bầu trời ngập tràn dải Ngân Hà lấp lánh.",
    "category": "travel",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: futuristic desert glamping under stars. Subject: [Subject]. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Drone-like glide over golden dunes at sunset toward a transparent glamping dome.\n2.0-4.0s: Inside the dome, warm bedding and lanterns contrast with cool desert blue outside.\n4.0-7.0s: Time-lapse transition: sunset fades into a sky full of crisp stars.\n7.0-10.0s: Couple or solo traveler sits outside by a small fire, looking up at the Milky Way.\nVisual style: luxury desert escape, cinematic time-lapse, realistic stars, 9:16 vertical.\nAudio: wind over sand, fire crackle, soft ambient percussion.\nAvoid: unrealistic constellations, logos, unsafe fire spread.",
    "whenToUse": "Video quảng bá resort sa mạc (Dubai, Jordan, Sahara), glamping sang trọng, video thiên văn ngắm dải Ngân Hà (Milky Way).",
    "bestPractices": "Sử dụng hiệu ứng time-lapse chuyển tiếp mượt mà từ ráng chiều hoàng hôn sang bầu trời sao đêm chân thực.",
    "commonMistakes": [
      "Các chòm sao vẽ quá dày đặc hoặc phi thực tế",
      "Cát sa mạc bị trơn láng mất vân sóng tự nhiên",
      "Lửa trại cháy lan bất thường không an toàn"
    ],
    "recommendedMotion": "DRONE GLIDE / SKY TIMELAPSE",
    "audioCue": "Wind over sand, fire crackle, soft ambient percussion"
  },
  {
    "id": "omni-travel-bali-villa-rain-reset",
    "name": "Bali Villa Rain Reset (Mưa Nhiệt Đới Thư Giãn Villa Bali)",
    "definition": "Prompt video nghỉ dưỡng chữa lành (wellness) 10 giây: Không gian tĩnh lặng của căn villa nhiệt đới Bali trong cơn mưa rào ấm áp. Từng giọt mưa rơi tí tách từ tán lá chuối xuống hồ bơi riêng, khung cửa gỗ mở ra phòng ngủ spa sang trọng và du khách thư thả viết nhật ký giữa thiên nhiên xanh mát.",
    "category": "travel",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: wellness retreat during warm rain. Subject: [Subject]. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Close-up of rain dripping from tropical leaves into a private villa pool.\n2.0-4.0s: Camera passes through open wooden doors into a calm spa-like bedroom.\n4.0-7.0s: A traveler writes in a journal while rain blurs lush greenery outside.\n7.0-10.0s: Slow pullback across the pool, villa lights glowing warmly in tropical mist.\nVisual style: wellness travel reel, warm rain, tactile natural materials, 9:16 vertical.\nAudio: rain, pool droplets, soft ambient music.\nAvoid: overcrowded resort, brand signs, fake tropical colors.",
    "whenToUse": "Quảng bá khu nghỉ dưỡng sinh thái, resort villa Ubud Bali, yoga retreat, nội dung thư giãn ASMR tiếng mưa nhiệt đới.",
    "bestPractices": "Đặc tả các chất liệu tự nhiên: gỗ thô, rèm lanh, đá tự nhiên và làn sương mù nhiệt đới bảng lảng bao bọc khu vườn.",
    "commonMistakes": [
      "Màu lá cây bị đẩy bão hòa quá đà trông như đồ chơi",
      "Cảnh quay có bóng người đông đúc làm mất tính riêng tư",
      "Chữ viết trong sổ nhật ký bị lỗi AI"
    ],
    "recommendedMotion": "SLOW PULLBACK / PUSH-THROUGH DOORS",
    "audioCue": "Rain, pool droplets, soft ambient music"
  },
  {
    "id": "omni-travel-new-york-dawn-transition",
    "name": "New York Dawn Transition (Bình Minh Đô Thị New York)",
    "definition": "Prompt video chuyển động đô thị điện ảnh 10 giây: Hành trình đón bình minh New York từ ga tàu điện ngầm lúc tảng sáng đến tầng thượng ngắm đường chân trời rực rỡ. Match cut từ ô cửa kính toa tàu phản chiếu phố xá thức giấc đến toàn cảnh ánh nắng vàng rọi qua các tòa nhà chọc trời.",
    "category": "travel",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: subway morning becomes skyline sunrise. Subject: [Subject]. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Close-up of sneakers stepping onto a quiet subway platform before dawn.\n2.0-4.0s: Train doors open; interior light creates a cinematic frame around the traveler.\n4.0-7.0s: Match cut from moving train window reflections to city streets waking up.\n7.0-10.0s: Rooftop wide shot: sunrise over a recognizable big-city skyline without specific brand signs.\nVisual style: urban travel montage, documentary cinematic, 9:16 vertical.\nAudio: subway rumble, city ambience, hopeful beat.\nAvoid: readable ads, unsafe platform edge, distorted crowds.",
    "whenToUse": "Video du lịch đô thị (city travel montage), video thời trang đường phố, nhịp sống thành phố lớn phong cách hiện đại đầy năng lượng.",
    "bestPractices": "Áp dụng kỹ thuật Match Cut chuyển cảnh giữa phản chiếu ô cửa sổ toa tàu và đường phố để tạo nhịp điệu biên tập chuyên nghiệp.",
    "commonMistakes": [
      "Biển quảng cáo hiện rõ chữ vô nghĩa",
      "Đám đông người đi lại bị lỗi biến dạng tay chân",
      "Góc đứng quá sát mép đường ray gây cảm giác không an toàn"
    ],
    "recommendedMotion": "MATCH CUT / ROOFTOP DRONE PULLOUT",
    "audioCue": "Subway rumble, city ambience, hopeful beat"
  },
  {
    "id": "omni-travel-alpine-train-panorama",
    "name": "Alpine Train Panorama (Chuyến Tàu Cửa Kính Vượt Dãy Alps)",
    "definition": "Prompt video du lịch chậm thượng lưu 10 giây: Chuyến tàu ngắm cảnh cao cấp chạy qua dãy núi Alps phủ tuyết trắng. Tách cà phê ấm nóng bên cửa sổ kính toàn cảnh, chuyển tiêu cự từ hơi cà phê sang dãy núi hùng vĩ lướt qua ngoài ô cửa và đoàn tàu băng qua cầu cạn viaduct ngập tràn nắng vàng.",
    "category": "travel",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: luxury scenic train through mountains. Subject: [Subject]. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Interior close-up of a hand holding hot coffee beside a panoramic train window.\n2.0-4.0s: Camera shifts focus from coffee steam to snow mountains moving outside.\n4.0-7.0s: Exterior tracking shot of the train crossing a high viaduct through alpine light.\n7.0-10.0s: Passenger silhouette gazes through the window as golden sun hits the peaks.\nVisual style: slow travel luxury, cinematic natural light, 9:16 vertical.\nAudio: train rhythm, coffee cup tap, soft orchestral ambience.\nAvoid: rail logos, unrealistic tracks, warped mountains.",
    "whenToUse": "Quảng bá du lịch Thụy Sĩ/Áo (Glacier Express), trải nghiệm du lịch bằng tàu hỏa cao cấp (luxury rail journey), cảm giác bình yên thư thái.",
    "bestPractices": "Kỹ thuật Rack Focus (chuyển nét từ tách cà phê tiền cảnh sang dãy núi tuyết hậu cảnh) kết hợp góc quay flycam tracking theo đoàn tàu.",
    "commonMistakes": [
      "Đường ray uốn lượn phi thực tế",
      "Dãy núi bị vẽ méo mó không tự nhiên",
      "Logo thương hiệu đường sắt bị biến dạng"
    ],
    "recommendedMotion": "RACK FOCUS / EXTERIOR TRACKING",
    "audioCue": "Train rhythm, coffee cup tap, soft orchestral ambience"
  },
  {
    "id": "omni-travel-mediterranean-sail-evening",
    "name": "Mediterranean Sail Evening (Thuyền Buồm Hoàng Hôn Địa Trung Hải)",
    "definition": "Prompt video thương mại du thuyền cao cấp 10 giây: Chuyến hải trình trên thuyền buồm gỗ lướt qua vách đá vôi trắng Địa Trung Hải lúc hoàng hôn. Dây buồm căng gió, mặt boong gỗ tếch bóng loáng rẽ sóng biển xanh ngọc và nụ cười rạng rỡ của du khách trong làn gió biển ngập tràn ánh nắng vàng ấm.",
    "category": "travel",
    "difficulty": "Intermediate",
    "mood": "Romantic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: premium sailboat escape at sunset. Subject: [Subject]. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Low shot of a sail rope tightening as the boat catches warm wind.\n2.0-4.0s: Camera glides along polished wood deck toward sparkling blue water.\n4.0-7.0s: Wide shot of the sailboat crossing golden sunset light near white coastal cliffs.\n7.0-10.0s: Close-up of a traveler smiling calmly, hair moving in sea breeze, sun flare soft.\nVisual style: Mediterranean luxury travel commercial, golden hour, 9:16 vertical.\nAudio: sail cloth, waves, wind, soft cinematic guitar.\nAvoid: brand flags, unsafe leaning, overexposed sun.",
    "whenToUse": "Video quảng bá du thuyền biển Hy Lạp/Ý (Amalfi, Santorini), kỳ nghỉ hè thượng lưu (summer luxury holiday), video thời trang du lịch biển.",
    "bestPractices": "Bắt trọn ánh sáng ven hoàng hôn (golden hour rim light) và hiệu ứng lóa sáng ống kính nhẹ nhàng (soft sun flare) để tạo không khí sang trọng.",
    "commonMistakes": [
      "Mặt trời bị cháy sáng hoàn toàn (overexposed)",
      "Chuyển động sóng biển bị giật đơ",
      "Tư thế đứng trên tàu không an toàn"
    ],
    "recommendedMotion": "LOW ANGLE GLIDE / GOLDEN FLARE CLOSEUP",
    "audioCue": "Sail cloth, waves, wind, soft cinematic guitar"
  },
  {
    "id": "omni-travel-hidden-waterfall-suite",
    "name": "Hidden Waterfall Suite (Phòng Suite Hướng Thác Nước Bí Ẩn)",
    "definition": "Prompt video resort thiên đường 10 giây: Căn phòng suite đẳng cấp mở toang khung cửa lụa hướng thẳng ra thác nước hùng vĩ ẩn mình giữa rừng già. Cửa trượt mở ra ban công với hồ bơi vô cực ngập tràn hoa cỏ, làn sương thác nước bắt tia nắng ban mai tạo thành khung cảnh thần tiên tuyệt mỹ.",
    "category": "travel",
    "difficulty": "Advanced",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Generate a 10-second vertical 9:16 cinematic video for Gemini Omni. Concept: dream resort suite opens onto a waterfall. Subject: [Subject]. Keep character/object continuity across shots, use native audio, and make the visuals polished, impressive, and high-end.\nTimeline:\n0.0-2.0s: Camera opens on a quiet luxury bedroom with linen curtains moving in humid breeze.\n2.0-4.0s: Doors slide open, revealing green jungle and mist beyond the terrace.\n4.0-7.0s: Camera glides outside to a private plunge pool facing a hidden waterfall.\n7.0-10.0s: Waterfall mist catches sunlight, turning the entire scene into a premium dreamscape.\nVisual style: cinematic resort fantasy grounded in realism, lush detail, 9:16 vertical.\nAudio: curtains, distant waterfall, birds, serene music.\nAvoid: unrealistic architecture, crowded scene, text overlays.",
    "whenToUse": "Video quảng bá resort siêu sang (ultra-luxury eco resort), concept kỳ nghỉ trong mơ (dreamscape vacation), video bất động sản nghỉ dưỡng cao cấp.",
    "bestPractices": "Kết hợp chuyển động lướt máy chậm rãi từ không gian nội thất sang trọng ra thiên nhiên rừng thác hùng vĩ để tạo cảm giác ngỡ ngàng (sense of awe).",
    "commonMistakes": [
      "Kiến trúc căn phòng bị vẽ phi lý",
      "Dòng thác nước nhìn như tranh vẽ 2D",
      "Hiện các dòng chữ hoặc logo ảo trên màn hình"
    ],
    "recommendedMotion": "SLOW GLIDE OUTSIDE / MIST PANORAMA",
    "audioCue": "Curtains, distant waterfall, birds, serene music"
  },
  {
    "id": "omni-mastery-product-reference",
    "name": "Omni Master: Tạo Video Từ Ảnh Sản Phẩm (Reference Image)",
    "definition": "Quy trình chuẩn Gemini Omni: Sử dụng ảnh sản phẩm gốc làm tham chiếu chính. Giữ nguyên 100% hình dáng, màu sắc, bao bì và logo thương hiệu. Camera chuyển động quay quanh sản phẩm (orbit 20 độ) với ánh sáng studio tối giản cao cấp.",
    "category": "omni",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Dùng ảnh [Subject] này làm tham chiếu chính. Tạo video 10 giây, định dạng 9:16. Giữ đúng hình dáng, màu sắc, tỉ lệ và vị trí logo của sản phẩm. Bối cảnh: studio tối giản màu trắng kem. Hành động: sản phẩm đứng yên, camera slow orbit 20 độ, ánh sáng lướt nhẹ qua bề mặt. Phong cách: premium product commercial, sạch, cao cấp, chân thực. Âm thanh: nhạc nền nhẹ, không giọng nói. Chữ cuối video: \"[Thông điệp]\". Không làm biến dạng bao bì. Không thêm chữ sai. Không đổi màu sản phẩm.",
    "whenToUse": "Chủ shop, thương hiệu thương mại điện tử cần biến 1 ảnh chụp sản phẩm thành video quảng cáo 10s đăng TikTok, Reels, Shorts mà không làm biến dạng bao bì.",
    "bestPractices": "Cung cấp ảnh sản phẩm chụp thẳng rõ nét. Giữ sản phẩm đứng yên, chỉ để camera và ánh sáng di chuyển để tránh lỗi biến dạng hình thể.",
    "commonMistakes": [
      "Bắt sản phẩm xoay quá nhanh khiến logo bị méo",
      "Không khóa màu bao bì khiến AI tự đổi tông màu",
      "Thêm quá nhiều chi tiết phụ kiện gây rối mắt"
    ],
    "recommendedMotion": "SLOW ORBIT 20° / LIGHT SWEEP",
    "audioCue": "Subtle ambient synth, soft glass chime"
  },
  {
    "id": "omni-mastery-skincare-commercial",
    "name": "Omni Master: TVC Mỹ Phẩm & Skincare Cao Cấp",
    "definition": "Quy trình làm video quảng cáo mỹ phẩm 10s: Macro shot giọt serum/kem dưỡng rơi chậm trên mặt kính, camera orbit nhẹ quanh chai serum trong không gian studio trắng kem và ánh sáng high-key mềm mại.",
    "category": "omni",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Tạo video dọc 9:16 dài 10 giây cho [Subject]. Dùng ảnh sản phẩm làm tham chiếu chính, giữ đúng hình dáng, màu sắc, nắp và vị trí logo. 0-2 giây: macro shot giọt tinh chất trong suốt rơi chậm lên bề mặt kính. 2-6 giây: chai serum xuất hiện ở trung tâm, hơi sương nhẹ, giọt nước lấp lánh. 6-10 giây: nền chuyển sang trắng kem, chữ \"Da căng mướt mỗi sáng\" hiện lên. Phong cách skincare premium, sạch, dịu, tự nhiên. Ánh sáng high-key, bóng đổ rất nhẹ. Không thêm mặt người. Không thay đổi bao bì. Không tạo chữ mới trên chai.",
    "whenToUse": "Quảng cáo serum, kem dưỡng, mỹ phẩm làm đẹp trên mạng xã hội với cảm giác cao cấp, tinh khiết và an tâm cho người xem.",
    "bestPractices": "Dùng ánh sáng High-key (sáng đều, bóng mờ mịn) và góc máy macro cận cảnh giọt dưỡng chất để tạo sự tin cậy về chất lượng.",
    "commonMistakes": [
      "Thêm khuôn mặt người khiến chất lượng không đồng đều",
      "Màu bao bì bị biến đổi qua các giây",
      "Nền quá tối làm mất vẻ trong trẻo của ngành làm đẹp"
    ],
    "recommendedMotion": "MACRO DROP / ORBIT FOCUS",
    "audioCue": "Liquid droplet sound, soft ambient piano"
  },
  {
    "id": "omni-mastery-summer-beverage",
    "name": "Omni Master: Video Đồ Uống Mùa Hè & Trà Trái Cây",
    "definition": "Quy trình video đồ uống giải khát 10s: Đá viên rơi vào ly thủy tinh sủi bọt, cận cảnh lát trái cây tươi mọng nước đọng sương trên thành ly và ánh nắng chiều ấm áp trên bàn gỗ ngoài hiên.",
    "category": "omni",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Tạo video 10 giây cho [Subject], định dạng 9:16. Chủ thể là ly nước trong suốt, có đá và lát trái cây tươi. Bối cảnh: bàn gỗ ngoài hiên, nắng chiều nhẹ. 0-3 giây: đá rơi vào ly, bọt khí nổi lên. 3-7 giây: camera close-up lát trái cây và giọt nước trên thành ly. 7-10 giây: ly đặt cạnh bình trà, chữ \"Mát lành từng ngụm\" xuất hiện. Phong cách realistic summer beverage commercial. Âm thanh: đá va vào ly, tiếng rót nước nhẹ. Không thêm tay người. Không làm nước trông như nhựa.",
    "whenToUse": "Video menu quán cà phê, trà sữa, cocktail, mocktail mùa hè kích thích cơn khát của khách hàng ngay trong 3 giây đầu.",
    "bestPractices": "Âm thanh tiếng đá va vào ly lách cách và bọt khí sủi bọt chân thực là chìa khóa giữ chân người xem short-form.",
    "commonMistakes": [
      "Nước nhìn bị dẻo như gel nhân tạo",
      "Bàn tay người rót nước bị biến dạng ngón",
      "Ánh sáng quá gắt làm mất độ trong của ly thủy tinh"
    ],
    "recommendedMotion": "CLOSE-UP REVEAL / TILT UP",
    "audioCue": "Ice clink, liquid pour, sparkling fizz"
  },
  {
    "id": "omni-mastery-motion-graphic-explainer",
    "name": "Omni Master: Video Giải Thích Kiến Thức (Motion Graphic)",
    "definition": "Quy trình video giáo dục ngắn 10s: Biến khái niệm phức tạp (lãi kép, AI, kinh tế, công nghệ) thành hình ảnh chuyển động trực quan, hạt giống nảy mầm sinh sôi, hình khối tối giản dễ hiểu ngay cả khi tắt âm thanh.",
    "category": "omni",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Tạo video 10 giây giải thích khái niệm \"[Subject]\" cho người mới. Phong cách clean motion graphic, nền sáng, hình khối đơn giản. 0-3 giây: một biểu tượng nhỏ tượng trưng cho trạng thái ban đầu. 3-7 giây: biểu tượng phát triển và kết nối với các nhánh mới. 7-10 giây: thông điệp cốt lõi hiện rõ trên màn hình. Không dùng công thức toán phức tạp. Không nhồi nhiều chữ. Dễ hiểu khi xem không bật âm thanh.",
    "whenToUse": "Kênh giáo dục, tài chính cá nhân, giải thích thuật ngữ công nghệ, TikTok/Reels kiến thức ngắn gọn dễ viral.",
    "bestPractices": "Giới hạn mỗi cảnh chỉ 1 thông điệp duy nhất. Sử dụng hình ảnh ẩn dụ (metaphor) trực quan thay vì giải thích bằng chữ dài dòng.",
    "commonMistakes": [
      "Nhồi nhét quá nhiều chữ khiến người xem không đọc kịp",
      "Dùng biểu đồ quá phức tạp trên màn hình điện thoại 9:16",
      "Chuyển động quá nhanh gây chóng mặt"
    ],
    "recommendedMotion": "SMOOTH MORPH / GRAPHIC GROW",
    "audioCue": "Soft UI pop sounds, light upbeat acoustic"
  },
  {
    "id": "omni-mastery-claymation-explainer",
    "name": "Omni Master: Video Đất Sét Thủ Công (Claymation)",
    "definition": "Phong cách hoạt hình đất sét stop-motion ấm áp và độc đáo: Mọi vật thể, mô hình não bộ hoặc nhân vật đều được nặn từ đất sét mềm mại, hiệu ứng kết nối sáng bừng dưới ánh đèn studio ấm cúng.",
    "category": "omni",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Tạo video 10 giây giải thích [Subject]. Phong cách claymation thủ công, mọi thứ làm từ đất sét, ánh sáng ấm. 0-3 giây: các chi tiết đất sét nhỏ di chuyển vào mô hình trung tâm. 3-7 giây: các phần tử kết nối với nhau bằng sợi dây màu bằng đất sét. 7-10 giây: các điểm nối sáng lên, chữ thông điệp xuất hiện. Không dùng hình ảnh tiêu cực. Không thêm quá nhiều chữ. Chuyển động chậm và dễ hiểu.",
    "whenToUse": "Nội dung giáo dục trẻ em, bài học tâm lý, explainer video sáng tạo cần sự nổi bật và khác biệt so với video AI thông thường.",
    "bestPractices": "Đặc tả vân tay và kết cấu đất sét hữu cơ để tạo cảm giác thủ công thật (handcrafted feel) chân thực.",
    "commonMistakes": [
      "Đất sét bị biến dạng thành chất lỏng trơn láng",
      "Nhịp chuyển động quá mượt làm mất tính stop-motion đặc trưng",
      "Màu sắc quá chói lọi"
    ],
    "recommendedMotion": "STOP-MOTION STEP / CLAY MORPH",
    "audioCue": "Clay squish sound, playful acoustic guitar"
  },
  {
    "id": "omni-mastery-environment-swap",
    "name": "Omni Master: Đổi Bối Cảnh Video Có Sẵn (Background Swap)",
    "definition": "Sức mạnh chỉnh sửa hội thoại Gemini Omni: Giữ nguyên nhân vật, chuyển động cơ thể, góc quay và nhịp video gốc. Chỉ thay đổi phông nền thành quán cà phê/studio tối giản, ánh sáng nhân vật tự động đồng bộ hoàn hảo với nền mới.",
    "category": "omni",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Giữ nguyên nhân vật, trang phục, khuôn mặt, chuyển động và bố cục trong video gốc. Chỉ đổi nền phía sau thành [Subject] (ví dụ: quán cà phê tối giản buổi sáng, cây xanh nhẹ). Ánh sáng trên nhân vật phải khớp với nền mới, mềm và tự nhiên. Không làm méo tay, mặt hoặc tóc. Không đổi màu áo.",
    "whenToUse": "Tái sử dụng video quay tại nhà/phòng ngủ thành bối cảnh sang trọng, studio chuyên nghiệp mà không cần tốn tiền thuê địa điểm quay.",
    "bestPractices": "Yêu cầu rõ: 'Ánh sáng trên nhân vật phải khớp với nền mới' để tránh hiện tượng nhân vật trông như bị dán đè lên phông xanh.",
    "commonMistakes": [
      "Không khóa trang phục khiến AI tự ý đổi quần áo nhân vật",
      "Viền tóc và bàn tay bị lẹm khi tách nền",
      "Hướng ánh sáng nền và nhân vật ngược chiều nhau"
    ],
    "recommendedMotion": "LOCK CHARACTER / SWAP ENVIRONMENT",
    "audioCue": "Ambient room tone matching new environment"
  },
  {
    "id": "omni-mastery-object-replace",
    "name": "Omni Master: Đổi Vật Thể Trên Bàn (Object Replacement)",
    "definition": "Chỉnh sửa video theo ngữ cảnh: Giữ nguyên góc máy, ánh sáng và bàn tay người trong video. Thay thế vật thể cũ trên bàn bằng sản phẩm mới theo ảnh tham chiếu, giữ đúng bóng đổ và tỷ lệ kích thước thực tế.",
    "category": "omni",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Giữ nguyên camera, ánh sáng và chuyển động trong video. Thay vật thể trên bàn bằng [Subject] trong ảnh tham chiếu. Sản phẩm mới phải có kích thước hợp lý với mặt bàn, bóng đổ tự nhiên. Không thay đổi tay người và không làm sản phẩm biến dạng.",
    "whenToUse": "Tạo hàng loạt video quảng cáo sản phẩm khác nhau trên cùng một khung hình mẫu (template video) đã quay sẵn.",
    "bestPractices": "Cung cấp ảnh tham chiếu sản phẩm có góc chụp tương đồng với góc nhìn trên bàn để AI ghép tỉ lệ chính xác nhất.",
    "commonMistakes": [
      "Bóng đổ của sản phẩm mới không khớp với nguồn sáng video gốc",
      "Sản phẩm bị quá to hoặc quá nhỏ so với bàn tay",
      "Ngón tay người bị vẽ thêm hoặc biến dạng"
    ],
    "recommendedMotion": "STATIC TABLE / SEAMLESS COMPOSITE",
    "audioCue": "Object placement thud, room ambience"
  },
  {
    "id": "omni-mastery-anime-style",
    "name": "Omni Master: Chuyển Thể Sang Anime Điện Ảnh (Anime Cinematic)",
    "definition": "Biến đổi phong cách video toàn diện: Chuyển toàn bộ video người thật sang phong cách anime Makoto Shinkai/Ghibli trong trẻo. Nét vẽ sạch sẽ, ánh sáng hoàng hôn rực rỡ nhưng vẫn giữ trọn hành động và nhận diện nhân vật.",
    "category": "omni",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Giữ nguyên hành động và bố cục video gốc. Chuyển toàn bộ video sang phong cách anime điện ảnh phong cách [Subject], màu sắc trong trẻo, nét vẽ sạch, ánh sáng hoàng hôn ấm áp. Nhân vật giữ đặc điểm chính: kiểu tóc, trang phục, dáng người. Không thay đổi nội dung câu chuyện. Không thêm nhân vật mới.",
    "whenToUse": "Biến video đời thường, MV ca nhạc, vlog kỷ niệm thành hoạt hình anime nghệ thuật thu hút triệu lượt xem.",
    "bestPractices": "Chỉ định rõ phong cách ánh sáng (ví dụ: golden hour, lens flare, Makoto Shinkai sky) để tạo cảm giác điện ảnh hoài niệm.",
    "commonMistakes": [
      "Khuôn mặt nhân vật bị biến đổi lung tung giữa các frame",
      "Mất nét vẽ chi tiết ở hậu cảnh",
      "Màu sắc bị quá tối"
    ],
    "recommendedMotion": "ANIME LINE ART / SOFT GLOW",
    "audioCue": "Lo-fi anime piano, gentle wind chime"
  },
  {
    "id": "omni-mastery-risograph-poster",
    "name": "Omni Master: Phong Cách In Ấn Cổ Điển Risograph (Retro Print)",
    "definition": "Hiệu ứng in ấn nghệ thuật Retro: Hạt giấy in rực rỡ, bảng màu giới hạn 3 tông màu vintage, độ lệch màu (misregistration) có chủ đích như một tấm poster chuyển động độc đáo.",
    "category": "omni",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Giữ nguyên chuyển động chính của video. Chuyển phong cách thành risograph print về [Subject]: hạt giấy rõ, bảng màu 3 màu retro, lệch màu nhẹ có chủ đích, cảm giác poster nghệ thuật. Chuyển động mượt nhưng vẫn giữ texture in ấn hạt giấy. Không làm mất chủ thể chính.",
    "whenToUse": "Video thương hiệu thời trang indie, triển lãm nghệ thuật, bìa album nhạc indie, phong cách visual phá cách.",
    "bestPractices": "Giới hạn bảng màu ở 2-3 màu chủ đạo (ví dụ: Fluorescent Pink, Teal, Yellow) để tái hiện chính xác kỹ thuật in Risograph.",
    "commonMistakes": [
      "Màu sắc quá pha trộn làm mất chất in lưới/in riso",
      "Chuyển động quá sắc nét như 3D",
      "Hạt giấy quá to làm vỡ chi tiết chủ thể"
    ],
    "recommendedMotion": "TEXTURED MOTION / PRINT OVERLAY",
    "audioCue": "Vinyl crackle, retro synth pad"
  },
  {
    "id": "omni-mastery-beat-synced-motion",
    "name": "Omni Master: Đồng Bộ Chuyển Động Theo Nhịp Nhạc (Beat-Synced)",
    "definition": "Kỹ thuật dựng video theo nhịp điệu (Audio-Visual Sync): Sử dụng track âm thanh làm kim chỉ nam, mỗi nhịp beat mạnh làm ánh sáng nhấp nhẹ và chữ bật lên theo từng từ, giữ chủ thể ổn định ở trung tâm.",
    "category": "omni",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Dùng audio này làm nhịp chính cho [Subject]. Tạo video 10 giây có chuyển động đồng bộ với beat. Mỗi beat mạnh làm ánh sáng nhấp nhẹ và chữ xuất hiện từng từ. Chủ thể chính giữ ổn định ở trung tâm. Không cắt cảnh quá nhanh. Chuyển động phải mượt và dễ xem.",
    "whenToUse": "Video nhảy, video thời trang streetwear, video drop sản phẩm mới trên nền nhạc trending TikTok/Reels.",
    "bestPractices": "Giữ chủ thể chính ở giữa khung hình (center framing) để người xem không bị rối mắt khi nhịp chuyển động dồn dập.",
    "commonMistakes": [
      "Cắt cảnh quá nhiều làm giật mắt người xem",
      "Ánh sáng nhấp nháy quá gắt gây khó chịu",
      "Chữ xuất hiện quá nhanh không kịp đọc"
    ],
    "recommendedMotion": "BEAT PULSE / CENTER LOCK ZOOM",
    "audioCue": "Synced kick drum, rhythmic percussion"
  },
  {
    "id": "omni-mastery-before-after",
    "name": "Omni Master: Video So Sánh Trước & Sau (Before - After Transition)",
    "definition": "Khung video chuyển đổi trạng thái thuyết phục: Nửa đầu video thể hiện vấn đề tông màu xám đơn điệu, hiệu ứng quét ánh sáng ngang mượt mà mở ra trạng thái mới sáng bừng, sạch đẹp và tràn đầy sức sống.",
    "category": "omni",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Tạo video 10 giây dạng before-after cho [Subject]. 0-4 giây: trạng thái trước, màu hơi xám, bố cục đơn giản, thể hiện vấn đề. 4-6 giây: chuyển tiếp mượt bằng ánh sáng quét ngang. 6-10 giây: trạng thái sau, sáng hơn, sạch hơn, có cảm giác cải thiện rõ. Chữ trên màn hình: \"Trước\" ở nửa đầu, \"Sau\" ở nửa cuối. Không phóng đại kết quả quá mức. Không tạo claim sai sự thật.",
    "whenToUse": "Video dịch vụ decor phòng, phần mềm chỉnh sửa ảnh/video, spa làm đẹp, sản phẩm tẩy rửa, cải tạo không gian.",
    "bestPractices": "Hiệu ứng chuyển cảnh quét ánh sáng (light wipe) tạo cảm giác mượt mà và chân thực hơn hẳn việc cắt cảnh đột ngột.",
    "commonMistakes": [
      "Phóng đại kết quả phi thực tế gây mất uy tín",
      "Hai trạng thái bị lệch vị trí góc máy",
      "Thời lượng trạng thái Sau quá ngắn người xem chưa kịp thấy rõ"
    ],
    "recommendedMotion": "LIGHT WIPE TRANSITION / MATCHED ANGLE",
    "audioCue": "Whoosh transition sound, uplifting harmonic chord"
  },
  {
    "id": "omni-mastery-product-launch",
    "name": "Omni Master: Video Ra Mắt Sản Phẩm Mới (Product Launch Reveal)",
    "definition": "Video giới thiệu sản phẩm đẳng cấp Apple/Sony: Bóng tối huyền bí với ánh sáng ven hé lộ đường nét, tia sáng quét qua làm nổi bật chất liệu cao cấp và hé lộ diện mạo hoàn chỉnh cùng slogan ấn tượng.",
    "category": "omni",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Tạo video 10 giây ra mắt sản phẩm mới cho [Subject]. 0-3 giây: bóng tối, chỉ có ánh sáng viền hé lộ hình dáng tinh tế của sản phẩm. 3-7 giây: ánh sáng quét qua, lộ rõ chất liệu kim loại cao cấp và logo. 7-10 giây: ánh sáng studio hoàn chỉnh, sản phẩm đứng uy nghi ở trung tâm cùng dòng chữ \"Chính thức ra mắt\". Phong cách luxury tech launch commercial. Âm thanh: tiếng cinematic sub bass build-up, kết thúc bằng tiếng chime trong trẻo.",
    "whenToUse": "Video teaser, ngày mở bán sản phẩm mới, ra mắt bộ sưu tập thời trang, điện thoại, đồng hồ, xe hơi.",
    "bestPractices": "Xây dựng sự tò mò trong 3 giây đầu bằng ánh sáng Silhouette/Rim light trước khi bùng nổ diện mạo đầy đủ ở giây thứ 7.",
    "commonMistakes": [
      "Tiết lộ sản phẩm quá sớm làm mất yếu tố bất ngờ",
      "Chất liệu kim loại bị mờ đục không bắt sáng",
      "Logo bị méo trong lúc ánh sáng quét qua"
    ],
    "recommendedMotion": "SILHOUETTE TO FULL LIGHT / SLOW PULLBACK",
    "audioCue": "Cinematic sub-bass riser, crisp metallic chime"
  },
  {
    "id": "omni-mastery-ugc-faceless-snack",
    "name": "Omni Master: Video UGC Short-form Tự Nhiên Không Cần Mặt",
    "definition": "Công thức UGC giữ chân người xem: Góc nhìn thứ nhất (POV) mở ngăn kéo bàn làm việc lấy hộp snack, trượt nhẹ ra bàn và vài miếng snack rơi giòn tan vào bát dưới ánh sáng văn phòng tự nhiên.",
    "category": "omni",
    "difficulty": "Basic",
    "mood": "Documentary",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Tạo video dọc 9:16 dài 10 giây theo phong cách UGC cho [Subject] nhưng không có người. Chủ thể là sản phẩm trên bàn làm việc. 0-2 giây: góc nhìn POV mở ngăn kéo, sản phẩm nằm bên trong. 2-6 giây: sản phẩm trượt ra bàn, vài chi tiết rơi gọn gàng vào bát. 6-10 giây: laptop mờ ở nền sau, chữ \"Đỡ đói mà không nặng bụng\" hiện ở góc trên. Phong cách quay điện thoại tự nhiên, ánh sáng văn phòng ban ngày. Không thêm tay người nếu không cần. Không đổi bao bì.",
    "whenToUse": "Video review sản phẩm chân thực, video bán hàng TikTok Shop/Shopee Video không cần thuê KOC hay lộ mặt.",
    "bestPractices": "Giữ góc máy Handheld nhẹ nhàng và ánh sáng tự nhiên của phòng làm việc để video trông như người dùng thật tự quay.",
    "commonMistakes": [
      "Quay quá giả tạo như quảng cáo truyền hình",
      "Bàn làm việc quá bừa bộn làm mất tập trung",
      "Chữ caption che mất sản phẩm"
    ],
    "recommendedMotion": "POV PULL / CASUAL SLIDE",
    "audioCue": "Drawer open sound, crisp snack crunch"
  },
  {
    "id": "omni-mastery-productivity-broll",
    "name": "Omni Master: Video B-roll Năng Suất Làm Việc (Faceless B-Roll)",
    "definition": "Kho B-roll chất lượng cao cho nhà sáng tạo nội dung: Bàn làm việc tối giản lúc 8:30 sáng, ngọn nến thơm, cuốn sổ tay được gạch dấu checklist và điện thoại úp xuống tập trung tuyệt đối.",
    "category": "omni",
    "difficulty": "Basic",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Tạo video dọc 9:16 dài 10 giây làm B-roll cho nội dung \"[Subject]\". Bối cảnh: bàn làm việc tối giản, laptop, sổ tay, ly nước. 0-3 giây: đồng hồ bàn điểm 8:30, ánh sáng buổi sáng rọi qua rèm. 3-6 giây: checklist trên sổ được đánh dấu từng dòng. 6-10 giây: điện thoại úp xuống, camera slow push-in vào laptop. Phong cách clean productivity, sáng, yên tĩnh. Chừa khoảng trống ở 1/3 phía trên cho caption. Không có khuôn mặt người.",
    "whenToUse": "Làm video nền chèn voice-over chia sẻ kiến thức, podcast, bài học cuộc sống, video faceless trên TikTok/Reels.",
    "bestPractices": "Chừa khoảng trống 1/3 phía trên màn hình để khi chèn phụ đề (caption) không bị che khuất các chi tiết đẹp của video.",
    "commonMistakes": [
      "Khung hình quá nhiều đồ đạc lộn xộn",
      "Ánh sáng nhấp nháy không đều",
      "Chuyển động máy quá nhanh làm người xem khó đọc chữ"
    ],
    "recommendedMotion": "SLOW PUSH-IN / STATIC B-ROLL",
    "audioCue": "Clock ticking, pencil writing, morning bird chirp"
  },
  {
    "id": "omni-mastery-layer-by-layer-edit",
    "name": "Omni Master: Kỹ Thuật Sửa Video Từng Lớp (Layer-by-Layer Editing)",
    "definition": "Bí quyết vàng của đạo diễn AI chuyên nghiệp: Không bao giờ sửa nhiều thứ cùng lúc làm hỏng video. Giữ lại 100% phần đang đúng, chỉ ra lệnh sửa duy nhất 1 lớp (ánh sáng, camera hoặc bối cảnh) để đạt kết quả hoàn hảo.",
    "category": "omni",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Giữ lại tất cả những phần đang đúng trong video trước: nhân vật, chuyển động, bố cục và nhịp độ. Chỉ sửa một lớp duy nhất: [Lớp cần sửa - ví dụ: đổi ánh sáng thành cinematic rim light mềm mại hơn]. Không thay đổi các phần đã ổn định.",
    "whenToUse": "Khi video đã đạt 80% độ ưng ý nhưng cần tinh chỉnh ánh sáng, đổi màu hoặc sửa chi tiết nhỏ mà không muốn bị tạo lại từ đầu.",
    "bestPractices": "Sửa theo thứ tự chuẩn: 1. Nội dung & Hành động -> 2. Chủ thể & Nhất quán -> 3. Camera -> 4. Ánh sáng/Màu -> 5. Chữ & Âm thanh.",
    "commonMistakes": [
      "Vừa đổi nền, vừa đổi góc máy, vừa đổi trang phục trong 1 lệnh duy nhất",
      "Không nêu rõ 'Giữ lại phần đang đúng'",
      "Cố sửa một video bị lỗi cốt lõi quá 5 lần thay vì tạo lại bản mới"
    ],
    "recommendedMotion": "PRESERVE BASE / SURGICAL EDIT",
    "audioCue": "Studio silence, precise edit confirmation chime"
  },
  {
    "id": "dp-deakins-golden-hour",
    "name": "Roger Deakins: Golden Hour & God Rays (1917 / Blade Runner 2049)",
    "definition": "Phong cách ánh sáng huyền thoại của DP Roger Deakins: Ánh nắng vàng cam ấm 30 phút trước hoàng hôn chiếu xiên qua bụi mịn và sương mù tạo thành những dải tia sáng god rays hữu hình, bóng đổ dài và mềm, làn da nhân vật như được tắm vàng.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Wide shot, slow tracking on anamorphic lens. In the cinematographic style of Roger Deakins: golden hour lighting, sun low on horizon, warm orange backlight, visible god rays through floating dust particles, long soft shadows. Subject: [Subject]. 2.39:1 cinematic aspect ratio, 35mm lens, shallow depth of field, natural atmospheric haze.",
    "whenToUse": "Cảnh suy tư, hoài niệm, mở đầu hoặc kết thúc phim, khoảnh khắc yên bình trước thảm họa, phim lịch sử hoặc đồng quê.",
    "bestPractices": "Dùng cụm magic keywords: 'golden hour, low sun backlight, god rays, dust particles, long shadows, warm orange tones'.",
    "commonMistakes": [
      "Ánh sáng quá chói làm cháy sáng (blow out) chi tiết khuôn mặt",
      "Thiếu hạt bụi (dust in air) khiến tia sáng không thể hiện rõ chiều sâu",
      "Màu vàng bị gắt như màu nghệ"
    ],
    "recommendedMotion": "SLOW TRACKING / GLIDE",
    "audioCue": "Gentle evening breeze, distant cicadas, warm acoustic strings"
  },
  {
    "id": "dp-wong-kar-wai-neon-noir",
    "name": "Wong Kar-wai: Neon Noir & Cyan-Magenta (In the Mood for Love / Chungking Express)",
    "definition": "Phong cách điện ảnh Hong Kong huyền thoại của Vương Gia Vệ & Christopher Doyle: Ánh sáng neon đỏ/xanh/hồng chiếu chéo (cross-lighting) phản chiếu trên mặt đường ướt mưa, kính và làn da, bóng tối sâu thẳm xen lẫn cảm giác cô độc lãng mạn giữa đô thị về đêm.",
    "category": "lighting",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Medium close-up, static on anamorphic lens. In the cinematographic style of Wong Kar-wai: neon noir lighting, red and teal cross-lighting, vibrant neon signs reflected on wet skin and glossy surfaces, deep shadows, rich cyan-magenta color contrast. Subject: [Subject]. Slow motion, 2.39:1 aspect ratio, subtle motion blur, melancholy mood.",
    "whenToUse": "Cảnh đêm thành phố, cảm xúc cô đơn đô thị, lãng mạn buồn, hoài niệm tình yêu, quán bar đêm, con phố mưa Sài Gòn / Hong Kong.",
    "bestPractices": "Thêm hiệu ứng phản chiếu bề mặt ướt ('wet surface reflection') và chuyển động chậm (step-printing / slow motion).",
    "commonMistakes": [
      "Màu neon quá chói làm mất chi tiết da",
      "Thiếu vùng tối (deep shadow) khiến khung hình bị bão hòa màu quá đà",
      "Chuyển động quá nhanh làm mất chất thơ hoài niệm"
    ],
    "recommendedMotion": "STATIC / STEP-PRINTING SLOW MO",
    "audioCue": "Muffled city rain, distant saxophonist, vinyl crackle"
  },
  {
    "id": "dp-christopher-doyle-dreamy",
    "name": "Christopher Doyle: High-Key Dreamy & Pastel Haze (Hero / 2046)",
    "definition": "Phong cách ánh sáng thơ mộng, hơi dư sáng có chủ ý (intentional soft overexposure): Ánh sáng cao tỏa đều mịn như sương, bóng đổ tối thiểu, bảng màu pastel trong trẻo tạo cảm giác ký ức, giấc mơ thần tiên hoặc tuổi thơ tinh khôi.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Artistic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Medium shot, slow dolly-in. In the cinematographic style of Christopher Doyle: high-key soft lighting, slightly overexposed, pastel color palette, dreamy haze, minimal shadows, soft diffused window light. Subject: [Subject]. Shot on 85mm portrait lens, shallow depth of field, ethereal atmosphere, glowing highlights.",
    "whenToUse": "Cảnh hồi tưởng ký ức, cảnh mơ, cảnh thời thơ ấu, khoảnh khắc tinh khôi của tình yêu đầu, quảng cáo làm đẹp cao cấp.",
    "bestPractices": "Dùng ống kính chân dung 85mm với độ sâu trường ảnh mỏng (shallow DOF) và ánh sáng cửa sổ khuếch tán (diffused window light).",
    "commonMistakes": [
      "Cháy sáng mất nét hoàn toàn chi tiết chính",
      "Màu sắc quá nhạt nhòa không có điểm nhấn",
      "Ánh sáng gắt tạo bóng cứng"
    ],
    "recommendedMotion": "SLOW DOLLY-IN / GENTLE FLOAT",
    "audioCue": "Soft wind chime, delicate harp glissando, airy breath"
  },
  {
    "id": "dp-gordon-willis-chiaroscuro",
    "name": "Gordon Willis: Low-Key Chiaroscuro (The Godfather / The Prince of Darkness)",
    "definition": "Phong cách 'Hoàng tử bóng tối' Gordon Willis: Phần lớn khung hình chìm trong bóng tối sâu thẳm, một nguồn sáng duy nhất từ trên rọi xuống tạo tam giác ánh sáng Rembrandt trên gò má, mang lại cảm giác uy quyền tuyệt đối, bí ẩn và căng thẳng nghẹt thở.",
    "category": "lighting",
    "difficulty": "Advanced",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Medium close-up, low angle, locked-off static. In the cinematographic style of Gordon Willis: low-key chiaroscuro lighting, single hard light source from above, half face in deep black shadow, distinct Rembrandt triangle highlight on cheek, pitch black negative space background. Subject: [Subject]. 35mm film grain, high contrast, intimidating atmosphere.",
    "whenToUse": "Cảnh quyền lực ông trùm, đối đầu căng thẳng, bí mật ngầm, phản diện, cuộc thẩm vấn hoặc suy tư trong bóng tối.",
    "bestPractices": "Để tỷ lệ bóng tối (negative space) chiếm ít nhất 60-70% khung hình và giữ camera đứng im (locked-off) để tăng sức nặng tâm lý.",
    "commonMistakes": [
      "Thêm đèn phụ (fill light) làm mất vẻ huyền bí của bóng tối",
      "Camera rung lắc làm hỏng sự uy nghiêm",
      "Cháy sáng vùng highlight trên trán"
    ],
    "recommendedMotion": "LOCKED-OFF STATIC / ZERO MOTION",
    "audioCue": "Clock ticking, low cinematic sub-drone, heavy silence"
  },
  {
    "id": "dp-emmanuel-lubezki-realism",
    "name": "Emmanuel Lubezki: Practical Light Realism (The Revenant / Birdman)",
    "definition": "Phong cách 3 giải Oscar liên tiếp của Emmanuel Lubezki: Chỉ sử dụng nguồn sáng thực tế có sẵn trong cảnh (ngọn nến, đèn dầu, ánh lửa bập bùng, ánh trăng hoặc đèn bàn), không dùng đèn trường quay giả tạo, tạo cảm giác chân thực sống động tột cùng.",
    "category": "lighting",
    "difficulty": "Advanced",
    "mood": "Documentary",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Handheld medium shot with subtle natural micro-shake. In the cinematographic style of Emmanuel Lubezki: 100% practical lighting only, motivated solely by flickering candlelight and ambient moonlight through cracks, no artificial fill light, naturalistic deep shadows, raw organic color temperature. Subject: [Subject]. Wide lens 24mm, ultra realistic textures.",
    "whenToUse": "Cảnh sinh tồn hoang dã, phim tài liệu, drama gia đình chân thực, cảnh ăn tối bên ánh nến, phim độc lập.",
    "bestPractices": "Kết hợp cú máy cầm tay Handheld có độ rung vi mô tự nhiên ('subtle micro-shake') và ống kính góc rộng 24mm.",
    "commonMistakes": [
      "Ánh sáng quá sáng và đều như đèn studio",
      "Mất chuyển động bập bùng tự nhiên của ngọn lửa/ánh nến",
      "Chống rung gimbal quá mượt làm mất cảm giác tài liệu"
    ],
    "recommendedMotion": "HANDHELD MICRO-SHAKE / RAW PAN",
    "audioCue": "Fire crackle, distant wolf howl, wood creak"
  },
  {
    "id": "dp-bradford-young-blue-hour",
    "name": "Bradford Young: Blue Hour & Tungsten Melancholy (Arrival / Selma)",
    "definition": "Phong cách điện ảnh độc đáo của Bradford Young: 30 phút sau khi mặt trời lặn (giờ xanh), bầu trời chuyển xanh thẫm kết hợp với ánh đèn đường Vonfram (Tungsten 3200K) vàng ấm vừa bật, tạo sự cân bằng tương phản Teal-Orange u buồn và sâu lắng.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Wide shot, static, eye-level. In the cinematographic style of Bradford Young: blue hour lighting, deep indigo sky, warm tungsten 3200K street lamps illuminating the foreground, perfectly balanced ambient sky and practical light, melancholic introspective mood, rich teal-orange contrast. Subject: [Subject]. Anamorphic lens, shallow DOF.",
    "whenToUse": "Cảnh chuyển giao thời gian, suy tư cuối ngày, khoảnh khắc đứng trước quyết định lớn của cuộc đời, tâm trạng phức tạp.",
    "bestPractices": "Chỉ định rõ nhiệt độ màu kỹ thuật: '3200K warm tungsten practicals mixed with 5600K deep blue ambient twilight'.",
    "commonMistakes": [
      "Bầu trời bị tối đen thành cảnh đêm thay vì sắc xanh thẫm blue hour",
      "Ánh đèn đường quá chói làm át màu trời",
      "Thiếu độ tương phản giữa nguồn sáng ấm và lạnh"
    ],
    "recommendedMotion": "STATIC WIDE / SLOW PAN",
    "audioCue": "Distant city hum, twilight bird call, mellow cello drone"
  },
  {
    "id": "dp-conrad-hall-hard-backlight",
    "name": "Conrad Hall: Hard Backlight Silhouette & Rim Light (Road to Perdition / American Beauty)",
    "definition": "Phong cách bậc thầy Conrad Hall: Nguồn sáng cực mạnh đặt ngay sau lưng chủ thể tạo đường viền sáng chói (rim light) bao bọc toàn bộ cơ thể, gương mặt chìm trong bóng tối bí ẩn, tia sáng lens flare quét ngang màn hình đầy tính biểu tượng.",
    "category": "lighting",
    "difficulty": "Intermediate",
    "mood": "Cinematic",
    "image": "",
    "videoRef": "",
    "promptTemplate": "Medium wide shot, low angle, static. In the cinematographic style of Conrad Hall: intense hard backlight silhouette, brilliant golden rim light outlining the entire silhouette, face in expressive shadow, horizontal lens flare, atmospheric haze, powerful symbolic contrast. Subject: [Subject]. 2.39:1 anamorphic frame, epic scale.",
    "whenToUse": "Giới thiệu nhân vật quan trọng/anh hùng, khoảnh khắc thiêng liêng, cảnh đối đầu sinh tử, cảnh chia tay trong ánh chiều tà.",
    "bestPractices": "Dùng góc máy thấp (low angle) kết hợp với từ khóa 'intense rim light outlining figure' để tạo vị thế uy nghi.",
    "commonMistakes": [
      "Mặt nhân vật bị sáng đều làm mất hiệu ứng Silhouette viền sáng",
      "Hậu cảnh quá tối không thấy nguồn sáng ngược",
      "Không có sương mờ (atmospheric haze) làm tia sáng bị gãy"
    ],
    "recommendedMotion": "LOW ANGLE STATIC / PUSH-IN",
    "audioCue": "Orchestral brass swell, dramatic wind whoosh, heartbeat pulse"
  }
];
