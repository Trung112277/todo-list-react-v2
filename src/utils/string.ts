export function toSlug(str: string): string {
  str = str.toLowerCase();
  
  // Convert Vietnamese characters to Latin
  const from = "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵÀÁÃẢẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆĐÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴ";
  const to = "aaaaaaaaaaaaaaaaaeeeeeeeeeeediiiiiooooooooooooooooouuuuuuuuuuuyyyyyAAAAAAAAAAAAAAAAAEEEEEEEEEEEDIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYY";
  
  for (let i = 0; i < from.length; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  // Remove special characters
  str = str.replace(/[^a-z0-9 -]/g, '');
  
  // Replace spaces with hyphens
  str = str.replace(/\s+/g, '-');
  
  // Remove consecutive hyphens
  str = str.replace(/-+/g, '-');
  
  // Remove leading and trailing hyphens
  str = str.replace(/^-+|-+$/g, '');
  
  return str;
} 