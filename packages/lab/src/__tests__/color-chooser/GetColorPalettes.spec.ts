import { makePalette, getColorPalettes } from "../../color-chooser";

describe("getColorPalettes", () => {
  describe("makePalette", () => {
    it("should return all the shades of the color requested in an array", () => {
      expect(makePalette("purple")).toEqual([
        "rgb(249, 224, 247)",
        "rgb(247, 212, 244)",
        "rgb(245, 201, 241)",
        "rgb(243, 189, 238)",
        "rgb(241, 178, 235)",
        "rgb(223, 156, 225)",
        "rgb(205, 135, 215)",
        "rgb(192, 116, 203)",
        "rgb(169, 97, 181)",
        "rgb(150, 78, 162)",
        "rgb(129, 60, 141)",
        "rgb(103, 46, 122)",
        "rgb(83, 37, 109)",
        "rgb(59, 16, 84)",
      ]);
    });
    it("should return an empty array if given a non valid color", () => {
      expect(makePalette("pink")).toEqual([]);
    });
  });
  describe("getColorPalettes", () => {
    it("should return all the shades of the Salt Colors", () => {
      expect(getColorPalettes()).toEqual([
        [
          "rgb(203, 231, 249)",
          "rgb(183, 222, 246)",
          "rgb(164, 213, 244)",
          "rgb(144, 204, 242)",
          "rgb(125, 195, 240)",
          "rgb(100, 177, 228)",
          "rgb(75, 159, 216)",
        ],
        [
          "rgb(51, 141, 205)",
          "rgb(45, 129, 189)",
          "rgb(38, 112, 169)",
          "rgb(21, 92, 147)",
          "rgb(0, 71, 123)",
          "rgb(12, 53, 102)",
          "rgb(0, 40, 88)",
        ],
        [
          "rgb(209, 244, 201)",
          "rgb(184, 232, 182)",
          "rgb(160, 221, 164)",
          "rgb(136, 210, 145)",
          "rgb(112, 199, 127)",
          "rgb(93, 189, 116)",
          "rgb(77, 180, 105)",
        ],
        [
          "rgb(60, 171, 96)",
          "rgb(48, 156, 90)",
          "rgb(36, 135, 75)",
          "rgb(24, 114, 61)",
          "rgb(12, 93, 46)",
          "rgb(1, 73, 32)",
          "rgb(0, 57, 18)",
        ],
        [
          "rgb(218, 240, 240)",
          "rgb(199, 232, 232)",
          "rgb(180, 224, 225)",
          "rgb(162, 217, 218)",
          "rgb(141, 205, 209)",
          "rgb(123, 193, 200)",
          "rgb(99, 181, 192)",
        ],
        [
          "rgb(73, 160, 172)",
          "rgb(48, 149, 166)",
          "rgb(0, 130, 151)",
          "rgb(27, 107, 133)",
          "rgb(0, 85, 113)",
          "rgb(1, 65, 86)",
          "rgb(0, 49, 76)",
        ],
        [
          "rgb(255, 232, 191)",
          "rgb(254, 223, 166)",
          "rgb(254, 214, 142)",
          "rgb(254, 205, 118)",
          "rgb(254, 197, 94)",
          "rgb(250, 181, 81)",
          "rgb(246, 165, 68)",
        ],
        [
          "rgb(242, 149, 56)",
          "rgb(238, 133, 43)",
          "rgb(234, 115, 25)",
          "rgb(224, 101, 25)",
          "rgb(214, 85, 19)",
          "rgb(204, 68, 13)",
          "rgb(194, 52, 7)",
        ],
        [
          "rgb(255, 227, 224)",
          "rgb(255, 207, 201)",
          "rgb(255, 187, 178)",
          "rgb(255, 167, 156)",
          "rgb(255, 148, 133)",
          "rgb(255, 128, 111)",
          "rgb(255, 108, 88)",
        ],
        [
          "rgb(255, 89, 66)",
          "rgb(237, 65, 42)",
          "rgb(227, 43, 22)",
          "rgb(196, 32, 16)",
          "rgb(166, 21, 11)",
          "rgb(136, 10, 5)",
          "rgb(106, 0, 0)",
        ],
        [
          "rgb(249, 224, 247)",
          "rgb(247, 212, 244)",
          "rgb(245, 201, 241)",
          "rgb(243, 189, 238)",
          "rgb(241, 178, 235)",
          "rgb(223, 156, 225)",
          "rgb(205, 135, 215)",
        ],
        [
          "rgb(192, 116, 203)",
          "rgb(169, 97, 181)",
          "rgb(150, 78, 162)",
          "rgb(129, 60, 141)",
          "rgb(103, 46, 122)",
          "rgb(83, 37, 109)",
          "rgb(59, 16, 84)",
        ],
        [
          "rgb(242, 244, 246)",
          "rgb(234, 237, 239)",
          "rgb(224, 228, 233)",
          "rgb(217, 221, 227)",
          "rgb(206, 210, 217)",
          "rgb(197, 201, 208)",
          "rgb(180, 183, 190)",
        ],
        [
          "rgb(159, 163, 170)",
          "rgb(132, 135, 142)",
          "rgb(116, 119, 127)",
          "rgb(97, 101, 110)",
          "rgb(76, 80, 91)",
          "rgb(68, 72, 79)",
          "rgb(59, 63, 70)",
        ],
        [
          "rgb(255, 255, 255)",
          "rgb(47, 49, 54)",
          "rgb(42, 44, 47)",
          "rgb(36, 37, 38)",
          "rgb(22, 22, 22)",
          "rgb(0, 0, 0)",
          "rgba(0, 0, 0, 0)",
        ],
      ]);
    });
  });
});
