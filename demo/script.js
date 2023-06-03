var quill = new Quill("#editor", {
	theme: "snow",
	modules: {
		imageResize: {
			parchment: this.Quill.import("parchment"),
			modules: ["Resize", "DisplaySize", "Toolbar"],
			displaySize: true,
			handleClick: (img) => {
				console.log("i am clicked", img);
				img.src = "./10th.jpg";
			},
		},
	},
});
